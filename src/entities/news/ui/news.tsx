import classNames from 'classnames'

import { formatDate } from '@/entities/news/ui/format-date'
import type { INews } from '@/shared/types'

import styles from './news.module.scss'

type NewsProps = {
	news: INews
}

export const News = ({ news }: NewsProps) => {
	const hasImage = !!news.image?.url

	const onClick = () => window.open(news.link, '_blank')

	return (
		<article
			className={classNames(styles.news, { [styles['news--has-image']]: hasImage })}
			onClick={onClick}>
			<h4 className={styles.news__source}>{news.source}</h4>
			{hasImage && (
				<img
					className={styles.news__image}
					src={news.image.url}
					alt={news.image.caption}
					width={news.image.width}
					height={news.image.height}
					loading='lazy'
				/>
			)}
			<div className={styles.news__content}>
				<p className={styles.news__title}>{news.header}</p>
			</div>
			<time className={styles.news__date}>{formatDate(news.publishedAt)}</time>
		</article>
	)
}
