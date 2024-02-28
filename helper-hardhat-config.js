const { ethers } = require("hardhat");

const networkConfig = {
  default: {
    name: "hardhat",
  },
  31337: {
    name: "localhost",
    ethUsdPriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
    fee: ethers.parseEther("0.01"),
  },
  11155111: {
    name: "sepolia",
    ethUsdPriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
    fee: ethers.parseEther("0.01"),
  },
  1: {
    name: "mainnet",
  },
};

const developmentChains = ["hardhat", "localhost"];
const INITIAL_SUPPLY = "1000000000000000000000";

module.exports = {
  networkConfig,
  developmentChains,
  INITIAL_SUPPLY,
};
