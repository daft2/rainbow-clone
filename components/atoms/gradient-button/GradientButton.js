import PropTypes from 'prop-types'

const GradientButton = ({ children, onSubmit, size, color }) => {
	const btnSize = {
		'sm': 'text-sm py-0.5',
		'md': 'text-md py-1',
		'lg': 'text-lg py-2'
	}

	return (
		<button
			onClick={onSubmit}
			className={`text-blue-600 font-extrabold ${color} hover-zoom-out backdrop-filter backdrop-blur-lg rintext-white ${btnSize[size]} px-3 rounded-full`}>
			{children}
		</button>
	)
}

GradientButton.propTypes = {
	size: PropTypes.string,
	color: PropTypes.string,
	onSubmit: PropTypes.func,
	children: PropTypes.element,
}

GradientButton.defaultProps = {
	size: 'lg',
	color: 'gradient-blue'
}

export default GradientButton