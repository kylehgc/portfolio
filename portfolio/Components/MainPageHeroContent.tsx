import { Flex, Heading, Text, Container } from '@chakra-ui/react'
import useThemeColors from '../Hooks/useThemeColors'

const MainPageHeroContent: React.FC = () => {
	const { secondary } = useThemeColors()
	return (
		<Flex
			w={{ base: 'full', md: '40%' }}
			gap={6}
			p={2}
			flexDir={'column'}
			align={'flex-start'}
		>
			<Flex gap={2} flexDir={'column'}>
				<Text
					fontWeight={'semibold'}
					color={'white'}
					mb={-2}
					textAlign={'left'}
				>
					Hello, I&apos;m
				</Text>
				<Heading size={'2xl'} fontWeight={'bold'} color={secondary}>
					Kyle Christensen
				</Heading>
				<Text m={0.5} color={'whiteAlpha.800'}>
					And I would love to help solve your problems
				</Text>
			</Flex>
			<Flex gap={8} w={{ base: 'full', md: '70%' }} flexDir={'column'}>
				<Text color={'whiteAlpha.900'}>
					I&apos;m a full stack software developer with an emphasis on modern
					React and Typescript. I thrive on the challenge of taking a project
					from requirements through technical design and implementation.
				</Text>
				<Text color={'whiteAlpha.900'}>
					I&apos;m looking to join a software team where I can find mentorship
					and feedback on what I know and what I don&apos;t know. I&apos;m
					excited to solve novel problems and gain the insight that one can only
					get from working day to day on projects with people who are as deeply
					committed to their work as I am.
				</Text>
			</Flex>
		</Flex>
	)
}

export default MainPageHeroContent
