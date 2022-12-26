import useTransfers from '@/hooks/useTransfers'
import Image from 'next/image'

function WalletConnection() {
  const { handleConnectWallet, account } = useTransfers()

  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-row gap-2 items-center">
        <Image src="/images/eth.png" alt="eth" width={30} height={30} />
        <span className="inline-block">Ethereum</span>
      </div>
      <button
        className={`p-2 rounded-md active:bg-[#d345d3] transition-all ${
          account ? 'bg-[green]' : 'bg-[#992a99]'
        }`}
        onClick={handleConnectWallet}
        disabled={!!account}
      >
        {account ? `Wallet ${account.slice(0, 5)}...` : 'Connect Wallet'}
      </button>
    </div>
  )
}

export default WalletConnection
