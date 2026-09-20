import { S3ServiceException } from '@aws-sdk/client-s3';

export type ApiResult<T> =
	| { ok: true; data: T }
	| { ok: false; error: { code: string; message: string } };

export function toApiError(e: unknown): { code: string; message: string } {
	if (e instanceof S3ServiceException) {
		switch (e.name) {
			case 'PreconditionFailed':
				return {
					code: 'SLUG_TAKEN',
					message: 'A post with this title already exists.',
				};
			case 'NoSuchKey':
				return { code: 'NOT_FOUND', message: 'Post not found.' };
			case 'NoSuchBucket':
			case 'Forbidden':
				return {
					code: 'STORAGE_UNAVAILABLE',
					message: 'Storage is currently unavailable.',
				};
		}
	}
	if (e instanceof Error && e.message.includes('exceeds limit')) {
		return { code: 'TOO_LARGE', message: e.message };
	}
	return { code: 'UNKNOWN', message: 'Something went wrong.' };
}

export function statusFor(e: unknown): number {
	if (e instanceof S3ServiceException && e.name === 'PreconditionFailed')
		return 409;
	if (e instanceof S3ServiceException && e.name === 'NoSuchKey') return 404;
	if (e instanceof Error && e.message.includes('exceeds limit')) return 413;
	return 500;
}
