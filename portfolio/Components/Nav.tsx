import {
	HStack,
	useDisclosure,
	Slide,
	Flex,
	Portal,
	useBreakpointValue,
	Text,
} from '@chakra-ui/react'

import Logo from '/public/logo.svg'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useCallback } from 'react'
import Link from 'next/link'
import useThemeColors from '../Hooks/useThemeColors'
import { Transition } from 'framer-motion'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import MobileNav from './MobileNav'

export interface navLink {
	title: string
	href: string
}
const links: navLink[] = [
	{ title: 'Projects', href: '/#projects' },
	{ title: 'Resume', href: '/#resume' },
	{ title: 'Contact', href: '' },
	{ title: 'About', href: '' },
]
const springAnimation: Transition = {
	type: 'spring',
	damping: 35,
	stiffness: 135,
}

const Nav: React.FC = () => {
	const { isOpen: drawerIsOpen, onToggle: drawerOnToggle } = useDisclosure()
	const overlayRef = useRef<HTMLDivElement>(null)
	const isMobile = useBreakpointValue({ base: true, md: false })
	const { secondary } = useThemeColors()
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
		if (drawerIsOpen && overlayRef.current) {
			disableBodyScroll(overlayRef.current)
		}
		return clearAllBodyScrollLocks
	}, [drawerIsOpen])

	useEffect(() => {
		window.addEventListener('scroll', () => onScroll())
		return window.removeEventListener('scroll', () => onScroll())
	}, [onScroll])

	return (
		<>
			{drawerIsOpen && (
				<Flex
					ref={overlayRef}
					onClick={drawerOnToggle}
					id="backdrop"
					bg="transparent"
					backdropFilter={'auto'}
					backdropInvert="20%"
					backdropBlur="16px"
					position={'absolute'}
					height={'10000vh'}
					top={0}
					right={0}
					width={'100vw'}
					zIndex={10}
				/>
			)}
			<Portal>
				<Slide
					unmountOnExit
					direction="top"
					style={{
						zIndex: 11,
						backdropFilter: 'blur(8px)',
					}}
					in={isOpen}
					transition={{ enter: springAnimation, exit: springAnimation }}
				>
					<Flex opacity={0.85} h={'100px'} w={'full'} bg={'gray.800'}>
						<HStack
							justifyContent={'space-between'}
							p={{ base: 6, md: 10 }}
							height="100px"
							w={'100vw'}
						>
							<Link href={'/'}>
								<Image height={'45'} width={'45'} src={Logo.src} alt="logo" />
							</Link>
							<HStack spacing={12}>
								{isMobile ? (
									<MobileNav
										links={links}
										onToggle={drawerOnToggle}
										isOpen={drawerIsOpen}
									/>
								) : (
									links.map((link, index) => (
										<Link key={link.title} href={link.href}>
											<Text
												fontWeight="semibold"
												cursor="pointer"
												as={'div'}
												color={secondary}
												m={2}
											>
												{index + 1}.
												<Text
													_hover={{ color: secondary, fontWeight: 'bold' }}
													as={'div'}
													mx={2}
													display={'inline'}
													color={'white'}
												>
													{link.title}
												</Text>
											</Text>
										</Link>
									))
								)}
							</HStack>
						</HStack>
					</Flex>
				</Slide>
			</Portal>
		</>
	)
}

export default Nav