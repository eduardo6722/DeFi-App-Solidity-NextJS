import build from '../../../eth/artifacts/contracts/Transactions.sol/Transactions.json'

export const contractABI = build.abi
export const contractAddress = process.env
  .NEXT_PUBLIC_CONTRACT_ADDRESS as string
