import classNames from 'classnames'
import { useState } from 'react'

import { BurgerButton } from '@/shared/ui/burger-button'
import { Logo } from '@/shared/ui/logo'
import { Overlay } from '@/shared/ui/overlay'

import styles from './header.module.scss'

export const Header = () => {
	const [isOverlayOpen, setIsOverlayOpen] = useState(false)

	const toggleOverlay = (isOpen: boolean) => {
		setIsOverlayOpen(isOpen)
		document.documentElement.classList.toggle('is-lock', isOpen)
	}

	return (
		<>
			<header className={styles.header}>
				<div className={classNames(styles.header__inner, 'container')}>
					<BurgerButton
						className={classNames(styles['header__burger-button'], { [styles['header__burger-button--is-open']]: isOverlayOpen })}
						isOpen={isOverlayOpen}
						onToggle={toggleOverlay}
					/>
					<Logo
						className={classNames(styles.header__title, { 'visually-hidden': isOverlayOpen })}
						link='/'
						src='/logo.svg'
						width='112'
						height='29'
						loading='lazy'
					/>
				</div>
			</header>
			<Overlay
				isOpen={isOverlayOpen}
				onClose={() => toggleOverlay(false)}
			/>
		</>
	)
}
