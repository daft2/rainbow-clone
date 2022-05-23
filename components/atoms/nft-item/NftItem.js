import PropTypes from 'prop-types'
import ImageTranslate from '../../../utils/image-translate'
import RegexTranslate from '../../../utils/regex-translate'

const NftItem = ({ nft, handleModal }) => {
	const { title, metadata, tokenUri } = nft
	const uriMetadata = RegexTranslate.getMetadataFromURI(tokenUri.raw)

	let imageUrl = metadata.image || metadata.image_url || uriMetadata?.image
	let nftName = title || uriMetadata?.name

	if (imageUrl?.includes('ipfs://')) imageUrl = ImageTranslate.ipfs(imageUrl)

	return (
		<div className={`${!nftName && 'hidden'} h-fit`}>
			<div className="bg-theme shadow-around rounded-3xl w-32 sm:w-36 md:w-44 xl:w-56 h-fit">
				{imageUrl?.includes('.mp4') ?
					<video
						className='object-cover rounded-3xl w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 xl:w-56 xl:h-56 duration-300 ease-out hover:scale-105 cursor-pointer'
						src={imageUrl}
						alt="NFT Asset Image"
						preload='auto'
						autoPlay
						onClick={handleModal}
					/>
					: <img
						className='object-cover rounded-3xl w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 xl:w-56 xl:h-56 duration-300 ease-out hover:scale-105 cursor-pointer'
						src={imageUrl}
						alt="NFT Asset Image"
						onClick={handleModal}
					/>
				}
			</div>
			<h2 className='text-slate-500 font-bold mt-2 truncate'>{nftName}</h2>
		</div>
	)
}

NftItem.propTypes = {
	nft: PropTypes.object,
	handleModal: PropTypes.func,
}

export default NftItem