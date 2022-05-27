import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import {
	useBreakpointValue,
	IconButton,
	useDisclosure,
	Box,
	DarkMode,
} from '@chakra-ui/react'
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi'
import { useState } from 'react'
import { Suspense } from 'react'

interface Props {
	images: string[]
}

const Corousel: React.FC<Props> = ({ images }) => {
	const DynamicModal = dynamic(() => import('./CorouselModal'))
	const [slider, setSlider] = useState<Slider | null>(null)
	const [modalImage, setModalImage] = useState('')
	const top = useBreakpointValue({ base: '50%', md: '50%' })
	const side = useBreakpointValue({ base: '5%', md: '20%' })
	const slidesToShow = useBreakpointValue({ base: 1, md: 3, lg: 4 })
	const iconSize = useBreakpointValue({ base: 'sm', md: 'xl' })
	const centerPadding = useBreakpointValue({ base: '90px', md: '150px' })
	const boxSize = useBreakpointValue({ base: '10', md: '100' })
	const { isOpen, onClose, onOpen } = useDisclosure()
	const onClickHandler = (image: string) => {
		setModalImage(image)
		onOpen()
	}
	const options: Settings = {
		draggable: true,
		speed: 100,
		adaptiveHeight: true,
		infinite: true,
		slidesToShow: slidesToShow,
		arrows: false,
		centerMode: true,
		variableWidth: true,
		centerPadding: centerPadding,
	}

	return (
		<>
			<Suspense fallback={'loading'}>
				<DynamicModal
					isOpen={isOpen}
					onClose={onClose}
					modalImage={modalImage}
				/>
			</Suspense>
			<Box my={4} position={'relative'}>
				<DarkMode>
					<IconButton
						boxSize={boxSize}
						aria-label="left-arrow"
						colorScheme="messenger"
						borderRadius="full"
						position="absolute"
						left={side}
						top={top}
						transform={'translate(0%, -50%)'}
						zIndex={10}
						onClick={() => slider?.slickPrev()}
					>
						<BiLeftArrowAlt size={iconSize} />
					</IconButton>
					<IconButton
						aria-label="right-arrow"
						boxSize={boxSize}
						colorScheme="messenger"
						borderRadius="full"
						position="absolute"
						right={side}
						top={top}
						transform={'translate(0%, -50%)'}
						zIndex={10}
						onClick={() => slider?.slickNext()}
					>
						<BiRightArrowAlt size={iconSize} />
					</IconButton>
				</DarkMode>
				<Slider {...options} ref={(slider) => setSlider(slider)}>
					{images.map((image) => (
						<Image
							onClick={() => onClickHandler(image)}
							key={image}
							alt={'project image'}
							objectFit="cover"
							height={'482'}
							width={'250'}
							src={image}
						/>
					))}
				</Slider>
			</Box>
		</>
	)
}

export default Corousel
