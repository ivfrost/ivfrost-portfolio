import {
	DeleteObjectCommand,
	GetObjectCommand,
	paginateListObjectsV2,
	PutObjectCommand,
	S3Client,
	S3ServiceException,
	waitUntilObjectNotExists,
} from '@aws-sdk/client-s3';
import matter from 'gray-matter';
import * as yaml from 'js-yaml';
import assert from 'node:assert';
import { ensureBucketExistsOnce, slugify } from './blog-utils';
import { readingTime } from './utils';
const bucketMap = new Map<string, boolean>();

export interface Post {
	slug: string;
	title: string;
	tags: string[];
	body: string;
	date: string;
	updatedAt: string;
	excerpt: string; // SEO meta tags and index page
}

export interface NewPost {
	title: string;
	tags: string[];
	body: string;
	date: string;
	excerpt: string;
}

export interface PostSummary {
	slug: string;
	title: string;
	date: string;
	tags: string[];
	excerpt: string;
	readingTime: number;
}

assert(process.env.AWS_ACCESS_KEY_ID, 'AWS_ACCESS_KEY_ID is missing');
assert(process.env.AWS_SECRET_ACCESS_KEY, 'AWS_SECRET_ACCESS_KEY is missing');
assert(process.env.AWS_S3_BUCKET_NAME, 'AWS_S3_BUCKET_NAME is missing');
assert(process.env.AWS_REGION, 'AWS_REGION is missing');
const BUCKET = process.env.AWS_S3_BUCKET_NAME;
const MAX_FILE_SIZE_BYTES = 1024 * 1024 * 10; // 10 MB

const s3 = new S3Client({
	region: process.env.AWS_REGION,
	credentials: {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
	},
});

const PREFIX = 'posts/';
const pathname = (slug: string) => `${PREFIX}${slug}.mdx`;

export async function savePost(
	post: NewPost,
	allowOverwrite = false,
	slugOverride?: string,
): Promise<string> {
	await ensureBucketExistsOnce(BUCKET, s3, bucketMap);

	if (!post.title || !post.date) {
		throw new Error(`Title and date are required fields for creating a post`);
	}
	const slug = slugOverride ?? slugify(post.title);
	const key = pathname(slug);

	const frontmatter = yaml.dump({
		slug,
		title: post.title,
		date: post.date,
		tags: post.tags,
		updatedAt: new Date().toISOString(),
		excerpt: post.excerpt,
		readingTime: readingTime(post.body),
	});
	const fileContent = `---\n${frontmatter}---\n\n${post.body.trim()}`;

	const sizeInBytes = Buffer.byteLength(fileContent, 'utf8');
	if (sizeInBytes > MAX_FILE_SIZE_BYTES) {
		throw new Error(
			`Post "${slug}" is ${sizeInBytes} bytes, exceeds limit of ${MAX_FILE_SIZE_BYTES} bytes.`,
		);
	}

	try {
		await s3.send(
			new PutObjectCommand({
				Bucket: BUCKET,
				Key: key,
				Body: fileContent,
				ContentType: 'text/markdown',
				...(!allowOverwrite && { IfNoneMatch: '*' }),
			}),
		);
		console.log(`Post with slug ${slug} saved successfully to ${BUCKET}`);
		return slug;
	} catch (e) {
		if (e instanceof S3ServiceException && e.name === 'PreconditionFailed') {
			console.error(
				`Post already exists at ${key} on ${BUCKET} (allowOverwrite is false).`,
			);
		} else if (e instanceof S3ServiceException) {
			console.error(
				`Error from S3 while uploading object to ${BUCKET}.  ${e.name}: ${e.message}`,
			);
		}
		throw e;
	}
}

export async function getPost(slug: string): Promise<Post> {
	await ensureBucketExistsOnce(BUCKET, s3, bucketMap);
	const key = pathname(slug);

	try {
		const res = await s3.send(
			new GetObjectCommand({ Bucket: BUCKET, Key: key }),
		);
		const raw = await res.Body!.transformToString('utf-8');
		const { data, content } = matter(raw);

		if (!data.title || !data.date) {
			throw new Error(
				`Post at "${key}" is missing required frontmatter (title/date).`,
			);
		}

		return {
			slug,
			title: data.title,
			date: data.date,
			tags: data.tags ?? [],
			updatedAt: data.updatedAt ?? data.date,
			excerpt: data.excerpt ?? '',
			body: content.trim(),
		};
	} catch (e) {
		if (e instanceof S3ServiceException && e.name === 'NoSuchKey') {
			throw new Error(`No post found for slug "${slug}".`);
		}
		if (e instanceof S3ServiceException) {
			console.error(
				`Error from S3 while fetching object from ${BUCKET}. ${e.name}: ${e.message}`,
			);
		}
		throw e;
	}
}

export async function getPosts(): Promise<PostSummary[]> {
	await ensureBucketExistsOnce(BUCKET, s3, bucketMap);

	const keys: string[] = [];
	try {
		for await (const page of paginateListObjectsV2(
			{ client: s3 },
			{ Bucket: BUCKET, Prefix: PREFIX },
		)) {
			if (!page.Contents || page.Contents?.length == 0) continue;
			for (const obj of page.Contents) {
				if (obj.Key) keys.push(obj.Key);
			}
		}
	} catch (e) {
		if (e instanceof S3ServiceException) {
			console.error(
				`Error from S3 while listing objects in ${BUCKET}. ${e.name}: ${e.message}`,
			);
		}
		throw e;
	}
	if (keys.length === 0) {
		return [];
	}
	const summaries = await Promise.all(
		keys.map(async (key) => {
			const slug = key.slice(PREFIX.length, -'.mdx'.length);
			const res = await s3.send(
				new GetObjectCommand({ Bucket: BUCKET, Key: key }),
			);
			const raw = await res.Body!.transformToString('utf-8');
			const { data } = matter(raw);
			if (!data.title || !data.date) {
				throw new Error(
					`Post at "${key}" is missing required frontmatter (title/date).`,
				);
			}

			return {
				slug,
				title: data.title,
				date: data.date,
				tags: data.tags ?? [],
				excerpt: data.excerpt,
				readingTime: data.readingTime,
			};
		}),
	);

	return summaries.sort((a, b) => b.date.localeCompare(a.date));
}

export async function deletePost(postSlug: string): Promise<void> {
	await ensureBucketExistsOnce(BUCKET, s3, bucketMap);
	const key = pathname(postSlug);

	try {
		await s3.send(new DeleteObjectCommand({ Bucket: BUCKET, Key: key }));
		await waitUntilObjectNotExists(
			{ client: s3, maxWaitTime: 30 },
			{ Bucket: BUCKET, Key: key },
		);
		console.log(
			`The object "${key}" from bucket "${BUCKET}" was deleted, or it didn't exist.`,
		);
	} catch (e) {
		if (e instanceof S3ServiceException && e.name === 'NoSuchBucket') {
			console.error(
				`Error from S3 while deleting object from ${BUCKET}. The bucket doesn't exist.`,
			);
		} else if (e instanceof S3ServiceException) {
			console.error(
				`Error from S3 while deleting object from ${BUCKET}. ${e.name}: ${e.message}`,
			);
		}
		throw e;
	}
}
