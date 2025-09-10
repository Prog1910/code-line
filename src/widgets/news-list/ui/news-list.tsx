import { News } from '@/entities/news'
import type { INews } from '@/shared/types'

import styles from './news-list.module.scss'

type NewsListProps = {
	news: INews[]
}

export const NewsList = ({ news }: NewsListProps) => {
	return (
		<ul className={styles['news-list']}>
			{news.map((item) => (
				<li
					className={styles['news-list__item']}
					key={item.id}>
					<News news={item} />
				</li>
			))}
		</ul>
	)
}
