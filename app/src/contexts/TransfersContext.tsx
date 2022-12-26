/* eslint-disable @typescript-eslint/no-explicit-any */
import { ethers } from 'ethers'
import { createContext, useCallback, useEffect, useState } from 'react'

export const TransfersContext = createContext<TransfersContextProps>(
  {} as TransfersContextProps
)

function TransfersProvider({ children }) {
  const [loading, setLoading] = useState(false)
  const [account, setAccount] = useState<string>()
  const [metamask, setMetamask] = useState<any>()

  const handleConnectWallet = useCallback(async () => {
    try {
      if (!metamask) {
        alert('Please install Metamask!')
        return
      }
      const accounts = (await metamask.request({
        method: 'eth_requestAccounts',
      })) as string[]
      if (accounts?.length) {
        setAccount(accounts[0])
      }
    } catch (error) {
      console.error(error)
    }
    if (!metamask) return
  }, [metamask])

  const getContract = useCallback(() => {
    const provider = new ethers.providers.Web3Provider(metamask)
    const signer = provider.getSigner()
    const transactionContract = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    )
    return transactionContract
  }, [])

  const handleSendTransaction = useCallback(
    async ({ addressTo, amount }: TransaferData) => {
      try {
        if (!metamask || !account) return
        setLoading(true)
        const contract = getContract()
        const parsedEther = ethers.utils.parseEther(String(amount))
        await metamask.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: account,
              to: addressTo,
              gas: '0x7ef40',
              value: parsedEther._hex,
              data: 'Hello',
            },
          ],
        })
        // const transaction = await contract.publishTransaction(
        //   addressTo,
        //   parsedEther,
        //   `Transfering ETH ${parsedEther} to ${addressTo}`,
        //   'TRANSFER'
        // )
        // await transaction.wait()
        // await saveTransaction(transaction.hash, parsedEther, account, addressTo)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    },
    [metamask, account, getContract]
  )

  useEffect(() => {
    if ((window as any)?.ethereum) {
      setMetamask((window as any).ethereum)
    }
  }, [])

  useEffect(() => {
    async function checkConnection() {
      try {
        if (!metamask) return
        const accounts = await metamask.request({ method: 'eth_accounts' })
        if (accounts?.length) {
          setAccount(accounts[0])
        }
      } catch (error) {
        console.error(error)
      }
    }
    checkConnection()
  }, [metamask])

  return (
    <TransfersContext.Provider
      value={{ account, loading, handleConnectWallet, handleSendTransaction }}
    >
      {children}
    </TransfersContext.Provider>
  )
}

export default TransfersProvider
