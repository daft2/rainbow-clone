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
					className="relative flex items-center flex-col lg:items-start lg:flex-row">
					<div className="rounded-3xl w-80 h-80 lg:w-96 lg:h-96 my-5 lg:my-0 shadow-2xl bg-black">
						{imageUrl?.includes('.mp4') ? <video
							className='object-fit w-80 lg:w-96 rounded-3xl'
							src={imageUrl}
							alt=""
							preload='auto'
							autoPlay={true}
							controls
							loop
						/>
							: <img
								className='object-fit w-80 lg:w-96 rounded-3xl'
								src={imageUrl}
								alt=""
							/>
						}
					</div>
					<div
						className="bg-white w-80 h-80 lg:w-96 lg:h-96 mx-5 p-5 max-w-lg flex overflow-y-auto flex-col shadow-2xl rounded-3xl">
						<div>
							<h2 className='font-bold text-black text-opacity-50'>Collection Name</h2>
							<h1 className='font-extrabold text-2xl mb-3'>{selectedNft?.title}</h1>
						</div>

						{
							selectedNft?.description && <div>
								<h2 className='font-extrabold text-lg my-2'>Description</h2>
								<p className='text-black text-opacity-50 text-md'>{selectedNft?.description}</p>
							</div>
						}

						{
							selectedNft?.metadata.attributes.length > 0 && <div>
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
						}

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