import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import { groupNewsByDay, useInfiniteScroll } from '@/features/infinite-scroll'
import { newsApi } from '@/shared/api/news'
import { Loader } from '@/shared/ui/loader'
import { NewsGroups } from '@/widgets/news-group'

function formatDate(date: Date): number {
	const year = date.getFullYear().toString().padStart(2, '0')
	const month = date.getMonth().toString().padStart(2, '0')
	const day = date.getDate().toString().padStart(2, '0')

	return Number(`${year}${month}${day}`)
}

export const HomePage = () => {
	const { data, fetchNextPage, isFetching, error } = newsApi.useGetAllNewsInfiniteQuery({
		beginDate: import.meta.env.VITE_API_BEGIN_DATE,
		endDate: formatDate(new Date())
	})

	const groupedNews = groupNewsByDay(data?.pages.flat() ?? [])

	const observerRef = useInfiniteScroll(fetchNextPage, {
		root: null,
		rootMargin: '0px',
		threshold: 1.0
	})

	return (
		<>
			<NewsGroups groups={groupedNews} />

			<div
				ref={observerRef}
				style={{ paddingBlock: 24, textAlign: 'center' }}>
				{isFetching && <Loader />}
				{!isFetching && (error as FetchBaseQueryError)?.status === 429 && <p>Too many requests. Please wait a moment.</p>}
			</div>
		</>
	)
}
