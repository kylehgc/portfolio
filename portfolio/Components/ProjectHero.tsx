import {
	Flex,
	Heading,
	ListItem,
	UnorderedList,
	VStack,
	Container,
	Tag,
	HStack,
} from '@chakra-ui/react'
import { heroContent } from '../Data/content'
import Image from 'next/image'
import ExternalLinks from './ExternalLinks'

interface Props {
	heroContent: heroContent
}

const ProjectHero: React.FC<Props> = ({ heroContent }) => {
	const { cardData, content, heroMedia, tags } = heroContent
	const { title, externalLinkURL, repositoryURL } = cardData
	let heroMediaElement: JSX.Element
	if (typeof heroMedia === 'string') {
		heroMediaElement = (
			<Image
				alt={'Hero Media'}
				height={507}
				objectFit={'contain'}
				width={307}
				src={heroMedia}
			/>
		)
	} else {
		heroMediaElement = heroMedia
	}

	return (
		<>
			<Container maxW={'100vw'} pt={'120px'}>
				<Flex
					sx={{ gap: 10 }}
					direction={{ base: 'column', md: 'row' }}
					mx={{ base: 5, md: '15%' }}
				>
					<VStack my={4} spacing={{ base: 10 }} p={2} w={'auto'}>
						<Heading> {title} </Heading>
						<ExternalLinks
							externalLinkURL={externalLinkURL}
							repositoryURL={repositoryURL}
						/>

						<UnorderedList spacing={4}>
							{content.map((contentItem) => (
								<ListItem key={contentItem}> {contentItem} </ListItem>
							))}
						</UnorderedList>
						<Flex wrap={'wrap'} w={'112%'}>
							{tags.map((tag) => (
								<Tag
									color={'white'}
									mx={3}
									my={2}
									key={tag.title}
									size={'lg'}
									variant={'solid'}
									colorScheme={tag.colorScheme}
								>
									{tag.title}
								</Tag>
							))}
						</Flex>
					</VStack>
					<Flex
						my={4}
						justifyContent={{ base: 'center', mid: 'normal' }}
						alignItems={'center'}
						flexDir={{ base: 'inherit', md: 'row-reverse' }}
						w={{ base: '100%', md: '50vw' }}
					>
						{heroMediaElement}
					</Flex>
				</Flex>
			</Container>
		</>
	)
}

export default ProjectHero
