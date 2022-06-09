import { Heading, Text, Flex, Button, SlideFade } from '@chakra-ui/react'
import Link from 'next/link'
import { aboutMe } from '../Data/content'
import useThemeColors from '../Hooks/useThemeColors'
import InViewTransition from './InViewTransition'
const AboutMe: React.FC = () => {
	const { primary, secondary } = useThemeColors()
	return (
		<>
			<InViewTransition delay={0.1}>
				<Flex
					my={4}
					id="aboutme"
					gap={'50px'}
					align={'center'}
					w={'full'}
					flexDirection={'column'}
				>
					<Heading> About Me </Heading>
					<Text p={4} w={{ base: '90%', md: '70%' }}>
						{aboutMe[0]}
					</Text>
					<Link href={'/aboutme'}>
						<Button
							w={{ base: '70%', md: '30%' }}
							mt={6}
							mb={8}
							size={'lg'}
							bg={secondary}
							color={'gray.700'}
							rounded={'2xl'}
							_hover={{
								transform: 'translateY(-2px)',
								boxShadow: 'lg',
							}}
						>
							Read more
						</Button>
					</Link>
				</Flex>
			</InViewTransition>
		</>
	)
}

export default AboutMe
