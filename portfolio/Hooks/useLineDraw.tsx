import { useCallback, useEffect, useRef, useState } from 'react'
type InterSection = [number, number]

interface LineSegment {
	starting: InterSection
	ending: InterSection
}

const useLineDraw = (
	lineSegments: LineSegment[] | undefined,
	lineTime: number,
) => {
	const [innerHeight, setInnerHeight] = useState(0)
	const intervalID = useRef<NodeJS.Timer>()
	const [lineDone, setLineDone] = useState(false)
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const runningAnimations = useRef<number>()
	const draw = (lineSegment: LineSegment, canvas: CanvasRenderingContext2D) => {
		const { starting, ending } = lineSegment
		canvas.beginPath()
		canvas.moveTo(...starting)
		canvas.lineTo(...ending)
		canvas.strokeStyle = '#9AE6B4'
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

			let currentPosition = starting
			let count = 0

			const difference: [number, number] = [
				ending[0] - starting[0],
				ending[1] - starting[1],
			]
			if (runningAnimations.current === undefined) {
				runningAnimations.current = 0
			}
			while (count < 60) {
				if (typeof runningAnimations.current === 'number') {
					runningAnimations.current++
				}
				setTimeout(() => {
					requestAnimationFrame(() => {
						draw(
							{
								starting: currentPosition,
								ending: [
									currentPosition[0] + difference[0] / 60,
									currentPosition[1] + difference[1] / 60,
								],
							},
							canvas,
						),
							(currentPosition = [
								currentPosition[0] + difference[0] / 60,
								currentPosition[1] + difference[1] / 60,
							])
						if (runningAnimations.current) {
							runningAnimations.current--
						}
					})
				}, (lineTime / 60) * count + lineDelay)
				count++
			}
		},
		[lineTime],
	)
	useEffect(() => {
		intervalID.current = setInterval(() => {
			if (runningAnimations.current === 0) {
				setLineDone(true)
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
		}, 100)

		if (lineDone === true) {
			clearInterval(intervalID.current)
		}
		return () => clearInterval(intervalID.current)
	}, [lineDone, lineTime])

	useEffect(() => {
		const canvas = canvasRef?.current?.getContext('2d')

		if (canvas && lineSegments) {
			lineSegments.forEach((lineSegment, index) => {
				drawSegment(lineSegment, canvas, lineTime * index)
			})
		}
	}, [drawSegment, lineSegments, lineTime])
	return { lineDone, canvasRef }
}

export default useLineDraw
