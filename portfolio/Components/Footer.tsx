import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import useThemeColors from '../Hooks/useThemeColors'
import Logo from '../public/logo.svg'
const Footer: React.FC = () => {
	const { secondary } = useThemeColors()
	return (
		<Flex
			p={4}
			textAlign={'center'}
			align={'center'}
			justify={'center'}
			minHeight={'90px'}
			bg={'gray.800'}
			direction={{ base: 'column', md: 'row' }}
		>
			<Text p={2} color={secondary}>
				Please reach out if you&apos;d like to discuss a project, job, or just a
				tough problem you&apos;d like help tackling.
			</Text>
			<Link href={'mailto:kylehgc@gmail.com'}>kylehgc@gmail.com</Link>
			<Link href="/#top">
				<Box
					order={{ md: -1 }}
					justifySelf={{ base: 'flex-end', md: 'flex-start' }}
					m={4}
				>
					<Image
						height={'70'}
						objectFit={'contain'}
						width={'70'}
						src={Logo}
						alt="logo"
					/>
				</Box>
			</Link>
		</Flex>
	)
}
export default Footer
