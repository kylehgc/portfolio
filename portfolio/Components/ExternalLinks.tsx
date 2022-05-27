import { LinkIcon } from '@chakra-ui/icons'
import { Box, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import GitHubIcon from '/public/GitHubIcon.png'

interface Props {
	repositoryURL: string
	externalLinkURL: string
}

const ExternalLinks: React.FC<Props> = ({ repositoryURL, externalLinkURL }) => {
	return (
		<HStack h={'10%'} p={2} mt={2} spacing={6}>
			<Link href={repositoryURL}>
				<Box h={'24px'} w={'24px'}>
					<Image objectFit="cover" alt="gitHub button" src={GitHubIcon} />
				</Box>
			</Link>
			<Link href={externalLinkURL}>
				<LinkIcon color={'white'} boxSize={6} />
			</Link>
		</HStack>
	)
}

export default ExternalLinks
