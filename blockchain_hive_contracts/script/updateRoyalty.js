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

  const marketContractFactory = await ethers.getContractFactory("Market");

  const market = await marketContractFactory.attach(
    "0x34950f9a5A63e94a6247120C91C6a7806e577b0e" // change this address
  );
  const royalty = await market.setRoyaltyPercentage(9000);

  console.log({ royalty });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
