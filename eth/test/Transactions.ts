import { expect } from 'chai';
import { ethers } from 'hardhat';
import { Transactions, Transactions__factory } from '../typechain-types';

describe('Transactions', function () {
  let contract: Transactions__factory;
  let transactions: Transactions | null = null;

  this.beforeAll(async () => {
    contract = await ethers.getContractFactory('Transactions');
  });

  it('Should deploy the contract', async () => {
    transactions = await contract.deploy();
    expect(transactions.address).to.exist;
  });

  it('Should publish a transaction', async () => {
    const accounts = await ethers.getSigners();
    const [, account2] = accounts;
    await transactions?.deployed();

    const transaction = await transactions?.publishTransaction(
      account2.address,
      ethers.utils.parseEther('0.1'),
      'Sending ETH',
      'TRANSFER'
    );

    expect(transaction?.hash).to.exist;
  });

  it('Should emit a transfer event', async () => {
    const accounts = await ethers.getSigners();
    const [account, account2] = accounts;

    const timestamp = (await ethers.provider.getBlock('latest')).timestamp;

    const transaction = await transactions?.publishTransaction(
      account2.address,
      ethers.utils.parseEther('0.1'),
      'Sending ETH',
      'TRANSFER'
    );

    await expect(transaction)
      .to.emit(transactions, 'Transfer')
      .withArgs(
        account.address,
        account2.address,
        ethers.utils.parseEther('0.1'),
        'Sending ETH',
        timestamp + 1,
        'TRANSFER'
      );
  });
});
