import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { type INewsApiRequest, type INewsApiResponse } from '@/shared/api/news'
import { mapArticleToNews } from '@/shared/api/news/mapper'
import type { INews } from '@/shared/types'

const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

export const newsApi = createApi({
	reducerPath: 'news',
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	endpoints: (builder) => ({
		getAllNews: builder.infiniteQuery<INews[], INewsApiRequest, number>({
			infiniteQueryOptions: {
				initialPageParam: 0,
				getNextPageParam: (_lastPage, _allPages, lastPageParam) => lastPageParam + 1
			},
			query({ queryArg, pageParam }) {
				const params = new URLSearchParams({
					begin_date: queryArg.beginDate.toString(),
					end_date: queryArg.endDate.toString(),
					page: pageParam.toString(),
					sort: 'newest',
					'api-key': API_KEY
				})

				if (queryArg.category) {
					params.append('fq', queryArg.category)
				}

				return `?${params.toString()}`
			},
			transformResponse: (response: INewsApiResponse) => response.response.docs?.map(mapArticleToNews) ?? []
		})
	})
})

export const { useGetAllNewsInfiniteQuery } = newsApi
