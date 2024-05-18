import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect, assert, use } from "chai";
import { ethers, upgrades, network } from "hardhat";

import { Course1, Course2, Course3 } from "./Course.fixture";
import { getSecondsOfDays } from "./utils";

describe("Market", function () {
  async function runEveryTime() {
    const signers = await ethers.getSigners();
    const owner = signers[0];

    const baseUri = "https://gateway.pinata.cloud/ipfs/QmZ/";

    // MAIN Contract Setup

    const Course = await ethers.getContractFactory("Course");
    const course = await upgrades.deployProxy(Course, [owner.address, baseUri]);

    await course.waitForDeployment();

    const courseAddress = await course.getAddress();
    console.log(`Course deployed at: ${courseAddress}`);
    const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

    const Market = await ethers.getContractFactory("Market");
    const market = await upgrades.deployProxy(Market, [
      owner.address,
      courseAddress,
      1000,
    ]);

    await market.waitForDeployment();
    const marketAddress = await market.getAddress();
    console.log(`Market deployed at: ${marketAddress}`);

    await course.setMarketplaceContract(marketAddress);

    console.log("Market contract set in NFT");

    return {
      owner,
      signers,
      ZERO_ADDRESS,
      course,
      market,
    };
  }

  it("Buy course from SwapSo and mint", async () => {
    const { course, market, signers, owner, ZERO_ADDRESS } = await loadFixture(
      runEveryTime
    );

    const ownerOldBalance = await ethers.provider.getBalance(owner.address);
    const signerOldBalance = await ethers.provider.getBalance(
      signers[1].address
    );

    await market.connect(signers[1]).buyCourse(
      {
        courseId: Course1.courseId,
        details: {
          id: Course1.id,
          dbId: Course1.dbId,
          price: Course1.price,
          recommendedDuration: Course1.recommendedDuration,
        },
      },
      getSecondsOfDays(20),
      { value: Course1.price * 20 }
    );

    const courseData = await course.getUserCourse(signers[1].address);
    expect(courseData.length).to.eq(1);
    expect(courseData[0]).to.eq(Course1.courseId);

    const courseDetails = await course.getCourseDetails(Course1.courseId);

    expect(courseDetails[0]).to.eq(Course1.courseId);
    expect(courseDetails[1]).to.eq(Course1.id);
    expect(courseDetails[2]).to.eq(Course1.dbId);
    expect(courseDetails[2 + 1]).to.eq(1);
    expect(courseDetails[3 + 1]).to.eq(Course1.price);
    expect(courseDetails[4 + 1]).to.eq(getSecondsOfDays(20));
    expect(courseDetails[5 + 1]).to.eq(Course1.recommendedDuration);
    expect(courseDetails[6 + 1]).to.lt(Date.now());
    expect(courseDetails[7 + 1]).to.eq(0);
    expect(courseDetails[8 + 1]).to.false;
    expect(courseDetails[9 + 1]).to.eq(signers[1].address);
    expect(courseDetails[10 + 1]).to.eq(ZERO_ADDRESS);

    const ownerNewBalance = await ethers.provider.getBalance(owner.address);
    const signerNewBalance = await ethers.provider.getBalance(
      signers[1].address
    );

    expect(signerNewBalance).to.lt(
      BigInt(signerOldBalance) - BigInt(Course1.price * 20)
    );
    expect(ownerNewBalance).to.eq(
      BigInt(ownerOldBalance) + BigInt(Course1.price * 20)
    );
  });

  it("Buy course from SwapSo and mint and put on sale after 10 days", async () => {
    const { course, market, signers, owner, ZERO_ADDRESS } = await loadFixture(
      runEveryTime
    );
    const NEW_PRICE = 38;
    const INITIAL_DURATION = 20;
    const PAUSE_TIME = 10;
    await market.connect(signers[1]).buyCourse(
      {
        courseId: Course1.courseId,
        details: {
          id: Course1.id,
          dbId: Course1.dbId,
          price: Course1.price,
          recommendedDuration: Course1.recommendedDuration,
        },
      },
      getSecondsOfDays(INITIAL_DURATION),
      { value: Course1.price * INITIAL_DURATION }
    );

    const courseData = await course.getUserCourse(signers[1].address);
    expect(courseData.length).to.eq(1);
    expect(courseData[0]).to.eq(Course1.courseId);
    await network.provider.send("evm_increaseTime", [
      getSecondsOfDays(PAUSE_TIME),
    ]);

    await market.connect(signers[1]).sellCourse(Course1.courseId, NEW_PRICE);

    const courseDetails = await course.getCourseDetails(Course1.courseId);

    expect(courseDetails[0]).to.eq(Course1.courseId);
    expect(courseDetails[1]).to.eq(Course1.id);
    expect(courseDetails[2]).to.eq(Course1.dbId);
    expect(courseDetails[2 + 1]).to.eq(1);
    expect(courseDetails[3 + 1]).to.eq(NEW_PRICE);
    expect(courseDetails[4 + 1]).to.eq(
      getSecondsOfDays(INITIAL_DURATION - PAUSE_TIME)
    );
    expect(courseDetails[5 + 1]).to.eq(Course1.recommendedDuration);
    expect(courseDetails[6 + 1]).to.lt(Date.now());
    expect(courseDetails[7 + 1]).to.lt(Date.now());
    expect(courseDetails[8 + 1]).to.true;
    expect(courseDetails[9 + 1]).to.eq(signers[1].address);
    expect(courseDetails[10 + 1]).to.eq(ZERO_ADDRESS);
  });

  it("Buy course from SwapSo and mint and put on sale after 10 days and other user buys it", async () => {
    const { course, market, signers, owner, ZERO_ADDRESS } = await loadFixture(
      runEveryTime
    );
    const NEW_PRICE = 38;
    const INITIAL_DURATION = 20;
    const PAUSE_TIME = 10;
    const SECOND_BUY_TIME = 5;
    await market.connect(signers[1]).buyCourse(
      {
        courseId: Course1.courseId,
        details: {
          id: Course1.id,
          dbId: Course1.dbId,
          price: Course1.price,
          recommendedDuration: Course1.recommendedDuration,
        },
      },
      getSecondsOfDays(INITIAL_DURATION),
      { value: Course1.price * INITIAL_DURATION }
    );

    const courseData = await course.getUserCourse(signers[1].address);
    expect(courseData.length).to.eq(1);
    expect(courseData[0]).to.eq(Course1.courseId);
    await network.provider.send("evm_increaseTime", [
      getSecondsOfDays(PAUSE_TIME),
    ]);

    await market.connect(signers[1]).sellCourse(Course1.courseId, NEW_PRICE);

    await network.provider.send("evm_increaseTime", [
      getSecondsOfDays(SECOND_BUY_TIME),
    ]);

    const royalty = await market.getRoyaltyPercentage();
    const ownerOldBalance = await ethers.provider.getBalance(owner.address);
    const signerOldBalance = await ethers.provider.getBalance(
      signers[1].address
    );
    const newSignerOldBalance = await ethers.provider.getBalance(
      signers[2].address
    );

    await market.connect(signers[2]).buyFromMarket(Course1.courseId, {
      value: (INITIAL_DURATION - PAUSE_TIME) * NEW_PRICE,
    });

    const courseDetails = await course.getCourseDetails(Course1.courseId);

    expect(courseDetails[0]).to.eq(Course1.courseId);
    expect(courseDetails[1]).to.eq(Course1.id);
    expect(courseDetails[2]).to.eq(Course1.dbId);
    expect(courseDetails[2 + 1]).to.eq(1);
    expect(courseDetails[3 + 1]).to.eq(NEW_PRICE);
    expect(courseDetails[4 + 1]).to.eq(
      getSecondsOfDays(INITIAL_DURATION - PAUSE_TIME)
    );
    expect(courseDetails[5 + 1]).to.eq(Course1.recommendedDuration);
    expect(courseDetails[6 + 1]).to.lt(Date.now());
    expect(courseDetails[7 + 1]).to.eq(0);
    expect(courseDetails[8 + 1]).to.false;
    expect(courseDetails[9 + 1]).to.eq(signers[1].address);
    expect(courseDetails[10 + 1]).to.eq(signers[2].address);

    const ownerNewBalance = await ethers.provider.getBalance(owner.address);
    const signerNewBalance = await ethers.provider.getBalance(
      signers[1].address
    );
    const newSignerNewBalance = await ethers.provider.getBalance(
      signers[2].address
    );

    expect(newSignerNewBalance).to.lt(
      BigInt(newSignerOldBalance) -
        BigInt(NEW_PRICE * (INITIAL_DURATION - PAUSE_TIME))
    );

    expect(signerNewBalance).to.eq(
      BigInt(signerOldBalance) +
        BigInt(
          (NEW_PRICE * (INITIAL_DURATION - PAUSE_TIME) * Number(royalty)) /
            10000
        )
    );
    expect(ownerNewBalance).to.eq(
      BigInt(ownerOldBalance) +
        BigInt(
          (NEW_PRICE *
            (INITIAL_DURATION - PAUSE_TIME) *
            (10000 - Number(royalty))) /
            10000
        )
    );
  });

  it("2 users Buy course from SwapSo and mint", async () => {
    const { course, market, signers, owner, ZERO_ADDRESS } = await loadFixture(
      runEveryTime
    );

    const ownerOldBalance = await ethers.provider.getBalance(owner.address);
    const signerOldBalance = await ethers.provider.getBalance(
      signers[1].address
    );

    await market.connect(signers[1]).buyCourse(
      {
        courseId: Course1.courseId,
        details: {
          id: Course1.id,
          dbId: Course1.dbId,
          price: Course1.price,
          recommendedDuration: Course1.recommendedDuration,
        },
      },
      getSecondsOfDays(20),
      { value: Course1.price * 20 }
    );

    const courseData = await course.getUserCourse(signers[1].address);
    expect(courseData.length).to.eq(1);
    expect(courseData[0]).to.eq(Course1.courseId);

    let nftOwnerBalance = await course.balanceOf(owner.address, Course1.id);

    expect(nftOwnerBalance).to.eq(1);

    const courseDetails = await course.getCourseDetails(Course1.courseId);

    expect(courseDetails[0]).to.eq(Course1.courseId);
    expect(courseDetails[1]).to.eq(Course1.id);
    expect(courseDetails[2]).to.eq(Course1.dbId);
    expect(courseDetails[2 + 1]).to.eq(1);
    expect(courseDetails[3 + 1]).to.eq(Course1.price);
    expect(courseDetails[4 + 1]).to.eq(getSecondsOfDays(20));
    expect(courseDetails[5 + 1]).to.eq(Course1.recommendedDuration);
    expect(courseDetails[6 + 1]).to.lt(Date.now());
    expect(courseDetails[7 + 1]).to.eq(0);
    expect(courseDetails[8 + 1]).to.false;
    expect(courseDetails[9 + 1]).to.eq(signers[1].address);
    expect(courseDetails[10 + 1]).to.eq(ZERO_ADDRESS);

    const ownerNewBalance = await ethers.provider.getBalance(owner.address);
    const signerNewBalance = await ethers.provider.getBalance(
      signers[1].address
    );

    expect(signerNewBalance).to.lt(
      BigInt(signerOldBalance) - BigInt(Course1.price * 20)
    );
    expect(ownerNewBalance).to.eq(
      BigInt(ownerOldBalance) + BigInt(Course1.price * 20)
    );

    // Same course buy from SwapSo

    const signer2OldBalance = await ethers.provider.getBalance(
      signers[2].address
    );

    await market.connect(signers[2]).buyCourse(
      {
        courseId: Course2.courseId,
        details: {
          id: Course1.id,
          dbId: Course1.dbId,
          price: Course1.price,
          recommendedDuration: Course1.recommendedDuration,
        },
      },
      getSecondsOfDays(20),
      { value: Course1.price * 20 }
    );

    const courseData2 = await course.getUserCourse(signers[2].address);
    expect(courseData2.length).to.eq(1);
    expect(courseData2[0]).to.eq(Course2.courseId);

    nftOwnerBalance = await course.balanceOf(owner.address, Course1.id);

    expect(nftOwnerBalance).to.eq(2);

    const courseDetails2 = await course.getCourseDetails(Course2.courseId);

    expect(courseDetails2[0]).to.eq(Course2.courseId);
    expect(courseDetails2[1]).to.eq(Course1.id);
    expect(courseDetails[2]).to.eq(Course1.dbId);
    expect(courseDetails2[2 + 1]).to.eq(2);
    expect(courseDetails2[3 + 1]).to.eq(Course1.price);
    expect(courseDetails2[4 + 1]).to.eq(getSecondsOfDays(20));
    expect(courseDetails2[5 + 1]).to.eq(Course1.recommendedDuration);
    expect(courseDetails2[6 + 1]).to.lt(Date.now());
    expect(courseDetails2[7 + 1]).to.eq(0);
    expect(courseDetails2[8 + 1]).to.false;
    expect(courseDetails2[9 + 1]).to.eq(signers[2].address);
    expect(courseDetails2[10 + 1]).to.eq(ZERO_ADDRESS);

    const ownerOtherNewBalance = await ethers.provider.getBalance(
      owner.address
    );
    const signer2NewBalance = await ethers.provider.getBalance(
      signers[2].address
    );

    expect(signer2NewBalance).to.lt(
      BigInt(signer2OldBalance) - BigInt(Course1.price * 20)
    );
    expect(ownerOtherNewBalance).to.eq(
      BigInt(ownerNewBalance) + BigInt(Course1.price * 20)
    );
  });

  it("2 users trying to re Buy same course from SwapSo and fail", async () => {
    const { course, market, signers, owner, ZERO_ADDRESS } = await loadFixture(
      runEveryTime
    );

    const ownerOldBalance = await ethers.provider.getBalance(owner.address);
    const signerOldBalance = await ethers.provider.getBalance(
      signers[1].address
    );

    await market.connect(signers[1]).buyCourse(
      {
        courseId: Course1.courseId,
        details: {
          id: Course1.id,
          dbId: Course1.dbId,
          price: Course1.price,
          recommendedDuration: Course1.recommendedDuration,
        },
      },
      getSecondsOfDays(20),
      { value: Course1.price * 20 }
    );

    const courseData = await course.getUserCourse(signers[1].address);
    expect(courseData.length).to.eq(1);
    expect(courseData[0]).to.eq(Course1.courseId);

    let nftOwnerBalance = await course.balanceOf(owner.address, Course1.id);

    expect(nftOwnerBalance).to.eq(1);

    const courseDetails = await course.getCourseDetails(Course1.courseId);

    expect(courseDetails[0]).to.eq(Course1.courseId);
    expect(courseDetails[1]).to.eq(Course1.id);
    expect(courseDetails[2]).to.eq(Course1.dbId);
    expect(courseDetails[2 + 1]).to.eq(1);
    expect(courseDetails[3 + 1]).to.eq(Course1.price);
    expect(courseDetails[4 + 1]).to.eq(getSecondsOfDays(20));
    expect(courseDetails[5 + 1]).to.eq(Course1.recommendedDuration);
    expect(courseDetails[6 + 1]).to.lt(Date.now());
    expect(courseDetails[7 + 1]).to.eq(0);
    expect(courseDetails[8 + 1]).to.false;
    expect(courseDetails[9 + 1]).to.eq(signers[1].address);
    expect(courseDetails[10 + 1]).to.eq(ZERO_ADDRESS);

    const ownerNewBalance = await ethers.provider.getBalance(owner.address);
    const signerNewBalance = await ethers.provider.getBalance(
      signers[1].address
    );

    expect(signerNewBalance).to.lt(
      BigInt(signerOldBalance) - BigInt(Course1.price * 20)
    );
    expect(ownerNewBalance).to.eq(
      BigInt(ownerOldBalance) + BigInt(Course1.price * 20)
    );

    // Same course buy from SwapSo
    await expect(
      market.connect(signers[2]).buyCourse(
        {
          courseId: Course1.courseId,
          details: {
            id: Course1.id,
            dbId: Course1.dbId,
            price: Course1.price,
            recommendedDuration: Course1.recommendedDuration,
          },
        },
        getSecondsOfDays(20),
        { value: Course1.price * 20 }
      )
    ).to.be.reverted;

    await expect(
      market.connect(signers[1]).buyCourse(
        {
          courseId: Course1.courseId,
          details: {
            id: Course1.id,
            dbId: Course1.dbId,
            price: Course1.price,
            recommendedDuration: Course1.recommendedDuration,
          },
        },
        getSecondsOfDays(20),
        { value: Course1.price * 20 }
      )
    ).to.be.reverted;
  });

  it("Buy course from SwapSo and mint and put on sale after 10 days and remove from sale after 5 days", async () => {
    const { course, market, signers, owner, ZERO_ADDRESS } = await loadFixture(
      runEveryTime
    );
    const NEW_PRICE = 38;
    const INITIAL_DURATION = 20;
    const PAUSE_TIME = 10;
    const REMOVE_SALE_TIME = 5;
    await market.connect(signers[1]).buyCourse(
      {
        courseId: Course1.courseId,
        details: {
          id: Course1.id,
          dbId: Course1.dbId,
          price: Course1.price,
          recommendedDuration: Course1.recommendedDuration,
        },
      },
      getSecondsOfDays(INITIAL_DURATION),
      { value: Course1.price * INITIAL_DURATION }
    );

    const courseData = await course.getUserCourse(signers[1].address);
    expect(courseData.length).to.eq(1);
    expect(courseData[0]).to.eq(Course1.courseId);
    await network.provider.send("evm_increaseTime", [
      getSecondsOfDays(PAUSE_TIME),
    ]);

    await market.connect(signers[1]).sellCourse(Course1.courseId, NEW_PRICE);

    await network.provider.send("evm_increaseTime", [
      getSecondsOfDays(REMOVE_SALE_TIME),
    ]);

    await market.connect(signers[1]).removeFromMarket(Course1.courseId);

    const royalty = await market.getRoyaltyPercentage();
    const ownerOldBalance = await ethers.provider.getBalance(owner.address);
    const signerOldBalance = await ethers.provider.getBalance(
      signers[1].address
    );

    const courseDetails = await course.getCourseDetails(Course1.courseId);

    expect(courseDetails[0]).to.eq(Course1.courseId);
    expect(courseDetails[1]).to.eq(Course1.id);
    expect(courseDetails[2]).to.eq(Course1.dbId);
    expect(courseDetails[2 + 1]).to.eq(1);
    expect(courseDetails[3 + 1]).to.eq(NEW_PRICE);
    expect(courseDetails[4 + 1]).to.eq(
      getSecondsOfDays(INITIAL_DURATION - PAUSE_TIME)
    );
    expect(courseDetails[5 + 1]).to.eq(Course1.recommendedDuration);
    expect(courseDetails[6 + 1]).to.lt(Date.now());
    expect(courseDetails[7 + 1]).to.eq(0);
    expect(courseDetails[8 + 1]).to.false;
    expect(courseDetails[9 + 1]).to.eq(signers[1].address);
    expect(courseDetails[10 + 1]).to.eq(ZERO_ADDRESS);
  });
});
