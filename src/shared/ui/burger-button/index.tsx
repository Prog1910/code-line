import classNames from 'classnames'

import styles from './burger-button.module.scss'

type BurgerButtonProps = {
	className?: string
	isOpen?: boolean
	onToggle?: (isOpen: boolean) => void
}

export const BurgerButton = (props: BurgerButtonProps) => {
	const handleClick = () => {
		props.onToggle?.(!props.isOpen)
	}

	return (
		<button
			className={classNames(styles['burger-button'], props.className, { [styles['is-active']]: props.isOpen })}
			onClick={handleClick}
		/>
	)
}
