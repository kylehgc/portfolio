import {
	Text,
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
import { RefObject, useEffect, useRef, useState } from 'react'
import { useElementScroll, useViewportScroll } from 'framer-motion'
import { useCallback } from 'react'
import Link from 'next/link'
import SpringAnimation from './SpringAnimation'
import ExternalLinks from './ExternalLinks'
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
	const cardRef: RefObject<HTMLDivElement> = useRef(null)
	const { scrollYProgress } = useViewportScroll()
	const descriptionLength = description.length
	const pointsToShow = useBreakpointValue({ base: 2, md: descriptionLength })
	const [inView, setInView] = useState(false)
	const makeViewable = useCallback(() => {
		if (cardRef.current) {
			const bottomViewLine = window.innerHeight * 0.7
			const topViewLine = window.innerHeight * 0.3
			const topPosition = cardRef.current.getBoundingClientRect().top
			const bottomPosition = cardRef.current.getBoundingClientRect().bottom
			if (bottomPosition < topViewLine || topPosition > bottomViewLine) {
				if (inView) {
					setInView(false)
				}
			} else {
				if (topPosition < bottomViewLine || bottomPosition > topViewLine) {
					if (!inView) {
						setInView(true)
					}
				}
			}
		}
	}, [inView])

	useEffect(() => {
		const unsubFunction = scrollYProgress.onChange(makeViewable)
		return unsubFunction
	}, [makeViewable, scrollYProgress])
	const scroll = useElementScroll(cardRef)

	return (
		<>
			<Center cursor="pointer" w={{ base: '100%', md: '70%' }}>
				<SpringAnimation inView={inView}>
					<Link href={projectLink}>
						<Container
							minHeight={'500px'}
							bgGradient={gradiant}
							minW={{ base: '100%', md: '400px', lg: '1150px' }}
						>
							<HStack ref={cardRef} justify={'space-around'} px={4}>
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
				</SpringAnimation>
			</Center>
		</>
	)
}

export default Card
