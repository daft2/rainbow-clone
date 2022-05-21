const TextUtils = {
	truncate: (text) => {
		const separator = '...'

		var sepLen = separator.length,
			charsToShow = 12 - sepLen,
			frontChars = Math.ceil(charsToShow/2),
			backChars = Math.floor(charsToShow / 2)

		return text.substr(0, frontChars) +
      separator +
      text.substr(text.length - backChars)
	}
}

export default TextUtils