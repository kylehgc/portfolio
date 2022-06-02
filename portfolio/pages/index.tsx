import type { NextPage } from 'next'
import Image from 'next/image'
import { projectCards } from '../Data/projects'
import CardList from '../Components/CardList'
import BorderLine from '../Components/OpeningAnimation'
import { useEffect, useState } from 'react'
import { Center, Heading } from '@chakra-ui/react'
import MainPageHero from '../Components/MainPageHero'
import resume from '../public/Kylesresume.png'

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
				<Center gap={10} flexDir={'column'}>
					<BorderLine innerHeight={innerHeight} innerWidth={innerWidth} />
					<MainPageHero />
					<CardList projects={projectCards} />
					<Heading id={'resume'}> Resume </Heading>
					<Image alt={'Kyle Christensen Resume'} src={resume} />
				</Center>
			</>
		)
	}
	return <></>
}

export default Home
