import type { groupNewsByDay } from '@/features/infinite-scroll'
import { NewsList } from '@/widgets/news-list'

import { formatDate } from './format-date'
import styles from './news-group.module.scss'

export const NewsGroups = ({ groups }: { groups: ReturnType<typeof groupNewsByDay> }) => (
	<ul>
		{Object.entries(groups).map(([date, news]) => (
			<li
				className={styles['news-group']}
				key={date}>
				<h3 className={styles['news-group__title']}>News for {formatDate(date)}</h3>
				<NewsList news={news} />
			</li>
		))}
	</ul>
)
