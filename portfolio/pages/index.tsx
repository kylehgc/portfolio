import type { NextPage } from 'next'
import { projects } from '../Data/ projects'
import CardList from '../Components/CardList'
import BorderLine from '../Components/OpeningAnimation'
import { useEffect, useState } from 'react'
const Home: NextPage = () => {
	const [innerHeight, setInnerHeight] = useState<number>()
	const [innerWidth, setInnerWidth] = useState<number>()
	useEffect(() => {
		if (typeof window !== undefined) {
			setInnerHeight(window.innerHeight)
			setInnerWidth(window.innerWidth)
		}
	}, [])
	if (innerHeight && innerWidth) {
		return (
			<>
				<BorderLine innerHeight={innerHeight} innerWidth={innerWidth} />
				<CardList projects={projects} />
			</>
		)
	}
	return <></>
}

export default Home
