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

const Profile = () => {
	const [walletAddress, setWalletAddress] = useState({})
	const [nftData, setNftData] = useState([])
	const router = useRouter()
	const { slugAddress } = router.query
	const provider = new ethers.providers.AlchemyProvider()
	// eslint-disable-next-line no-undef
	const web3 = createAlchemyWeb3(`https://eth-mainnet.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`)

	useEffect(() => {
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
			.catch((error) => console.error({error}))
	}, [slugAddress])

	useEffect(() => {
		const getNfts = async () => {
			const nfts = await web3.alchemy.getNfts({ owner: walletAddress?.address })
			setNftData(nfts)
		}

		getNfts()
			.catch((error) => console.error({error}))
	}, [walletAddress])

	return (
		<div>
			<RainbowHeadbar>
				<GradientButton>Open in the app</GradientButton>
			</RainbowHeadbar>
			{
				walletAddress && <div className="flex mx-10 mt-10">
					<Sidebar walletAddress={walletAddress} />
					{/* NFT Display */}
					<div className="flex flex-col mx-16">
						<div className='flex text-2xl my-2'>
							<span>🖼</span>
							<h1 className='mx-2 font-extrabold'>All</h1>
						</div>
						{
							nftData !== null ?
								<div className="h-screen overflow-auto">
									<div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
										{nftData?.ownedNfts?.map((nft, index) =>
											<NftItem
												key={index}
												nft={nft}
											/>
										)}
									</div>
								</div>
								: <div className="p-24">
									<h1 className='text-2xl font-extrabold text-slate-400'>This address didnt have any NFT... 🗿</h1>
								</div>
						}
					</div>
				</div>
			}

			{!walletAddress && <WalletNotFound />}
		</div>
	)
}

export default Profile