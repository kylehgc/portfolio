import { AspectRatio, Box, Flex, Center, Container } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import emotionPic from '../public/emotionScreen.png'
const Home: NextPage = () => {
	return (
		<>
			<Center
				justifySelf={'center'}
				w={'100%'}
				p={6}
				bgGradient={'linear(to-tr, #011627, gray.400)'}
			>
				<Box rounded={'2xl'}>
					<Image alt="CBTree screenshot" src={emotionPic} />
				</Box>
			</Center>
		</>
	)
}

export default Home
