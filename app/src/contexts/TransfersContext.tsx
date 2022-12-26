/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useCallback, useEffect, useState } from 'react'

export const TransfersContext = createContext<TransfersContextProps>(
  {} as TransfersContextProps
)

function TransfersProvider({ children }) {
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
    <TransfersContext.Provider value={{ account, handleConnectWallet }}>
      {children}
    </TransfersContext.Provider>
  )
}

export default TransfersProvider
