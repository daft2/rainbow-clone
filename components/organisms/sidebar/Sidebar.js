import CategoryButton from '../../atoms/category-button/CategoryButton'
import EmoteIcon from '../../atoms/emote-icon/EmoteIcon'
import GradientButton from '../../atoms/gradient-button/GradientButton'
import {useState} from 'react'
import RoundedButton from '../../atoms/rounded-button/RoundedButton'
import PropTypes from 'prop-types'
import TextUtils from '../../../utils/text-utils'
import WalletInfoLoadingPlaceholder from '../../molecules/wallet-info-loading-placeholder/WalletInfoLoadingPlaceholder'

const Sidebar = ({ walletAddress, isLoading }) => {
	const truncateAddress = TextUtils.truncate(walletAddress.address)
	const [isCopied, setIsCopied] = useState(false)

	const copyClipboard = () => {
		if (navigator && navigator.clipboard && navigator.clipboard.writeText){
			setIsCopied(true)
			setTimeout(() => {
				setIsCopied(false)
			}, 2000)
			return navigator.clipboard.writeText(walletAddress.address)
		}
	}

	return (
		<div className="w-64 h-screen">
			{/* Icon */}
			<EmoteIcon />

			{/* Wallet Addr */}
			{isLoading && <WalletInfoLoadingPlaceholder />}

			{
				!isLoading && <div className="my-5">
					{walletAddress.name !== null && <h1 className='font-extrabold tracking-tighter text-3xl'>{walletAddress.name}</h1>}
					<div className="flex justify-between">
						<h2 className='font-bold tracking-tight text-2xl text-slate-500'>{truncateAddress}</h2>
						<GradientButton size='sm' onSubmit={copyClipboard}>{isCopied ? 'Copied' : 'Copy'}</GradientButton>
						<RoundedButton>
							<svg height='30' viewBox='0 0 30 30' width='30' xmlns="http://www.w3.org/2000/svg">
								<path d="M11.0244 14.8677C11.0244 13.7346 10.1805 12.8984 9.04738 12.8984C7.96898 12.8984 7.07812 13.7737 7.07812 14.8677C7.07812 15.907 7.96898 16.8369 9.04738 16.8369C10.0945 16.8369 11.0244 15.907 11.0244 14.8677ZM16.9635 14.8677C16.9635 13.7346 16.1273 12.8984 14.9942 12.8984C13.9236 12.8984 13.0328 13.7737 13.0328 14.8677C13.0328 15.907 13.9236 16.8369 14.9942 16.8369C16.0414 16.8369 16.9635 15.907 16.9635 14.8677ZM22.9181 14.8677C22.9181 13.7346 22.082 12.8984 20.9489 12.8984C19.8705 12.8984 18.9718 13.7737 18.9718 14.8677C18.9718 15.907 19.8705 16.8369 20.9489 16.8369C21.996 16.8369 22.9181 15.907 22.9181 14.8677Z" fill="#3C4252" fillOpacity="0.6"></path>
							</svg>
						</RoundedButton>
					</div>
				</div>
			}

			{/* Category */}
			<div>
				<CategoryButton
					emote={'🖼'}
					text={'All'}
					isSelected={true}
					addition={<svg fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M10.6973 21.5059C16.498 21.5059 21.2441 16.7598 21.2441 10.959C21.2441 5.14844 16.498 0.402344 10.6875 0.402344C4.88672 0.402344 0.140625 5.14844 0.140625 10.959C0.140625 16.7598 4.88672 21.5059 10.6973 21.5059ZM10.6973 18.3223C6.61523 18.3223 3.32422 15.0312 3.32422 10.959C3.32422 6.87695 6.61523 3.58594 10.6875 3.58594C14.7695 3.58594 18.0605 6.87695 18.0605 10.959C18.0605 15.0312 14.7695 18.3223 10.6973 18.3223ZM8.61719 15.6953C8.99805 16.0762 9.79883 16.0664 10.209 15.6758L13.8711 12.248C14.5938 11.5742 14.5938 10.373 13.8711 9.69922L10.209 6.28125C9.75 5.85156 9.07617 5.86133 8.65625 6.25195C8.17773 6.68164 8.17773 7.43359 8.62695 7.86328L11.9668 10.9688L8.62695 14.084C8.1875 14.5039 8.14844 15.2266 8.61719 15.6953Z" fill="#25292E"></path></svg>}
				/>
			</div>
		</div>
	)
}

Sidebar.propTypes = {
	walletAddress: PropTypes.object,
	isLoading: PropTypes.bool
}

export default Sidebar