import type { NextPage } from 'next'
import { projectCards } from '../Data/content'
import OpeningAnimation from '../Components/OpeningAnimation'
import { useEffect, useState } from 'react'
import { Center } from '@chakra-ui/react'
import MainPageHero from '../Components/MainPageHero'

import CardList from '../Components/CardList'
import Contact from '../Components/Contact'
import AboutMe from '../Components/AboutMe'
import { NextSeo } from 'next-seo'

const Home: NextPage = () => {
	return (
		<>
			<NextSeo
				additionalLinkTags={[
					{
						rel: 'shortcut icon',
						href: '/logofav.svg',
					},
				]}
				title="Kyle Christensen's Portfolio"
				description="Front page of the portfolio of Kyle Christensen"
				openGraph={{
					url: 'https://www.kylehgc.com',
					title: "Kyle Christensen's Portfolio",
					description: 'Front page of the portfolio of Kyle Christensen',
					images: [
						{
							url: 'https://www.kylehgc.com/KyleAvatarBack.jpg',
							width: 2048,
							height: 1365,
							alt: 'Picture of Kyle Christensen',
							type: 'image/jpg',
						},
					],
				}}
			/>
			<Center id={'top'} overflow="hidden" gap={10} flexDir={'column'}>
				<OpeningAnimation />
				<MainPageHero />
				<CardList projects={projectCards} />
				<Contact />
				<AboutMe />
			</Center>
		</>
	)
}

export default Home
