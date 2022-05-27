import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head />
			<body>
				<ColorModeScript initialColorMode="dark" />
				<Main />

				<NextScript />
			</body>
		</Html>
	)
}
