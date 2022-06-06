import { Box, Container, Flex, Heading } from '@chakra-ui/react'
import paperBackground from '../public/paperbackground.jpg'
const Contact: React.FC = () => {
	return (
		<>
			<Heading id="contact"> Contact </Heading>
			<Flex w={'full'}>
				<Flex
					h={'400px'}
					w={'full'}
					mx={6}
					bgImage={paperBackground.src}
				></Flex>
			</Flex>
		</>
	)
}

export default Contact
