import type { NextPage } from 'next'
import Image from 'next/image'
import { projectCards } from '../Data/projects'
import CardList from '../Components/CardList'
import BorderLine from '../Components/OpeningAnimation'
import { useEffect, useState } from 'react'
import { Box, Center, Container, Heading } from '@chakra-ui/react'
import MainPageHero from '../Components/MainPageHero'
import resume from '../public/Kylesresume.png'
import Link from 'next/link'
import Contact from '../Components/Contact'

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
					<Contact />
					<Heading id={'resume'}> Resume </Heading>

					<Link href={'/kyleresume.pdf'}>
						<Box m={4}>
							<Image alt={'Kyle Christensen Resume'} src={resume} />
						</Box>
					</Link>
				</Center>
			</>
		)
	}
	return <></>
}

export default Home
