/* eslint-disable react/react-in-jsx-scope */
// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
					<link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700;800&family=Pacifico&display=swap" rel="stylesheet" />
					<script src="https://kit.fontawesome.com/e015ee243a.js" crossOrigin="anonymous"></script>
				</Head>
				<body className='font-m-plus'>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument