import {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const Modal = ({isOpen}) => {
	const [isVisible, setIsVisible] = useState(isOpen)

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
						src="https://lh3.googleusercontent.com/4t7b9pgWwoIk8WgFzs-alBR8uy9DIOdQ8cIl3-3MYHF9uvDI3ihBM4vU1TRsjOvgbd7AZGJDDnsIPuhxqyQdqZKQ_RpIxaiVInhC=w500"
						alt=""
					/>
					<div
						className="bg-white h-fit mx-5 p-5 w-96 flex flex-wrap flex-col shadow-2xl rounded-3xl">
						<h2 className='font-bold text-black text-opacity-50'>Collection Name</h2>
						<h1 className='font-extrabold text-2xl mb-3'>Name</h1>
						<div>
							<h2 className='font-extrabold text-lg my-2'>Description</h2>
							<p className='text-black text-opacity-50 text-md'>598</p>
						</div>
						<div>
							<h2 className='font-extrabold text-lg my-2'>Attributes</h2>
							<div className="flex flex-col text-black text-opacity-50 bg-gray-100 rounded-3xl w-fit py-2 pl-2 pr-4">
								<h3 className='font-extrabold text-xs uppercase'>Accessory</h3>
								<h3 className='text-sm'>Eye Mask</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

Modal.propTypes = {
	isOpen: PropTypes.bool
}

export default Modal