import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'

interface Props {
	isOpen: boolean
	onClose: () => void
	modalImage: string
}
const CorouselModal: React.FC<Props> = ({ isOpen, onClose, modalImage }) => {
	return (
		<Modal size={'sm'} isOpen={isOpen} isCentered onClose={onClose}>
			<ModalOverlay
				bg="transparent"
				backdropFilter="auto"
				backdropInvert="20%"
				backdropBlur="8px"
			/>
			<ModalContent
				boxShadow={'none'}
				border="none"
				p={10}
				onClick={() => onClose()}
				bg={'transparent'}
			>
				<Image
					priority
					blurDataURL={modalImage}
					alt={'full page screenshot'}
					height={'436px'}
					width={'200px'}
					layout={'responsive'}
					placeholder={'blur'}
					objectFit={'cover'}
					src={modalImage}
				/>
			</ModalContent>
		</Modal>
	)
}

export default CorouselModal
