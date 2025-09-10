import type { INews } from '@/shared/types'

import type { INewsApiArticle } from './types'

export const mapArticleToNews = (article: INewsApiArticle): INews => ({
	id: article._id,
	header: article.abstract || article.headline.main,
	link: article.web_url,
	publishedAt: article.pub_date,
	source: article.source,
	image: article.multimedia.default && {
		caption: article.multimedia.caption,
		...article.multimedia.default
	}
})
