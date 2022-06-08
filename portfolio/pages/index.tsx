import type { NextPage } from 'next'
import Image from 'next/image'
import { projectCards } from '../Data/content'
import CardList from '../Components/CardList'
import BorderLine from '../Components/OpeningAnimation'
import { useEffect, useState } from 'react'
import { Box, Center, Container, Heading } from '@chakra-ui/react'
import MainPageHero from '../Components/MainPageHero'

import Contact from '../Components/Contact'
import AboutMe from '../Components/AboutMe'

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
				<Center overflow="hidden" gap={10} flexDir={'column'}>
					<BorderLine innerHeight={innerHeight} innerWidth={innerWidth} />
					<MainPageHero />
					<CardList projects={projectCards} />
					<AboutMe />
					<Contact />
				</Center>
			</>
		)
	}
	return <></>
}

export default Home
