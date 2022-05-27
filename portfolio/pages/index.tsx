import type { NextPage } from 'next'
import { projectCards } from '../Data/projects'
import CardList from '../Components/CardList'
import BorderLine from '../Components/OpeningAnimation'
import { useEffect, useState } from 'react'
import { quoteBattlerProject, cbtreeProject } from '../Data/projects'
import Project from '../Components/Project'
import { Center } from '@chakra-ui/react'

const Home: NextPage = () => {
	const [innerHeight, setInnerHeight] = useState<number>()
	const [innerWidth, setInnerWidth] = useState<number>()
	useEffect(() => {
		setInnerHeight(window.innerHeight)
		setInnerWidth(window.innerWidth)
	}, [])
	if (innerHeight && innerWidth) {
		return (
			<>
				<BorderLine innerHeight={innerHeight} innerWidth={innerWidth} />
				<Center flexDir={'column'}>
					<CardList projects={projectCards} />
				</Center>
			</>
		)
	}
	return <></>
}

export default Home
