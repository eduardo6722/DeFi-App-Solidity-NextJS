import Input from '@/components/Input/Input'
import Image from 'next/image'
import { FaCog } from 'react-icons/fa'
function Swap() {
  return (
    <section className="w-full flex flex-col gap-4">
      <div className="w-full flex justify-between items-center">
        <span className="inline-block">Swap</span>
        <FaCog />
      </div>
      <form className="flex flex-col gap-4">
        <Input
          icon={
            <Image src="/images/eth.png" width={20} height={20} alt="ether" />
          }
          type="number"
          placeholder="0.0"
        />
        <Input
          icon={
            <Image
              src="/images/ethCurrency.png"
              width={20}
              height={20}
              alt="ether"
            />
          }
          placeholder="0x..."
        />
        <button
          type="submit"
          className="bg-[#992a99] p-2 rounded-md active:bg-[#d345d3] transition-all h-[72px]"
        >
          Confirm
        </button>
      </form>
    </section>
  )
}

export default Swap
