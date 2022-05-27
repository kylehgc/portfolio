import { background, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
	styles: {
		global: {
			body: {
				color: 'white',
				bg: 'gray.700',
			},
		},
	},
})

export default theme
