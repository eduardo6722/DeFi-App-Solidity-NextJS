interface TransaferData {
  addressTo: string
  amount: number | string
}

interface TransfersContextProps {
  account: string | undefined
  loading: boolean
  handleConnectWallet: () => void
  handleSendTransaction: (data: TransaferData) => Promise<void>
}
