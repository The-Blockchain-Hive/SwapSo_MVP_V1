const { ethers, upgrades } = require("hardhat");
const swapSoTokenAddress = "";
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function getSecondsOfDays(day) {
  return day * 24 * 60 * 60;
}
async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const baseUri = "https://resources.zoth.io/nft/652e8634c9e1df8d9f6f85d6";

  console.log("Deploying SwapSo Contracts...");

  const Course = await ethers.getContractFactory("Course");
  const course = await upgrades.deployProxy(Course, [
    deployer.address,
    baseUri,
  ]);
  await course.waitForDeployment();
  const courseAddress = await course.getAddress();
  console.log(`Course deployed at: ${courseAddress}`);

  const Market = await ethers.getContractFactory("Market");
  const market = await upgrades.deployProxy(Market, [
    deployer.address,
    courseAddress,
    1000,
  ]);

  await market.waitForDeployment();
  const marketAddress = await market.getAddress();

  console.log(`Market deployed at: ${marketAddress}`);

  await course.setMarketplaceContract(marketAddress);

  console.log("Market contract set in NFT");

  // const CourseSell = await hre.ethers.deployContract("CourseSell", [
  //   swapSoTokenAddress,
  //   baseUri,
  // ]);

  // console.log(
  //   "CourseSell Deployed Successfully on Mentioned Network",
  //   CourseSell.target
  // );

  // console.log("Waiting for 30 Seconds to Verify the Contract on Etherscan");
  // await sleep(30 * 1000);
  // // // Verify the RektLock Contract
  // await hre.run("verify:verify", {
  //   address: CourseSell.target,
  //   constructorArguments: [swapSoTokenAddress, baseUri],
  // });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
