import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('Transactions', function () {
  it('Should deploy the contract', async () => {
    const transactionsContract = await ethers.getContractFactory(
      'Transactions'
    );
    const deployment = await transactionsContract.deploy();

    expect(deployment.address).to.exist;
  });

  it('Should transfer some amount', () => {});
});
