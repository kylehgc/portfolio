import type { NextPage } from 'next'
import { projects } from '../Data/ projects'
import CardList from '../Components/CardList'
import BorderLine from '../Components/OpeningAnimation'
import { Suspense } from 'react'
const Home: NextPage = () => {
	return (
		<>
			<Suspense fallback={<></>}>
				<BorderLine />
				<CardList projects={projects} />
			</Suspense>
		</>
	)
}

export default Home
