import { useContext } from 'react'
import { TransfersContext } from 'src/Contexts/TransfersContext'

function useTransfers() {
  return useContext(TransfersContext)
}

export default useTransfers
