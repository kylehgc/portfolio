import { Flex } from '@chakra-ui/react'
import BackAvatar from '../public/KyleAvatarBack.jpg'
import AvatarCard from './AvatarCard'
import MainPageHeroContent from './MainPageHeroContent'
interface Props {
	onClick: () => void
}
const CardBack: React.FC<Props> = ({ onClick }) => (
	<AvatarCard
		onClick={onClick}
		name="Kyle Christensen"
		title={'Backend Developer'}
		imageSRC={''}
	/>
)

export default CardBack
