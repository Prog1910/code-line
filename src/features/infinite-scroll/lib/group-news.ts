import type { INews } from '@/shared/types'

export const groupNewsByDay = (allNews: INews[]) =>
	allNews.reduce<Record<string, INews[]>>((groups: Record<string, INews[]>, news: INews) => {
		const date = news.publishedAt.split('T')[0]
		;(groups[date] ??= []).push(news)
		return groups
	}, {}) ?? []
