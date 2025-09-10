import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

import { FOOTER_NAVIGATION_MENU } from '@/shared/constants'
import { Logo } from '@/shared/ui/logo'

import styles from './footer.module.scss'

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={classNames(styles.footer__inner, 'container')}>
				<nav className={styles.footer__menu}>
					<ul className={styles['footer__menu-list']}>
						{FOOTER_NAVIGATION_MENU.map(({ title, link }, index) => (
							<li key={index}>
								<NavLink
									className={styles['footer__menu-link']}
									to={link}>
									{title}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
				<div className={styles.footer__attribution}>
					Powered by
					<Logo
						link='https://developer.nytimes.com/'
						src='/src/shared/assets/images/news-api.svg'
						width='84'
						height='25'
					/>
				</div>
				<div className={styles.footer__copyright}>
					&copy; <time dateTime='2023'>2023</time> Besider. Inspired by Insider
				</div>
			</div>
		</footer>
	)
}
