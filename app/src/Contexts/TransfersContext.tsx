/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useCallback, useEffect, useState } from 'react'

export const TransfersContext = createContext<TransfersContextProps>(
  {} as TransfersContextProps
)

function TransfersProvider({ children }) {
  const [account, setAccount] = useState<string>()
  const [eth, setEth] = useState<any>()

  const handleConnectWallet = useCallback(async () => {
    try {
      if (!eth) {
        alert('Please install Metamask!')
        return
      }
      const accounts = (await eth.request({
        method: 'eth_requestAccounts',
      })) as string[]
      if (accounts?.length) {
        setAccount(accounts[0])
      }
    } catch (error) {
      console.error(error)
    }
    if (!eth) return
  }, [eth])

  useEffect(() => {
    if ((window as any)?.ethereum) {
      setEth((window as any).ethereum)
    }
  }, [])

  return (
    <TransfersContext.Provider value={{ account, handleConnectWallet }}>
      {children}
    </TransfersContext.Provider>
  )
}

export default TransfersProvider
