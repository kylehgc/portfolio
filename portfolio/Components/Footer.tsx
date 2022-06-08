import { Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import useThemeColors from '../Hooks/useThemeColors'
import Logo from '../public/logo.svg'
const Footer: React.FC = () => {
	const { secondary } = useThemeColors()
	return (
		<Flex
			gap={4}
			align={'center'}
			justify={'center'}
			p={4}
			height={'90px'}
			bg={'gray.800'}
		>
			<Image
				height={'45'}
				objectFit={'contain'}
				width={'45'}
				src={Logo}
				alt="logo"
			/>
			<Text color={secondary}>
				If you have any questions or cool ideas I can be easily reached at
				<Link href={'mailto:kylehgc@gmail.com'}> kylehc@gmail.com</Link>
			</Text>
		</Flex>
	)
}
export default Footer
