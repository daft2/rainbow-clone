import { useRouter } from 'next/router'


const RainbowIcon = () => {
	const router = useRouter()

	const handleClick = (e) => {
		e.preventDefault()
		router.push('/')
	}

	return (
		<div
			className="hover-zoom-out cursor-pointer bg-blue-800 rounded-lg w-10 h-10 flex justify-center items-center shadow-lg"
			onClick={handleClick}
		>
			<span className='text-2xl'>🌈</span>
		</div>
	)
}

export default RainbowIcon