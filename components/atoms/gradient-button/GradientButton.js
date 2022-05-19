import PropTypes from 'prop-types'

const GradientButton = ({children, onSubmit}) => {
	return (
		<button
			onClick={onSubmit}
			className='text-blue-600 font-bold text-lg bg-gradient-to-r from-blue-100 to-blue-100 duration-200 ease-out hover:scale-110 backdrop-filter backdrop-blur-lg rintext-white py-2 px-3 rounded-full'>
			{children}
		</button>
	)
}

GradientButton.propTypes = {
	children: PropTypes.element,
	onSubmit: PropTypes.func
}

export default GradientButton