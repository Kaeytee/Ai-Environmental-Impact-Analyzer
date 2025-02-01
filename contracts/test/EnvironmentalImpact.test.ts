import { expect } from "chai";
import { ethers } from "hardhat";

describe("EnvironmentalImpact", () => {
  let contract: any;

  async function deployContract() {
    const EnvironmentalImpactFactory = await ethers.getContractFactory("EnvironmentalImpact");
    contract = await EnvironmentalImpactFactory.deploy();
    return { contract };
  }

  it("should store and retrieve a report", async () => {
    const { contract } = await deployContract();
    await contract.storeReport("product123", 85, "QmXYZ");
    const report = await contract.getReport("product123");
    expect(report.score).to.equal(85);
  });
});
