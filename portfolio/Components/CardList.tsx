import { CardData } from '../types'
import ProjectCard from './ProjectCard'
import { Center, Heading } from '@chakra-ui/react'
interface Props {
	projects: CardData[]
}

const CardList: React.FC<Props> = ({ projects }) => {
	return (
		<>
			<Heading id={'projects'}> Projects </Heading>
			<Center gap={'50px'} flexDir={'column'}>
				{projects.map((project) => (
					<ProjectCard key={project.title} CardData={project} />
				))}
			</Center>
		</>
	)
}

export default CardList
