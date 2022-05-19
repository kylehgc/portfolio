import { ReactNode, useRef, useState } from 'react'
import { useEffect, useCallback } from 'react'
import useLineDraw from '../Hooks/useLineDraw'
import Curtain from './Curtain'

// interface Props {
// 	children: ReactNode
// }

type InterSection = [number, number]

interface LineSegment {
	starting: InterSection
	ending: InterSection
}

interface AnimationRef {
	current: LineSegment[]
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
	const [innerHeight, setInnerHeight] = useState(0)
	const [innerWidth, setInnerWidth] = useState(0)
	const [animations, setAnimations] = useState<LineSegment[]>()
	const { lineDone, canvasRef } = useLineDraw(animations, 300)

	useEffect(() => {
		if (typeof window !== undefined) {
			setInnerHeight(window.innerHeight)
			setInnerWidth(window.innerWidth)
		}
	}, [])
	useEffect(() => {
		if (innerWidth & innerHeight) {
			setAnimations(getAnimations(innerWidth, innerHeight))
		}
	}, [innerHeight, innerWidth])
	if (innerHeight && innerWidth) {
		return (
			<>
				<Curtain
					innerHeight={innerHeight}
					innerWidth={innerWidth}
					lineDone={lineDone}
				/>
				<canvas
					height={innerHeight}
					width={innerWidth}
					style={{ position: 'fixed', zIndex: 11 }}
					ref={canvasRef}
				/>
			</>
		)
	}
	return <></>
}

export default OpeningAnimation
