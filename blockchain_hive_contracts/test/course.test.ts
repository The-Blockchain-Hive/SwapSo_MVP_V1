import { expect, assert, use } from "chai";
import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { ethers } from "hardhat";

function getSecondsOfDays(day: number) {
  return day * 24 * 60 * 60;
}
describe("Course-Sell", function () {


  async function runEveryTime() {
    const [owner, otherAccount,user1] = await ethers.getSigners();

    const baseUri = "https://gateway.pinata.cloud/ipfs/QmZ/";

    // TOKEN SETUP
    const testUSDCContract = await ethers.getContractFactory("TestToken");
    const testUSDC1 = await testUSDCContract.deploy();

    console.log("USDC deployed.");

    const testUSDCAddress1 = await testUSDC1.getAddress();

    const amountToTransfer = ethers.parseUnits("1000", 18);

    await testUSDC1.transfer(otherAccount, amountToTransfer);
    await testUSDC1.transfer(user1, amountToTransfer);

    console.log("Tokens transfered from main account to otherAccount.");

    // MAIN Contract Setup
    const CourseSellContract = await ethers.getContractFactory("CourseSell");
    const CourseSell = await CourseSellContract.connect(owner).deploy(
      testUSDCAddress1,
      baseUri
    );
    const courseSellAddress = await CourseSell.getAddress();
    console.log("CourseSell deployed.");
    const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000"; 

    return {
      owner,
      otherAccount,
      CourseSell,
      testUSDCAddress1,
      courseSellAddress,
      testUSDC1,
      ZERO_ADDRESS,
      user1
    };


  }

  describe("Deployment", async () => {
    it("[Deployment] : Should Deploy the Course Contract", async () => {
      const { CourseSell } = await loadFixture(runEveryTime);
      expect(await CourseSell.getAddress()).to.not.null;
    });

    it("[Deployment] : Should Deploy the Course Contract with correct SwapSo Address", async () => {
      const { CourseSell,testUSDCAddress1 } = await loadFixture(runEveryTime);
      expect(await CourseSell.swapTokenAddress()).equals(testUSDCAddress1);
    });

    it("[Add Course] : Owner should be able to add a course", async () => {
      const { CourseSell,owner } = await loadFixture(runEveryTime);
      await CourseSell.connect(owner).addCourse(200,getSecondsOfDays(10));
      const course = await CourseSell.courses(0);
      expect(course.price).to.equal(200);
    });


    it("[Buying Course] : Should be able to buy a course", async () => {
      const { CourseSell,owner,otherAccount,testUSDC1,courseSellAddress } = await loadFixture(runEveryTime);
      await CourseSell.connect(owner).addCourse(200,getSecondsOfDays(10));
      const spender_amount = ethers.parseUnits("1000", 18);
      await testUSDC1
        .connect(otherAccount)
        .approve(courseSellAddress, spender_amount);

      await CourseSell.connect(otherAccount).buyCourse(0);
      const course = await CourseSell.courses(0);
      expect(course.holder).to.equal(otherAccount.address);
    });

    it("[Sell Course]: Should be able to sell a course", async () => {
      const { CourseSell,owner,otherAccount,testUSDC1,courseSellAddress,ZERO_ADDRESS } = await loadFixture(runEveryTime);
      await CourseSell.connect(owner).addCourse(200,getSecondsOfDays(10));
      const spender_amount = ethers.parseUnits("1000", 18);
      await testUSDC1
        .connect(otherAccount)
        .approve(courseSellAddress, spender_amount);

      await CourseSell.connect(otherAccount).buyCourse(0);

      // time elapsed
      const unlockTime = (await time.latest()) + getSecondsOfDays(5);
      await time.increaseTo(unlockTime);

      await CourseSell.connect(otherAccount).sellCourse(0,300);
      const course = await CourseSell.courses(0);
      expect(course.holder).to.equal(ZERO_ADDRESS);
      expect(course.price).to.equal(300);
      expect(course.reSell).to.equal(true);
    });

    it("[Buy Resell Course]: Should be able to buy a resell course", async () => {
      const { CourseSell,owner,otherAccount,testUSDC1,courseSellAddress,user1 } = await loadFixture(runEveryTime);
      await CourseSell.connect(owner).addCourse(200,getSecondsOfDays(10));
      const spender_amount = ethers.parseUnits("1000", 18);
      await testUSDC1
        .connect(otherAccount)
        .approve(courseSellAddress, spender_amount);

      await CourseSell.connect(otherAccount).buyCourse(0);

      // time elapsed
      const unlockTime = (await time.latest()) + getSecondsOfDays(5);
      await time.increaseTo(unlockTime);

      await CourseSell.connect(otherAccount).sellCourse(0,300);
      
      await testUSDC1
      .connect(user1)
      .approve(courseSellAddress, spender_amount);

      await CourseSell.connect(user1).buyCourse(0);

      const course = await CourseSell.courses(0);

      expect(course.holder).to.equal(user1.address);

      console.log("Contract Balance",await testUSDC1.balanceOf(courseSellAddress));

      

    }
  );


});


});
