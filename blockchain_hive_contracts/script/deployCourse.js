const hre = require("hardhat");
const swapSoTokenAddress="";
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function getSecondsOfDays(day) {
  return day * 24 * 60 * 60;
}
async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const baseUri="https://resources.zoth.io/nft/652e8634c9e1df8d9f6f85d6";

  console.log("Deploying ZothPool Contract...");
  
  const CourseSell = await hre.ethers.deployContract("CourseSell", [swapSoTokenAddress,baseUri]);

  await CourseSell.waitForDeployment();

  console.log(
    "CourseSell Deployed Successfully on Mentioned Network",
    CourseSell.target
  );

  console.log("Waiting for 30 Seconds to Verify the Contract on Etherscan");
  await sleep(30 * 1000);
  // // Verify the RektLock Contract
  await hre.run("verify:verify", {
    address: CourseSell.target,
    constructorArguments: [swapSoTokenAddress,baseUri],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
