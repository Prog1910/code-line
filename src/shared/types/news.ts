export interface INews {
	readonly id: string
	readonly header: string
	readonly link: string
	readonly publishedAt: string
	readonly source: string
	readonly image?: INewsImage
}

interface INewsImage {
	readonly caption: string
	readonly url: string
	readonly width: number
	readonly height: number
}
