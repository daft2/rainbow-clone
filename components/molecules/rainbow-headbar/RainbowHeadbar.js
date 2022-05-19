import GradientButton from '../../atoms/gradient-button/GradientButton'
import InputSearch from '../../atoms/input-search/InputSearch'
import RainbowIcon from '../../atoms/rainbow-icon/RainbowIcon'

const RainbowHeadbar = () => {
	return (
		<div className='flex justify-between mt-6 mx-10'>
			<RainbowIcon />
			<InputSearch />
			<GradientButton>Open in the app</GradientButton>
		</div>
	)
}

export default RainbowHeadbar