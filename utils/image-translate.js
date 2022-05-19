const ImageTranslate = {
	ipfs: (imageUrl) => {
		let url = imageUrl.replace('ipfs://', 'https://ipfs.io/ipfs/')
		return url
	}
}

export default ImageTranslate