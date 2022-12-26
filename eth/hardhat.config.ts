import '@nomicfoundation/hardhat-toolbox';
import { HardhatUserConfig } from 'hardhat/config';

const config: HardhatUserConfig = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/WmAPXyDcoaKCPZz-s4L1hQxdDZJNrL-P',
      accounts: [
        '77d88d50f26672345748018fba2acd707b486668c541959055c82f3b80754916',
      ],
    },
  },
};

export default config;
