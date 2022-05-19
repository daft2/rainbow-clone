import PropTypes from 'prop-types'

const RoundedButton = ({children}) => {
	return (
		<button className='hover-zoom-out gradient-slate w-fit h-fit rounded-full'>
			{children}
		</button>
	)
}

RoundedButton.propTypes = {
	children: PropTypes.element
}

export default RoundedButton