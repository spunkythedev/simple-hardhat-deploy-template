const { ethers, getNamedAccounts } = require("hardhat");

async function main() {
  const { deployer, account_2 } = await getNamedAccounts();
  const contract = await ethers.getContract("SimpleStorage", deployer);

  const address = await contract.getAddress();
  console.log(`contract address: ${address}`);

  //? read
  const currentValue = await contract.retrieve();
  console.log("current value: " + currentValue);

  //? write
  const txResponse = await contract.store("8");
  await txResponse.wait(1);
  const updatedValue = await contract.retrieve();
  console.log("updated value: " + updatedValue);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
