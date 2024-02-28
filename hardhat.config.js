require("dotenv").config();

require("hardhat-deploy");
require("hardhat-deploy-ethers");
require("@nomicfoundation/hardhat-ethers");

require("@nomicfoundation/hardhat-chai-matchers");
require("@nomicfoundation/hardhat-verify");
require("hardhat-gas-reporter");
require("solidity-coverage");

const METAMASK_ACCOUNT = process.env.METAMASK_ACCOUNT;
const METAMASK_ACCOUNT_2 = process.env.METAMASK_ACCOUNT_2;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;

module.exports = {
  solidity: {
    compilers: [{ version: "0.8.24" } /*,{ version: "0.6.6" }*/],
  },
  defaultNetwork: "hardhat",
  namedAccounts: {
    deployer: 0,
    account2: 1,
    // account3: { 31337: 2, 5: 3 }, //? different accounts depending on chainid
  },
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      accounts: [
        "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
        "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d",
      ],
      saveDeployments: true,
      chainId: 31337,
    },
    goerli: {
      url: process.env.GOERLI_RPC,
      accounts: [METAMASK_ACCOUNT, METAMASK_ACCOUNT_2],
      saveDeployments: true,
      chainId: 5,
    },
    sepolia: {
      url: process.env.SEPOLIA_RPC,
      accounts: [METAMASK_ACCOUNT, METAMASK_ACCOUNT_2],
      saveDeployments: true,
      chainId: 11155111,
      // blockConfirmations: 6,
    },
    mainnet: {
      url: process.env.MAINNET_RPC,
      accounts: [METAMASK_ACCOUNT],
      saveDeployments: true,
      chainId: 1,
    },
  },
  gasReporter: {
    enabled: true,
    // currency: "USD",
    // outputFile: "gas-report.txt",
    // noColors: true,
    // coinmarketcap: COINMARKETCAP_API_KEY,
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
    // customChains: [], // uncomment this line if you are getting a TypeError: customChains is not iterable
  },
  sourcify: {
    enabled: false,
  },
};
