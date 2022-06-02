import { Flex, Heading, Text } from '@chakra-ui/react'
import useThemeColors from '../Hooks/useThemeColors'

interface Props {
	isFront: boolean
}
const MainPageHeroContent: React.FC<Props> = ({ isFront }) => {
	const { primary, secondary } = useThemeColors()
	return (
		<Flex gap={1} flexDir={'column'}>
			<Text textAlign={'left'} color={isFront ? secondary : 'whiteAlpha.900'}>
				Hello, My Name is,
			</Text>
			<Heading fontWeight={'bold'} color={isFront ? 'white' : secondary}>
				Kyle Christensen
			</Heading>
			<Text color={isFront ? secondary : 'whiteAlpha.900'}>
				And I would love to solve your problems
			</Text>
		</Flex>
	)
}

export default MainPageHeroContent
