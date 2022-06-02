import { Box, Text, Slide, Flex, VStack } from '@chakra-ui/react'
import Hamburger from 'hamburger-react'
import Link from 'next/link'
import useThemeColors from '../Hooks/useThemeColors'
import { navLink } from './Nav'
import springAnimation from './SpringAnimation'

interface MobileNavProps {
	isOpen: boolean
	onToggle: () => void
	links: navLink[]
}
const MobileNav: React.FC<MobileNavProps> = ({ links, onToggle, isOpen }) => {
	const { secondary } = useThemeColors()
	return (
		<>
			<Box onClick={onToggle} zIndex={99}>
				<Hamburger rounded toggled={isOpen} />
			</Box>

			<Slide
				unmountOnExit
				style={{ width: '40vw', height: '100vh' }}
				direction="right"
				in={isOpen}
				transition={{
					enter: springAnimation,
					exit: springAnimation,
				}}
			>
				<Flex zIndex={6} opacity={1} height={'100vh'} w={'40vw'} bg={'black'}>
					<VStack>
						{links.map((link, index) => (
							<Link key={link.title} href={link.href}>
								<Text onClick={onToggle} as={'div'} color={secondary} m={2}>
									{index + 1}.
									<Text
										display={'inline'}
										as={'div'}
										mx={2}
										color={'whiteAlpha.800'}
									>
										{link.title}{' '}
									</Text>
								</Text>
							</Link>
						))}
					</VStack>
				</Flex>
			</Slide>
		</>
	)
}

export default MobileNav
