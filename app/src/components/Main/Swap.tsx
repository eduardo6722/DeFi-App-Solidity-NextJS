import Input from '@/components/Input/Input'
import useTransfers from '@/hooks/useTransfers'
import Image from 'next/image'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { FaCog } from 'react-icons/fa'

function Swap() {
  const { register, handleSubmit } = useForm<TransaferData>()

  const { handleSendTransaction } = useTransfers()

  const onSumit = useCallback(async ({ addressTo, amount }: TransaferData) => {
    await handleSendTransaction({ addressTo, amount })
  }, [])

  return (
    <section className="w-full flex flex-col gap-4">
      <div className="w-full flex justify-between items-center">
        <span className="inline-block">Swap</span>
        <FaCog />
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSumit)}>
        <Input
          fullWidth
          icon={
            <Image src="/images/eth.png" width={20} height={20} alt="ether" />
          }
          type="number"
          placeholder="0.0"
          step="0.00000001"
          {...register('amount', { required: true })}
        />
        <Input
          fullWidth
          icon={
            <Image
              src="/images/ethCurrency.png"
              width={20}
              height={20}
              alt="ether"
            />
          }
          placeholder="0x..."
          {...register('addressTo', { required: true })}
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
