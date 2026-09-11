'use server';

import { ApiResult, toApiError } from '@/lib/api';
import { deletePost, NewPost, savePost } from '@/lib/blog';
import { revalidatePath } from 'next/cache';

export async function createPostAction(
	input: NewPost,
): Promise<ApiResult<{ slug: string }>> {
	try {
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
		await deletePost(slug);
		revalidatePath('/blog');
		return { ok: true, data: null };
	} catch (e) {
		return { ok: false, error: toApiError(e) };
	}
}
