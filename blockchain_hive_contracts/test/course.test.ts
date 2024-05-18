import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect, assert, use } from "chai";
import { ethers, upgrades } from "hardhat";

import { courseDetailsObject } from "./utils";

describe("Course", () => {
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

    return {
      owner,
      signers,
      ZERO_ADDRESS,
      course,
    };
  }

  describe("Deployment", async () => {
    it("[Deployment] : Should Deploy the Course Contract", async () => {
      const { course } = await loadFixture(runEveryTime);
      expect(await course.getAddress()).to.not.null;
    });

    it("[Deployment] : Should Deploy the Course Contract with correct Owner", async () => {
      const { course, owner } = await loadFixture(runEveryTime);
      expect(await course.owner()).equals(owner.address);
    });
  });

  describe("Function", async () => {
    it("Should fail to allow NFT transfer.", async () => {
      const { course } = await loadFixture(runEveryTime);
      await expect(course.setAllowTransfer(111)).to.be.reverted;
    });

    it("Should fail to safeTransferFrom.", async () => {
      const { course, owner, signers } = await loadFixture(runEveryTime);
      await expect(
        course.safeTransferFrom(owner.address, signers[1].address, 1, 1, "0x00")
      ).to.be.reverted;
    });

    it("Should fail to setCourseDetails.", async () => {
      const { course, owner, signers } = await loadFixture(runEveryTime);
      await expect(
        course.setCourseDetails(
          "0x01",
          courseDetailsObject(
            "0x01",
            1,
            "",
            1,
            1,
            1,
            1,
            1,
            1,
            false,
            signers[1].address,
            signers[2].address
          )
        )
      ).to.be.reverted;
    });

    it("Should get getUserCourse.", async () => {
      const { course, owner } = await loadFixture(runEveryTime);
      const data = await course.getUserCourse(owner);
      expect(data.length).to.eq(0);
    });

    it("Should get courseDetails.", async () => {
      const { course } = await loadFixture(runEveryTime);
      const data = await course.getCourseDetails("0x02");
      expect(data.id).to.eq(0);
    });

    it("Should set correct MarketContract address", async () => {
      const { course, signers } = await loadFixture(runEveryTime);
      await course.setMarketplaceContract(signers[6].address);
      const marketAddress = await course.Marketplace();
      expect(marketAddress).to.eq(signers[6].address);
    });
  });
});
