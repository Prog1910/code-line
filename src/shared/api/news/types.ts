import type { TNewsFilterParam } from '@/shared/types'

export interface INewsApiRequest {
	readonly beginDate: number
	readonly endDate: number
	readonly category?: TNewsFilterParam
	readonly page?: number
}

export interface INewsApiResponse {
	readonly response: {
		readonly docs: INewsApiArticle[]
	}
}

export interface INewsApiArticle {
	readonly _id: string
	readonly web_url: string
	readonly headline: {
		readonly main: string
	}
	readonly source: string
	readonly multimedia: {
		readonly caption: string
		readonly default: {
			readonly url: string
			readonly width: number
			readonly height: number
		}
	}
	readonly pub_date: string
	readonly abstract: string
}
