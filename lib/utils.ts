export const formatDate = (date: string) => {
	const [year, month] = date.split('-');
	return new Date(parseInt(year), parseInt(month) - 1).toLocaleDateString(
		'es-ES',
		{ month: 'short', year: 'numeric' },
	);
};
