import RainbowHeadbar from '../components/molecules/rainbow-headbar/RainbowHeadbar'

function Home() {
	return (
		<div>
			<RainbowHeadbar title={'Pelangi'}>
				<a
					href="https://twitter.com/0xdaft"
					target='_blank'
					rel="noreferrer"
				>
					<span className='text-lg font-extrabold text-slate-400 hover:text-blue-500'>🐣 twitter</span>
				</a>
				<a
					href="https://github.com/daft2"
					target='_blank'
					rel="noreferrer"
				>
					<span className='text-lg font-extrabold text-slate-400 hover:text-black'>👨‍💻 github</span>
				</a>
			</RainbowHeadbar>
			<div className="flex py-16 justify-center w-screen">
				<h1 className='text-6xl w-6/12 text-center font-extrabold'>Explore the new world of Ethereum 🌍 🖼 ✨</h1>
			</div>
			<div className="flex justify-center">
				<h1 className='text-slate-400 snap-center font-extrabold'>made with 💖 by @0xobject</h1>
			</div>
		</div>
	)
}

export default Home