import { ReactNode, useRef, useState } from 'react'
import { useEffect, useCallback } from 'react'
import useLineDraw from '../Hooks/useLineDraw'
import Curtain from './Curtain'

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
interface Props {
	innerWidth: number
	innerHeight: number
}
const OpeningAnimation: React.FC<Props> = ({ innerWidth, innerHeight }) => {
	const [animations, setAnimations] = useState<LineSegment[]>()
	const { lineDone, canvasRef } = useLineDraw(animations, 250)
	useEffect(() => {
		setAnimations(getAnimations(innerWidth, innerHeight))
	}, [innerHeight, innerWidth])
	if (innerHeight && innerWidth) {
		return (
			<>
				<Curtain
					innerHeight={innerHeight}
					innerWidth={innerWidth}
					lineDone={lineDone}
				/>
				{lineDone ? null : (
					<canvas
						height={innerHeight}
						width={innerWidth}
						style={{ top: 0, position: 'fixed', zIndex: 1001 }}
						ref={canvasRef}
					/>
				)}
			</>
		)
	}
	return <></>
}

export default OpeningAnimation
