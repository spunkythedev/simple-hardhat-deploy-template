const { network } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config.js");
const { verify } = require("../util/verify.js");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer, account_2 } = await getNamedAccounts(); //? gets accounts from .config
  const chainId = network.config.chainId;

  //? deploy
  const constructorArgs = [];
  const contract = await deploy("SimpleStorage", {
    from: deployer,
    args: constructorArgs,
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1, //? wait on live network so verify works
  });

  //? verify if not using local chain & api key is set
  if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    await verify(contract.address, constructorArgs);
  }
};

module.exports.tags = ["all", "SimpleStorage"];
