import { Box, Flex, Center } from '@chakra-ui/react'
import FlipCard from 'react-card-flip'
import { useState } from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'
import MainPageHeroContent from './MainPageHeroContent'
import AvatarCard from './AvatarCard'
import frontAvatar from '../public/KyleAvatar.png'
import backAvatar from '../public/KyleAvatarBack.jpg'

const MainPageHero: React.FC = () => {
	const [isFlipped, setIsFlipped] = useState(false)
	const handleOnClick = () => {
		setIsFlipped((isFlipped) => !isFlipped)
	}
	return (
		<>
			<Flex
				mt="120px"
				w={'100vw'}
				p={2}
				gap={'50px'}
				alignSelf={'center'}
				alignItems={{ base: 'center', md: 'normal' }}
				justifyContent={{ base: 'normal', md: 'space-evenly' }}
				flexDir={{ base: 'column', md: 'row' }}
			>
				<MainPageHeroContent isFront={isFlipped} />
				<Center w={'30%'}>
					<FlipCard isFlipped={isFlipped}>
						<AvatarCard
							key={'front'}
							onClick={handleOnClick}
							name="Kyle Christensen"
							title={'Frontend Developer'}
							imageSRC={frontAvatar.src}
						/>
						<AvatarCard
							key={'back'}
							onClick={handleOnClick}
							name="Kyle Christensen"
							title={'Backend Developer'}
							imageSRC={backAvatar.src}
						/>
					</FlipCard>
				</Center>
			</Flex>
		</>
	)
}

export default MainPageHero
