import { ethers } from 'ethers'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import NftItem from '../components/atoms/nft-item/NftItem'
import RainbowHeadbar from '../components/molecules/rainbow-headbar/RainbowHeadbar'
import Sidebar from '../components/organisms/sidebar/Sidebar'

const Profile = () => {
	const [walletAddress, setWalletAddress] = useState({})
	const router = useRouter()
	const { slugAddress } = router.query
	const provider = new ethers.providers.CloudflareProvider()

	useEffect(() => {
		if (!slugAddress) {
			return
		}

		const getWalletAddress = async () => {
			const address = await provider.getResolver(slugAddress)

			setWalletAddress(address)
		}

		getWalletAddress()
	}, [slugAddress])

	return (
		<div>
			<RainbowHeadbar />
			<div className="flex mx-10 mt-10">
				<Sidebar walletAddress={walletAddress} />
				{/* NFT Display */}
				<div className="flex flex-col mx-16">
					<div className='flex text-2xl my-2'>
						<span>🖼</span>
						<h1 className='mx-2 font-extrabold'>All</h1>
					</div>
					<div className="grid h-screen overflow-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
						{[...Array(10)].map((item, index) => <NftItem key={index}/>)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile