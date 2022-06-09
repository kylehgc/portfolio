import { useCallback, useEffect, useRef, useState } from 'react'
import useThemeColors from './useThemeColors'
type InterSection = [number, number]

interface LineSegment {
	starting: InterSection
	ending: InterSection
}

const useLineDraw = (
	lineSegments: LineSegment[] | undefined,
	lineTime: number,
) => {
	const [start, setStart] = useState(false)
	const { secondary } = useThemeColors()
	const [lineDone, setLineDone] = useState(false)
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const runningAnimations = useRef<number>(0)

	const draw = (lineSegment: LineSegment, canvas: CanvasRenderingContext2D) => {
		const { starting, ending } = lineSegment
		canvas.beginPath()
		canvas.moveTo(...starting)
		canvas.lineTo(...ending)
		canvas.strokeStyle = secondary
		canvas.lineWidth = 4
		canvas.stroke()
	}

	const drawSegment = useCallback(
		(
			lineSegment: LineSegment,
			canvas: CanvasRenderingContext2D,
			lineDelay: number,
		) => {
			const { starting, ending } = lineSegment
			const frames = (lineTime / 1000) * 60
			let currentPosition = starting
			let count = 0

			const difference: [number, number] = [
				ending[0] - starting[0],
				ending[1] - starting[1],
			]

			while (count < frames) {
				runningAnimations.current++

				setTimeout(() => {
					requestAnimationFrame(() => {
						draw(
							{
								starting: currentPosition,
								ending: [
									currentPosition[0] + difference[0] / frames,
									currentPosition[1] + difference[1] / frames,
								],
							},
							canvas,
						),
							(currentPosition = [
								currentPosition[0] + difference[0] / frames,
								currentPosition[1] + difference[1] / frames,
							])
						if (runningAnimations.current) {
							runningAnimations.current--
							if (runningAnimations.current === 0) {
								setLineDone(true)
							}
						}
					})
				}, (lineTime / frames) * count + lineDelay)
				count++
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[],
	)

	useEffect(() => {
		if (lineDone) {
			const canvas = canvasRef.current?.getContext('2d')
			if (canvas && canvasRef.current) {
				canvas.clearRect(
					0,
					0,
					canvasRef.current.width,
					canvasRef.current.height,
				)
			}
		}
	}, [lineDone])

	useEffect(() => {
		const canvas = canvasRef.current?.getContext('2d')
		if (canvas && lineSegments) {
			lineSegments.forEach((lineSegment, index) => {
				drawSegment(lineSegment, canvas, lineTime * index)
			})
		}
	}, [drawSegment, lineSegments, lineTime, start])

	return { lineDone, canvasRef, start: () => setStart(true) }
}

export default useLineDraw
