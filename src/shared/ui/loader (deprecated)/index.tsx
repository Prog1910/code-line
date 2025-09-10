import styles from './loader.module.scss'

// Меньше по размеру сделать не удалось, но жалко удалять, оставил

export const Loader = () => {
	return (
		<div className={styles.loader}>
			<span className={styles.loader__inner}></span>
		</div>
	)
}
