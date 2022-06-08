import { Heading, Text, Flex, Button, SlideFade } from '@chakra-ui/react'
import Link from 'next/link'
import { aboutMe } from '../Data/content'
import useThemeColors from '../Hooks/useThemeColors'
import { useInView } from 'react-intersection-observer'
const AboutMe: React.FC = () => {
	const { primary, secondary } = useThemeColors()
	const { inView, ref } = useInView()
	return (
		<>
			<SlideFade
				offsetY={'30px'}
				id={'contact'}
				transition={{ enter: { delay: 0.1, duration: 0.3 } }}
				in={inView}
				ref={ref}
			>
				<Flex
					my={4}
					gap={'50px'}
					align={'center'}
					w={'full'}
					flexDirection={'column'}
				>
					<Heading id="aboutme"> About Me </Heading>
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
			</SlideFade>
		</>
	)
}

export default AboutMe
