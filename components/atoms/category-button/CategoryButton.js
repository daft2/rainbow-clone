import PropTypes from 'prop-types'

const CategoryButton = ({ emote, text, addition, isSelected }) => {

	return (
		<div className={`flex hover-zoom-out cursor-pointer ${isSelected ? 'bg-gradient-to-r' : null} from-slate-200 to-theme rounded-2xl py-2 justify-between`}>
			<div className="flex justify-start px-3">
				<span className='text-lg'>{emote}</span>
				<h2 className='mx-2 font-extrabold text-lg'>{text}</h2>
			</div>
			{addition}
		</div>
	)
}

CategoryButton.propTypes = {
	emote: PropTypes.string,
	text: PropTypes.string,
	addition: PropTypes.node,
	isSelected: PropTypes.bool
}

export default CategoryButton