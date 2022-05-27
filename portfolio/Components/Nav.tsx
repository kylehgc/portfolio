import { HStack, useDisclosure, Slide, Flex } from '@chakra-ui/react'
import Logo from '/public/logo.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useCallback } from 'react'
import { Transition } from 'framer-motion'
import Link from 'next/link'

const springAnimation: Transition = {
	type: 'spring',
	damping: 35,
	stiffness: 135,
}

const Nav: React.FC = () => {
	const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true })
	const [oldYPosition, setOldYposition] = useState<number>(0)
	const onScroll = useCallback(() => {
		if (scrollY > oldYPosition) {
			if (isOpen) {
				onToggle()
			}
		} else {
			if (!isOpen) {
				onToggle()
			}
		}
		setOldYposition(scrollY)
	}, [isOpen, oldYPosition, onToggle])

	useEffect(() => {
		window.addEventListener('scroll', () => onScroll())
		return window.removeEventListener('scroll', () => onScroll())
	}, [onScroll])

	console.log(isOpen)
	return (
		<>
			<Slide
				direction="top"
				style={{ zIndex: 20, backdropFilter: 'blur(8px)' }}
				in={isOpen}
				transition={{ enter: springAnimation, exit: springAnimation }}
			>
				<Flex opacity={0.85} h={'100px'} w={'full'} bg={'gray.800'}>
					<HStack p={{ base: 6, md: 10 }} height="100px" w={'100vw'}>
						<Link href={'/'}>
							<Image height={'45'} width={'45'} src={Logo.src} alt="logo" />
						</Link>
					</HStack>
				</Flex>
			</Slide>
		</>
	)
}

export default Nav
