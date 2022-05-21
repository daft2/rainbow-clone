import {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import ImageTranslate from '../../../utils/image-translate'

const Modal = ({ isOpen, selectedNft}) => {
	const [isVisible, setIsVisible] = useState(isOpen)
	let imageUrl = selectedNft?.metadata.image || selectedNft?.metadata.image_url

	if (imageUrl?.includes('ipfs://')) imageUrl = ImageTranslate.ipfs(imageUrl)

	const handleClose = () => {
		setIsVisible(false)
	}

	useEffect(() => {
		setIsVisible(isOpen)
	}, [isOpen])

	return (
		<div className={`${!isVisible && 'hidden'}`}>
			<span
				className={'z-10 cursor-pointer bg-black fixed inset-0 bg-opacity-75 h-full w-full'}></span>
			<span
				onClick={handleClose}
				className={'fixed z-30 cursor-pointer w-7 h-7 flex justify-center items-center bg-white rounded-full text-black top-5 right-5'}>
				<i className="fa-solid fa-xmark fa-xl"></i>
			</span>
			<div className={'z-20 fixed flex inset-0 justify-center items-center'}>
				<div
					className="relative flex justify-center sm:items-center sm:flex-col md:items-start md:flex-row">
					<img
						className='rounded-3xl w-96 mb-5 shadow-2xl'
						src={imageUrl}
						alt=""
					/>
					<div
						className="bg-white h-fit mx-5 p-5 w-96 flex flex-wrap flex-col shadow-2xl rounded-3xl">
						<h2 className='font-bold text-black text-opacity-50'>Collection Name</h2>
						<h1 className='font-extrabold text-2xl mb-3'>{selectedNft?.title}</h1>
						<div>
							<h2 className='font-extrabold text-lg my-2'>Description</h2>
							<p className='text-black text-opacity-50 text-md'>{selectedNft?.description}</p>
						</div>
						<div>
							<h2 className='font-extrabold text-lg my-2'>Attributes</h2>
							<div className="flex flex-wrap">
								{selectedNft?.metadata.attributes && selectedNft?.metadata.attributes.map((attribute,index) =>
									<div
										key={`attribute-${attribute.trait_type}-${index}`}
										className="flex flex-col mr-1 mt-1 text-black text-opacity-50 bg-gray-100 rounded-3xl w-fit py-2 pl-2 pr-4">
										<h3 className='font-extrabold text-xs uppercase'>{attribute.trait_type}</h3>
										<h3 className='text-sm'>{attribute.value}</h3>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

Modal.propTypes = {
	isOpen: PropTypes.bool,
	selectedNft: PropTypes.object
}

export default Modal