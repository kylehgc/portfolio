import { Fade } from '@chakra-ui/react'
import { useState } from 'react'
import { useEffect } from 'react'
import useLineDraw from '../Hooks/useLineDraw'
import Curtain from './Curtain'
import IconAnimation from './IconAnimation'
type InterSection = [number, number]

interface LineSegment {
	starting: InterSection
	ending: InterSection
}

const getAnimations = (
	innerWidth: number,
	innerHeight: number,
): LineSegment[] => {
	return [
		{
			starting: [innerWidth * 0.5, innerHeight],
			ending: [innerWidth * 0.25, innerHeight * 0.75],
		},
		{
			starting: [innerWidth * 0.25, innerHeight * 0.75],
			ending: [innerWidth * 0.75, innerHeight * 0.25],
		},
		{
			starting: [innerWidth * 0.75, innerHeight * 0.25],
			ending: [innerWidth * 0.5, 0],
		},
	]
}

const OpeningAnimation: React.FC = () => {
	const [animations, setAnimations] = useState<LineSegment[]>()
	const { lineDone, canvasRef, start } = useLineDraw(animations, 250)
	const [iconDone, setIconDone] = useState(false)
	const [windowInnerWidth, setWindowInnerWidth] = useState(0)
	const [windowInnerHeight, setWindowInnerHeight] = useState(0)

	useEffect(() => {
		if (iconDone) {
			start()
		}
	}, [iconDone, start])
	useEffect(() => {
		if (window) {
			setWindowInnerHeight(innerHeight)
			setWindowInnerWidth(innerWidth)
			setAnimations(getAnimations(innerWidth, innerHeight))
		}
	}, [])

	{
		return (
			<>
				<Fade
					unmountOnExit
					style={{
						height: '100vh',
						width: '100vw',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						background: 'transparent',
						zIndex: 1000,
						top: 0,
						position: 'fixed',
					}}
					in={!lineDone}
					initial={false}
					transition={{ exit: { duration: 0.7 } }}
				>
					<IconAnimation setDone={setIconDone} />
				</Fade>
				<Curtain
					innerHeight={'100vh'}
					innerWidth={'100vw'}
					lineDone={lineDone}
				/>
				{lineDone ? null : (
					<canvas
						height={windowInnerHeight}
						width={windowInnerWidth}
						style={{
							height: '100vh',
							width: '100vw',
							top: 0,
							position: 'fixed',
							zIndex: 999,
						}}
						ref={canvasRef}
					/>
				)}
			</>
		)
	}
}

export default OpeningAnimation
