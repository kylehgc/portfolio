import '../styles/globals.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'react-multi-carousel/lib/styles.css'
import { ChakraProvider, DarkMode } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Nav from '../Components/Nav'
import theme from '../Theme/Theme'
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<DarkMode>
				<Nav />
				<Component {...pageProps} />
			</DarkMode>
		</ChakraProvider>
	)
}

export default MyApp
