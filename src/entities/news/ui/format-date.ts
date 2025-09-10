export const formatDate = (date: Date | string): string =>
	new Date(date).toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
		hour12: true,
		hour: 'numeric',
		minute: 'numeric'
	})
