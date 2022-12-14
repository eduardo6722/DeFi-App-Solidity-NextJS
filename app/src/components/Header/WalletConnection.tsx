import Image from 'next/image'

function WalletConnection() {
  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-row gap-2 items-center">
        <Image src="/images/eth.png" alt="eth" width={30} height={30} />
        <span className="inline-block">Ethereum</span>
      </div>
      <button className="bg-[#992a99] p-2 rounded-md active:bg-[#d345d3] transition-all">
        Connect Wallet
      </button>
    </div>
  )
}

export default WalletConnection
