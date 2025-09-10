import classNames from 'classnames'

import { OVERLAY_NAVIGATION_MENU } from '@/shared/constants'

import styles from './overlay.module.scss'

type OverlayProps = {
	isOpen: boolean
	onClose: () => void
}

export const Overlay = ({ isOpen, onClose }: OverlayProps) => (
	<dialog
		className={classNames(styles.overlay, 'container')}
		open={isOpen}
		onClick={onClose}>
		<ul className={styles.overlay__list}>
			{OVERLAY_NAVIGATION_MENU.map((item) => (
				<li
					key={item}
					className={styles.overlay__item}>
					{item}
				</li>
			))}
		</ul>
	</dialog>
)
