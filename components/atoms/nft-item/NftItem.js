import PropTypes from 'prop-types'
import ImageTranslate from '../../../utils/image-translate'

const NftItem = ({ nft }) => {
	const {title, metadata} = nft
	let imageUrl = metadata.image || metadata.image_url

	if (imageUrl?.includes('ipfs://')) imageUrl = ImageTranslate.ipfs(imageUrl)

	return (
		<div className='h-fit overflow-x-clip'>
			<img
				className='w-64 h-60 p-1 rounded-3xl drop-shadow-lg duration-300 ease-out hover:scale-105 cursor-pointer'
				src={imageUrl}
				alt="NFT Asset Image"
			/>
			<h2 className='text-slate-500 font-bold mt-2 truncate'>{title}</h2>
		</div>
	)
}

NftItem.propTypes = {
	nft: PropTypes.object
}

export default NftItem