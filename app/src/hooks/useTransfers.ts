import { useContext } from 'react'
import { TransfersContext } from 'src/contexts/TransfersContext'

function useTransfers() {
  return useContext(TransfersContext)
}

export default useTransfers
