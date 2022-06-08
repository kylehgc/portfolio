import { Flex, Box, VStack, Container } from '@chakra-ui/react'
import { Project } from '../Data/content'
import ProjectHero from './ProjectHero'
import Carousel from './Corousel'

interface props {
	project: Project
}
const Project: React.FC<props> = ({ project }) => {
	const { heroContent, carouselImages } = project
	return (
		<>
			<ProjectHero heroContent={heroContent} />
			<Carousel images={carouselImages} />
		</>
	)
}

export default Project
