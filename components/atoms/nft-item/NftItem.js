import PropTypes from 'prop-types'
import ImageTranslate from '../../../utils/image-translate'

const NftItem = ({ nft, handleModal }) => {
	const {title, metadata} = nft
	let imageUrl = metadata.image || metadata.image_url

	if (imageUrl?.includes('ipfs://')) imageUrl = ImageTranslate.ipfs(imageUrl)

	return (
		// TODO: Temporary fixes. Need to change later
		<div className={`${!title ? 'hidden' : null} w-fit h-fit`}>
			<div className="bg-theme shadow-around rounded-3xl w-fit h-fit">
				<img
					className='object-cover rounded-3xl w-56 h-56 duration-300 ease-out hover:scale-105 cursor-pointer'
					src={imageUrl}
					alt="NFT Asset Image"
					onClick={handleModal}
				/>
			</div>
			<h2 className='text-slate-500 font-bold mt-2 truncate'>{title}</h2>
		</div>
	)
}

NftItem.propTypes = {
	nft: PropTypes.object,
	handleModal: PropTypes.func,
}

export default NftItem