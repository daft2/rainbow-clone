import React from 'react'
import PropTypes from 'prop-types'

const NftItem = (nft) => {
	return (
		<div>
			<img
				className='w-64 h-60 p-1 rounded-3xl drop-shadow-lg duration-300 ease-out hover:scale-105 cursor-pointer'
				src="https://lh3.googleusercontent.com/OJDijFFOEf6UfOX1FYHvzKp6pSbHE6ExkmaINVb4Ftslr3oxhF5KEgtdc2_q4NOIf6tNQQYv7s8SNZ6sGFwm5YctmmwwIXy8kuKM=w1000"
				alt=""
			/>
			<h2 className='text-slate-500 font-bold mt-2'>#506</h2>
		</div>
	)
}

NftItem.propTypes = {}

export default NftItem