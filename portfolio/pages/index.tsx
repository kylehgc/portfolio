import type { NextPage } from 'next'
import { projectCards } from '../Data/content'
import CardList from '../Components/CardList'
import BorderLine from '../Components/OpeningAnimation'
import { useEffect, useState } from 'react'
import { Center } from '@chakra-ui/react'
import MainPageHero from '../Components/MainPageHero'
import Head from 'next/head'
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
				<Head>
					<link rel="shortcut icon" href="/logofav.svg" />
					<title>Kyle Christensen&apos;s Portfolio</title>

					<meta
						name="description"
						content={'Front page of the portfolio of Kyle Christensen'}
					/>
				</Head>
				<Center id={'top'} overflow="hidden" gap={10} flexDir={'column'}>
					<BorderLine innerHeight={innerHeight} innerWidth={innerWidth} />
					<MainPageHero />
					<CardList projects={projectCards} />
					<Contact />
					<AboutMe />
				</Center>
			</>
		)
	}
	return (
		<>
			<Center h={'100vh'} />
		</>
	)
}

export default Home
