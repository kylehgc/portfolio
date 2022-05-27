import { motion, useElementScroll } from 'framer-motion'

interface Props {
	children: React.ReactNode
	inView: boolean
}

const SpringAnimation: React.FC<Props> = ({ children, inView }) => {
	return (
		<>
			<motion.div
				initial={false}
				animate={inView ? 'grow' : 'shrink'}
				variants={{
					grow: {
						scale: 1,
						transition: {
							type: 'spring',
							duration: 1,
							bounce: 0.5,
							delay: 0.05,
						},
					},
					shrink: {
						scale: 0.73,
						transition: {
							type: 'spring',
							duration: 0.7,
							bounce: 0,
							delay: 0.05,
						},
					},
				}}
			>
				{children}
			</motion.div>
		</>
	)
}

export default SpringAnimation
