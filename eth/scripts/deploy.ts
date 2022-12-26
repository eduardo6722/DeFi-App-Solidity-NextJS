import { ethers } from 'hardhat';

async function main() {
  const Transactions = await ethers.getContractFactory('Transactions');
  const deployment = await Transactions.deploy();

  await deployment.deployed();

  console.log(`deployed to ${deployment.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
