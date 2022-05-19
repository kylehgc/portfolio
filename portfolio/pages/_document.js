import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head />
			<body>
				<ColorModeScript initialColorMode="light" />
				<Main />

				<NextScript />
			</body>
		</Html>
	)
}
