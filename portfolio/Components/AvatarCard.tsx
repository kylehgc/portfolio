import {
	Box,
	Flex,
	Avatar,
	Stack,
	Heading,
	Button,
	Text,
} from '@chakra-ui/react'

interface Props {
	onClick: () => void
	name: string
	title: string
	imageSRC: string
}
const AvatarCard: React.FC<Props> = ({ onClick, name, title, imageSRC }) => {
	return (
		<Box
			mb={10}
			onClick={onClick}
			maxW={{ base: '270px', md: '350px' }}
			w={'100%'}
			minW={{ base: '250px', md: '350px' }}
			boxShadow={'2xl'}
			rounded={'2xl'}
			overflow={'hidden'}
		>
			<Box
				bgGradient={'linear(to-tr, #BEE3F8, gray.500)'}
				h={{ base: '120px', md: '130px' }}
				w={'full'}
				objectFit={'cover'}
			/>
			<Flex justify={'center'} mt={-12}>
				<Avatar
					size={'2xl'}
					src={imageSRC}
					css={{
						border: '2px solid white',
					}}
				/>
			</Flex>

			<Box p={6}>
				<Stack spacing={0} align={'center'} mb={5}>
					<Heading fontSize={'2xl'}>{name}</Heading>
					<Text color={'#BEE3F8'}>{title}</Text>
				</Stack>

				<Stack direction={'row'} justify={'center'} spacing={6}>
					<Stack spacing={0} align={'center'}>
						<Text fontWeight={600}>23k</Text>
						<Text fontSize={'sm'} color={'#BEE3F8'}>
							Followers
						</Text>
					</Stack>
					<Stack spacing={0} align={'center'}>
						<Text fontWeight={600}>23k</Text>
						<Text fontSize={'sm'} color={'#BEE3F8'}>
							Followers
						</Text>
					</Stack>
				</Stack>

				<Button
					w={'full'}
					mt={8}
					bg={'#BEE3F8'}
					color={'gray.700'}
					rounded={'md'}
					_hover={{
						transform: 'translateY(-2px)',
						boxShadow: 'lg',
					}}
				>
					Follow
				</Button>
			</Box>
		</Box>
	)
}

export default AvatarCard
