import { Center, Flex, Heading, Text, Box } from '@chakra-ui/react'
import FrontAvatar from '../public/KyleAvatar.png'
import AvatarCard from './AvatarCard'
import MainPageHeroContent from './MainPageHeroContent'
interface Props {
	onClick: () => void
}
const FrontCard: React.FC<Props> = ({ onClick }) => {
	return (
		<AvatarCard
			onClick={onClick}
			name="Kyle Christensen"
			title={'Frontend Developer'}
			imageSRC={''}
		/>
	)
}

export default FrontCard
