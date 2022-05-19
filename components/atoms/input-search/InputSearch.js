
const InputSearch = () => {
	return (
		<div className='hover-zoom-out'>
			<label className="relative block">
				<span className="absolute inset-y-0 left-0 flex items-center pl-3">
					<svg className="h-5 w-5 fill-slate-400" viewBox="0 0 20 20">
						<path d="M7.19824 14.3965C8.48145 14.3965 9.68555 14.0537 10.7402 13.4561L14.0537 16.7783C14.3965 17.1211 14.8711 17.2881 15.3457 17.2881C16.374 17.2881 17.1387 16.4971 17.1387 15.4863C17.1387 15.0205 16.9805 14.5635 16.6289 14.2119L13.3418 10.9248C14.0098 9.83496 14.3965 8.56055 14.3965 7.19824C14.3965 3.25195 11.1533 0 7.19824 0C3.25195 0 0 3.24316 0 7.19824C0 11.1533 3.24316 14.3965 7.19824 14.3965ZM7.19824 11.8652C4.62305 11.8652 2.53125 9.77344 2.53125 7.19824C2.53125 4.63184 4.62305 2.53125 7.19824 2.53125C9.77344 2.53125 11.8652 4.63184 11.8652 7.19824C11.8652 9.77344 9.77344 11.8652 7.19824 11.8652Z"></path>
					</svg>
				</span>
				<span className="sr-only">Search</span>
				<input
					type="text"
					name="search"
					className="block bg-gradient-to-r text-md bg-opacity-25 backdrop-filter from-gray-200 to-gray-100 w-full rounded-full py-2 pl-9 pr-3 shadow-sm placeholder:font-extrabold placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
					placeholder="Search any ENS name or Ethereum address"
					size='42'
				/>
			</label>
		</div>
	)
}

export default InputSearch