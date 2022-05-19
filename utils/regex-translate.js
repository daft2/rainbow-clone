const RegexTranslate = {
	validEthereumAddress: (address) => {
		const pattern = /^0x[a-fA-F0-9]{40}$/
		const result = address.match(pattern)

		return result
	}
}

export default RegexTranslate