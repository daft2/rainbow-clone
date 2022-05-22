import { ethers } from 'ethers'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import NftItem from '../components/atoms/nft-item/NftItem'
import RainbowHeadbar from '../components/molecules/rainbow-headbar/RainbowHeadbar'
import Sidebar from '../components/organisms/sidebar/Sidebar'
import { createAlchemyWeb3 } from '@alch/alchemy-web3'
import GradientButton from '../components/atoms/gradient-button/GradientButton'
import WalletNotFound from '../components/atoms/wallet-not-found/WalletNotFound'
import RegexTranslate from '../utils/regex-translate'
import Modal from '../components/organisms/modal/Modal'
import NftItemLoadingPlaceholder from '../components/molecules/nft-item-loading-placeholder/NftItemLoadingPlaceholder'

const Profile = () => {
	const [walletAddress, setWalletAddress] = useState(null)
	const [nftData, setNftData] = useState([])
	const [selectedNft, setSelectedNft] = useState(null)

	// Modal State
	const [isOpen, setIsOpen] = useState(false)

	//Loading State
	const [isWalletLoading, setIsWalletLoading] = useState(false)
	const [isNftLoading, setIsNftLoading] = useState(false)

	const router = useRouter()
	const { slugAddress } = router.query
	const provider = new ethers.providers.AlchemyProvider()
	// eslint-disable-next-line no-undef
	const web3 = createAlchemyWeb3(`https://eth-mainnet.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`)

	const handleModal = (nft) => {
		setSelectedNft(nft)
		setIsOpen(!isOpen)
	}

	useEffect(() => {
		setIsWalletLoading(true)
		setIsNftLoading(true)
		const getWalletAddress = async () => {
			if(slugAddress.includes('.eth')){
				const address = await provider.resolveName(slugAddress)
				setWalletAddress({name: slugAddress, address: address})
			} else if (RegexTranslate.validEthereumAddress(slugAddress) !== null) {
				const ensName = await provider.lookupAddress(slugAddress)
				setWalletAddress({name: ensName,address: slugAddress})
			}
		}

		getWalletAddress()
			.catch((error) => console.error({ error }))
			.finally(() => setIsWalletLoading(false))
	}, [slugAddress])

	useEffect(() => {
		const getNfts = async () => {
			const nfts = await web3.alchemy.getNfts({ owner: walletAddress.address })
			setNftData(nfts)
		}

		getNfts()
			.catch((error) => console.error({ error }))
			.finally(() => setIsNftLoading(false))
	}, [walletAddress])

	return (
		<div>
			<RainbowHeadbar>
				<GradientButton>Open in the app</GradientButton>
			</RainbowHeadbar>
			<Modal selectedNft={selectedNft} isOpen={isOpen} />
			<div className="flex flex-col lg:flex-row mx-10 mt-10">
				<Sidebar isLoading={isWalletLoading} walletAddress={walletAddress} />
				{/* NFT Display */}
				<div className="flex flex-col sm:mx-10 xl:mx-16">
					<div className='flex text-2xl my-2'>
						<span>🖼</span>
						<h1 className='mx-2 font-extrabold'>All</h1>
					</div>
					{
						!isNftLoading && nftData?.ownedNfts?.length > 0 &&
								<div className="h-screen overflow-auto">
									<div className="grid gap-8 mt-2 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
										{nftData?.ownedNfts?.map((nft, index) =>
											<NftItem
												key={index}
												nft={nft}
												handleModal={() => handleModal(nft)}
											/>
										)}
									</div>
								</div>
					}

					{!isNftLoading && nftData?.ownedNfts?.length == 0 &&
							<div className="p-24">
								<h1 className='text-2xl font-extrabold text-slate-400'>This address didnt have any NFT... 🗿</h1>
							</div>
					}
					{isNftLoading && <NftItemLoadingPlaceholder />}
				</div>
			</div>


			{!walletAddress && !isWalletLoading && <WalletNotFound />}
		</div>
	)
}

export default Profile