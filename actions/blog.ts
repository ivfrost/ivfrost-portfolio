'use server';

import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { ApiResult, toApiError } from '@/stories/lib/api';
import { deletePost, NewPost, savePost } from '@/stories/lib/blog';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';

async function requireAdmin() {
	const session = await getServerSession(authOptions);
	if (!session) throw new Error('UNAUTHORIZED');
	return session;
}

export async function createPostAction(
	input: NewPost,
): Promise<ApiResult<{ slug: string }>> {
	try {
		await requireAdmin();
		const slug = await savePost(input);
		revalidatePath('/blog');
		return { ok: true, data: { slug } };
	} catch (e) {
		return { ok: false, error: toApiError(e) };
	}
}

export async function updatePostAction(
	slug: string,
	input: NewPost,
): Promise<ApiResult<{ slug: string }>> {
	try {
		await requireAdmin();
		const savedSlug = await savePost(input, true, slug);
		revalidatePath('/blog');
		revalidatePath(`/blog/${slug}`);
		return { ok: true, data: { slug: savedSlug } };
	} catch (e) {
		return { ok: false, error: toApiError(e) };
	}
}

export async function deletePostAction(slug: string): Promise<ApiResult<null>> {
	try {
		await requireAdmin();
		await deletePost(slug);
		revalidatePath('/blog');
		return { ok: true, data: null };
	} catch (e) {
		return { ok: false, error: toApiError(e) };
	}
}
