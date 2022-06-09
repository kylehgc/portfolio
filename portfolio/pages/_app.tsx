import '../styles/globals.css'
import '@fontsource/roboto-slab'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'react-multi-carousel/lib/styles.css'
import { ChakraProvider, DarkMode } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Nav from '../Components/Nav'
import Head from 'next/head'
import theme from '../Theme/Theme'
import Footer from '../Components/Footer'
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<html lang="en" />
				<title>Kyle Christensen&apos;s Portfolio</title>
				<link rel="shortcut icon" href="/logofav.svg" />
				<meta
					name="description"
					content={'Front page of the portfolio of Kyle Christensen'}
				/>
			</Head>
			<ChakraProvider theme={theme}>
				<DarkMode>
					<Nav />
					<Component {...pageProps} />
					<Footer />
				</DarkMode>
			</ChakraProvider>
		</>
	)
}

export default MyApp
