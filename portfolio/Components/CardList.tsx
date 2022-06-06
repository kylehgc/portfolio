import { CardData } from '../types'
import Card from './ProjectCard'
import { Center, Heading } from '@chakra-ui/react'
interface Props {
	projects: CardData[]
}

const CardList: React.FC<Props> = ({ projects }) => {
	return (
		<Center id={'projects'} gap={10} flexDir={'column'}>
			<Heading my={2}> Projects </Heading>
			{projects.map((project) => (
				<Card key={project.title} CardData={project} />
			))}
		</Center>
	)
}

export default CardList