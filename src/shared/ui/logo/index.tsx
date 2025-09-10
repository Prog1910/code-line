import classNames from 'classnames'
import type { ImgHTMLAttributes } from 'react'

import styles from './logo.module.scss'

type LogoProps = ImgHTMLAttributes<HTMLImageElement> & {
	className?: string
	link: string
}

export const Logo = ({ className, link, ...specific }: LogoProps) => (
	<a
		className={classNames(styles.logo, className)}
		href={link}
		target={link !== '/' ? '_blank' : '_self'}>
		<img
			{...specific}
			className={styles.logo__image}
			alt=''
			loading='lazy'
		/>
	</a>
)
