import classNames from 'classnames'

import SpinnerIcon from '@/shared/assets/icons/spinner.svg?react'

import styles from './loader.module.scss'

type LoaderProps = {
	className?: string
}

export const Loader = ({ className }: LoaderProps) => (
	<div className={classNames(styles.loader, className)}>
		<SpinnerIcon className={styles.loader__icon} />
	</div>
)
