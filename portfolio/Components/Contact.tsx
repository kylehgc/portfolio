import {
	Box,
	Text,
	Flex,
	Heading,
	HStack,
	Image,
	Circle,
	VStack,
} from '@chakra-ui/react'
import Link from 'next/link'
import useThemeColors from '../Hooks/useThemeColors'
import cellphone from '../public/cellphone.svg'
import envelope from '../public/envelope.svg'
import github from '../public/githubdark.png'
import linkedin from '../public/linkedin.svg'
import { useInView } from 'react-intersection-observer'
import InViewTransition from './InViewTransition'

const icons = [
	{ image: cellphone, link: 'tel:4166551204' },
	{ image: envelope, link: 'mailto:kylehgc@gmail.com' },
	{ image: github, link: 'https://github.com/kylehgc/' },
	{ image: linkedin, link: 'https://www.linkedin.com/in/kylehgc/' },
]
const Contact: React.FC = () => {
	const { secondary } = useThemeColors()

	return (
		<>
			<InViewTransition>
				<VStack id={'contact'} spacing={'50px'} w={'100vw'}>
					<Heading size={'xl'}>Contact</Heading>
					<Flex
						my={'2'}
						gap={20}
						align={'center'}
						flexDirection={'column'}
						justify={'center'}
						w={'full'}
					>
						<Text
							color={'whiteAlpha.900'}
							w={'80%'}
							textAlign={'center'}
							fontSize={'xl'}
						>
							Get in touch with me if you think I could help
						</Text>
						<HStack
							mb={10}
							w={{ base: 'full', md: '50%' }}
							justify={'space-evenly'}
						>
							{icons.map(({ image, link }, index) => (
								<Link key={index} href={link}>
									<a>
										<Circle
											bg={secondary}
											size={{ base: '50px', md: '70px' }}
											p={2}
										>
											<Image
												m={1}
												color={'black'}
												src={image.src}
												alt={image.src}
											/>
										</Circle>
									</a>
								</Link>
							))}
						</HStack>
					</Flex>
				</VStack>
			</InViewTransition>
		</>
	)
}

export default Contact
