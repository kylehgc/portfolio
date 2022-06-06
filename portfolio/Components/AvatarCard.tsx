import {
	Box,
	Flex,
	Avatar,
	Stack,
	Heading,
	Button,
	Text,
	Tag as ChakraTag,
} from '@chakra-ui/react'

import Link from 'next/link'
import useThemeColors from '../Hooks/useThemeColors'
import { Tag } from '../Data/projects'

interface Props {
	onClick: (event: React.MouseEvent<HTMLElement>) => void
	name: string
	title: string
	imageSRC: string
	tags: Tag[]
}
const AvatarCard: React.FC<Props> = ({
	tags,
	onClick,
	name,
	title,
	imageSRC,
}) => {
	const { secondary } = useThemeColors()
	return (
		<Box
			mb={10}
			onClick={onClick}
			maxW={{ base: '320px', md: '350px' }}
			w={'100%'}
			minW={{ base: '300px', md: '300px' }}
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

			<Flex w={'full'} flexDir={'column'} p={4}>
				<Stack spacing={0} align={'center'} mb={5}>
					<Heading fontSize={'2xl'}>{name}</Heading>
					<Text color={secondary}>{title}</Text>
				</Stack>

				<Flex direction={'row'} justify={'center'} flexWrap={'wrap'} gap={3}>
					{tags.map((tag) => (
						<ChakraTag
							m={0.5}
							variant={'solid'}
							color={'white'}
							size={'lg'}
							colorScheme={tag.colorScheme}
							key={tag.title}
						>
							{tag.title}
						</ChakraTag>
					))}
				</Flex>
				<Link
					href={'/kyleresume.pdf'}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button
						alignSelf={'center'}
						onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
							event.stopPropagation()
						}
						w={'95%'}
						mt={8}
						bg={secondary}
						color={'gray.700'}
						rounded={'md'}
						_hover={{
							transform: 'translateY(-2px)',
							boxShadow: 'lg',
						}}
					>
						Resume
					</Button>
				</Link>
			</Flex>
		</Box>
	)
}

export default AvatarCard