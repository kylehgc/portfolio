import {
	Text,
	Center,
	Heading,
	Flex,
	HStack,
	VStack,
	Link,
} from '@chakra-ui/react'
import Image from 'next/image'
import { LinkIcon } from '@chakra-ui/icons'
import GitHubIcon from '/public/GitHubIcon.png'
import { CardData } from './../types'
import { RefObject, useEffect, useRef, useState } from 'react'
import { useElementScroll, useViewportScroll } from 'framer-motion'
import { useCallback } from 'react'
import SpringAnimation from './SpringAnimation'
interface Props {
	CardData: CardData
}

const Card: React.FC<Props> = ({
	CardData: {
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
	const [inView, setInView] = useState(false)
	const makeViewable = useCallback(() => {
		if (cardRef.current) {
			const topPosition = cardRef.current.getBoundingClientRect().top
			const bottomPosition = cardRef.current.getBoundingClientRect().bottom
			const topViewLine = window.innerHeight * 0.2
			const bottomViewLine = window.innerHeight * 0.8
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
			<Center>
				<SpringAnimation inView={inView}>
					<HStack
						ref={cardRef}
						bgGradient={gradiant}
						justify={'center'}
						minH={'380'}
						width="100%"
						px={4}
						spacing={3}
					>
						<Flex
							pb={3}
							pt={6}
							flexDir={'column'}
							justify={'space-between'}
							align={'flex-start'}
							minH={'380'}
							w={'50%'}
						>
							<VStack>
								<Heading size={'lg'} w={'full'} color={'whiteAlpha.900'}>
									{title}
								</Heading>
								<Text fontSize={14} color="whiteAlpha.900">
									{description}
								</Text>
							</VStack>
							<HStack h={'10%'} p={2} mt={2} spacing={6}>
								<Link href={repositoryURL} h={'24px'} w={'24px'}>
									<Image
										objectFit="cover"
										alt="gitHub button"
										src={GitHubIcon}
									/>
								</Link>
								<Link href={externalLinkURL}>
									<LinkIcon color={'white'} boxSize={6} />
								</Link>
							</HStack>
						</Flex>
						<Center>
							<Image
								objectFit="cover"
								height={'347'}
								width={'160'}
								alt="Project Screenshot"
								src={screenshotSrc}
							/>
						</Center>
					</HStack>
				</SpringAnimation>
			</Center>
		</>
	)
}

export default Card
