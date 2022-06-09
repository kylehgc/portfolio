import {
	Center,
	Heading,
	Flex,
	HStack,
	VStack,
	UnorderedList,
	ListItem,
	useBreakpointValue,
	Container,
} from '@chakra-ui/react'
import Image from 'next/image'
import { CardData } from '../types'
import Link from 'next/link'
import ExternalLinks from './ExternalLinks'
import InViewTransition from './InViewTransition'
interface Props {
	CardData: CardData
}

const Card: React.FC<Props> = ({
	CardData: {
		projectLink,
		title,
		description,
		repositoryURL,
		externalLinkURL,
		screenshotSrc,
		gradiant,
	},
}) => {
	const descriptionLength = description.length
	const pointsToShow = useBreakpointValue({ base: 2, md: descriptionLength })

	return (
		<>
			<Center cursor="pointer" w={{ base: '100%', md: '70%' }}>
				<InViewTransition>
					<Link href={projectLink}>
						<Container
							rounded={'2xl'}
							minHeight={'500px'}
							bgGradient={gradiant}
							minW={{ base: '100%', md: '400px', lg: '1150px' }}
						>
							<HStack justify={'space-around'} px={4}>
								<Flex
									pb={3}
									pt={6}
									flexDir={'column'}
									justify={'space-between'}
									align={'flex-start'}
									minH={'500px'}
									w={'50%'}
								>
									<VStack spacing={6} minHeight={{ base: 350, md: 500 }} p={2}>
										<Heading size={'lg'} w={'full'} color={'whiteAlpha.900'}>
											{title}
										</Heading>
										<UnorderedList
											fontSize={{ base: '16px', md: '18px' }}
											spacing={8}
										>
											{description
												.slice(0, pointsToShow)
												.map((descriptionItem, index) => (
													<ListItem key={index}> {descriptionItem} </ListItem>
												))}
										</UnorderedList>
									</VStack>

									<ExternalLinks
										externalLinkURL={externalLinkURL}
										repositoryURL={repositoryURL}
									/>
								</Flex>
								<Center maxWidth={{ base: 190, md: 300 }}>
									<Image
										objectFit="contain"
										height={'896'}
										width={'414'}
										alt="Project Screenshot"
										src={screenshotSrc}
									/>
								</Center>
							</HStack>
						</Container>
					</Link>
				</InViewTransition>
			</Center>
		</>
	)
}

export default Card
