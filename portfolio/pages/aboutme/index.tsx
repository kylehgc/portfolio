import { Text, Heading, Flex, SlideFade, Box } from '@chakra-ui/react'
import { aboutMe } from '../../Data/content'
import Image from 'next/image'
import heroimage from '../../public/aboutmehero.jpg'
const AboutMe: React.FC = () => {
	return (
		<>
			<SlideFade
				in
				offsetY={'10%'}
				transition={{
					enter: { duration: 0.4 },
				}}
			>
				<Flex
					align={'flex-start'}
					mt={'120'}
					flexDir={{ base: 'column', md: 'row' }}
				>
					<Box mt={{ base: 0, md: '70px' }} mb={'60px'}>
						<Image
							placeholder="blur"
							src={heroimage}
							objectFit={'contain'}
							height={800}
							width={800}
							alt="kyle with dog"
						/>
					</Box>
					<Flex gap={5} align={'center'} w={'full'} flexDirection={'column'}>
						<Heading> About Me</Heading>
						{aboutMe.map((item, index) => (
							<Text p={4} w={{ base: '90%', md: '70%' }} key={index}>
								{item}
							</Text>
						))}
					</Flex>
				</Flex>
			</SlideFade>
		</>
	)
}

export default AboutMe
