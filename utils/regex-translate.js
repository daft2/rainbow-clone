const RegexTranslate = {
	validEthereumAddress: (address) => {
		const pattern = /^0x[a-fA-F0-9]{40}$/
		const result = address.match(pattern)

		return result
	},
	getMetadataFromURI: (data) => {
		const result = data.replace('data:application/json;utf8,', '')

		if (result[0] !== '{') {
			return null
		}

		const sanitizeResult = JSON.parse(result)

		return sanitizeResult
	}
}

export default RegexTranslate