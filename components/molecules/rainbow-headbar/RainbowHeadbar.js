import InputSearch from '../../atoms/input-search/InputSearch'
import RainbowIcon from '../../atoms/rainbow-icon/RainbowIcon'
import PropTypes from 'prop-types'

const RainbowHeadbar = ({children, title}) => {
	return (
		<div className='flex justify-between items-center mt-6 mx-10'>
			<div className="flex items-center">
				<RainbowIcon />
				<span className='pl-3 hidden md:block text-2xl font-extrabold'>{title}</span>
			</div>
			<InputSearch />
			<div className='flex gap-3'>
				{children}
			</div>
		</div>
	)
}

RainbowHeadbar.propTypes = {
	children: PropTypes.node,
	title: PropTypes.string
}

export default RainbowHeadbar