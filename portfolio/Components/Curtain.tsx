import { motion } from 'framer-motion'
interface Props {
	lineDone: boolean
	innerHeight: number | string
	innerWidth: number | string
}
const Curtain: React.FC<Props> = ({ lineDone, innerHeight, innerWidth }) => {
	return (
		<>
			<motion.div
				animate={
					lineDone
						? {
								transitionEnd: {
									display: 'none',
								},
								right: ['0%', '100%'],
								transition: { ease: 'easeOut', duration: 2 },
						  }
						: undefined
				}
				style={{
					height: innerHeight,
					width: innerWidth,
					zIndex: 900,
					top: 0,
					overflow: 'hidden',
					position: 'fixed',
					clipPath:
						'polygon(50% 50%, 25% 75%, 50% 100%, 0% 100%, 0 0, 50% 0, 75% 25%)',
					// width: window.innerWidth,
					// height: window.innerHeight,
					opacity: 0.97,
					backgroundColor: '#1A202C',
				}}
			></motion.div>

			<motion.div
				animate={
					lineDone
						? {
								left: ['0%', '100%'],
								transition: { ease: 'easeOut', duration: 2 },
								transitionEnd: {
									display: 'none',
								},
						  }
						: undefined
				}
				style={{
					height: innerHeight,
					width: innerWidth,
					zIndex: 900,
					top: 0,
					overflow: 'hidden',
					position: 'fixed',
					opacity: 0.97,
					clipPath:
						'polygon(50% 100%, 25% 75%, 50% 50%, 75% 25%, 50% 0, 100% 0, 100% 100%)',
					// width: innerWidth,
					// height: innerHeight,
					backgroundColor: '#1A202C',
				}}
			/>
		</>
	)
}

export default Curtain
