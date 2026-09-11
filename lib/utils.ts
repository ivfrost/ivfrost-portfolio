export const formatDate = (date: string, locale: string = 'es-ES') => {
	const [year, month] = date.split('-');
	const fullLocale =
		locale === 'es' ? 'es-ES' : locale === 'en' ? 'en-EN' : locale;
	return new Date(parseInt(year), parseInt(month) - 1).toLocaleDateString(
		fullLocale,
		{ month: 'short', year: 'numeric' },
	);
};

export const readingTime = (body: string) => {
	return Math.ceil(body.split(/\s+/).length / 200); // ~200wpm
};
