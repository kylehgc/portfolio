import { SlideFade } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface Props {
	children: React.ReactNode
	delay?: number
	opacity?: number
	initial?: boolean
}

const InViewTransition: React.FC<Props> = ({
	children,
	delay = 0,
	opacity = 0,
	initial = true,
}) => {
	const [top, setTop] = useState(false)
	const { inView, ref, entry } = useInView()
	useEffect(() => {
		if (entry) {
			if (top && entry.boundingClientRect.y > 0) {
				setTop(false)
			} else {
				if (!top && entry.boundingClientRect.y < 0) {
					setTop(true)
				}
			}
		}
	}, [entry, top])

	return (
		<>
			<SlideFade
				animate
				initial={{ opacity: 0 }}
				offsetY={top ? '-40px' : '40px'}
				transition={{ enter: { duration: 0.3, delay, opacity } }}
				in={inView}
				ref={ref}
			>
				{children}
			</SlideFade>
		</>
	)
}

export default InViewTransition
