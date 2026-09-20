import {
	HeadBucketCommand,
	S3Client,
	S3ServiceException,
} from '@aws-sdk/client-s3';

export function slugify(title: string): string {
	return title
		.toLowerCase()
		.trim()
		.normalize('NFD') // split accented chars into base + diacritic
		.replace(/[\u0300-\u036f]/g, '') // strip the diacritics
		.replace(/[^a-z0-9\s-]/g, '') // remove anything not alphanumeric/space/hyphen
		.replace(/\s+/g, '-') // spaces to hyphens
		.replace(/-+/g, '-') // collapse multiple hyphens
		.replace(/^-|-$/g, ''); // trim leading/trailing hyphens
}

async function ensureBucketExists(
	bucketName: string,
	client: S3Client,
): Promise<void> {
	try {
		await client.send(new HeadBucketCommand({ Bucket: bucketName }));
	} catch (e) {
		console.error('ensureBucketExists failed:', e); // add this line
		if (e instanceof S3ServiceException && e.name === 'NotFound') {
			throw new Error(`S3 bucket "${bucketName}" does not exist.`);
		}
		if (e instanceof S3ServiceException && e.name === 'Forbidden') {
			throw new Error(
				`Access denied to S3 bucket "${bucketName}". Check IAM credentials/permissions.`,
			);
		}
		throw e;
	}
}

export async function ensureBucketExistsOnce(
	bucketName: string,
	client: S3Client,
	bucketMap: Map<string, boolean>,
): Promise<void> {
	if (bucketMap.get(bucketName) == true) return;
	await ensureBucketExists(bucketName, client);
	bucketMap.set(bucketName, true);
}
