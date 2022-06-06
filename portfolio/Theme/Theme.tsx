import { background, extendTheme, ThemeConfig } from '@chakra-ui/react'

const theme: ThemeConfig = extendTheme({
	fonts: {
		heading: `'Roboto Slab', sans-serif`,
		body: `'Roboto Slab', sans-serif`,
	},
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
