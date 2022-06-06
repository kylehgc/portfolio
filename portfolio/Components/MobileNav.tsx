import { Box, Text, Slide, Flex, Container } from '@chakra-ui/react'
import { Transition } from 'framer-motion'
import { Spin as Hamburger } from 'hamburger-react'
import Link from 'next/link'
import useThemeColors from '../Hooks/useThemeColors'
import { navLink } from './Nav'

interface MobileNavProps {
	isOpen: boolean
	onToggle: () => void
	links: navLink[]
}

const drawerAnimation: Transition = {
	type: 'tween',
	duration: 0.25,
}

const MobileNav: React.FC<MobileNavProps> = ({ links, onToggle, isOpen }) => {
	const { secondary } = useThemeColors()
	return (
		<>
			<Box onClick={onToggle} zIndex={99}>
				<Hamburger direction={'left'} rounded toggled={isOpen} />
			</Box>

			<Slide
				unmountOnExit
				style={{
					display: 'flex',
					width: '100vw',
					height: '100vh',
					flexDirection: 'row',
					justifyContent: 'flex-end',
				}}
				direction="right"
				in={isOpen}
				transition={{
					enter: drawerAnimation,
					exit: drawerAnimation,
				}}
			>
				<Flex
					alignItems={'center'}
					opacity={1}
					height={'100vh'}
					w={'60vw'}
					bg={'black'}
				>
					<Container>
						<Flex
							flexDir={'column'}
							gap={10}
							textAlign={'center'}
							mr={'10vw'}
							w={'100%'}
						>
							{links.map((link, index) => (
								<Link key={link.title} href={link.href}>
									<Text
										pl={5}
										fontWeight={'bold'}
										fontSize={'2xl'}
										onClick={onToggle}
										as={'div'}
										color={secondary}
										m={2}
									>
										{index + 1}.
										<Text
											textAlign={'center'}
											as={'div'}
											mx={2}
											color={'white'}
										>
											{link.title}
										</Text>
									</Text>
								</Link>
							))}
						</Flex>
					</Container>
				</Flex>
			</Slide>
		</>
	)
}

export default MobileNav
