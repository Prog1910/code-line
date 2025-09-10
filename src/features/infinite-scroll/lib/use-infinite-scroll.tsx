import { useEffect, useRef } from 'react'

export const useInfiniteScroll = (callback: () => void, options?: IntersectionObserverInit) => {
	const observerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) callback()
		}, options)

		if (observerRef.current) observer.observe(observerRef.current)

		return () => observer.disconnect()
	}, [callback, options])

	return observerRef
}
