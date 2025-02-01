import { ethers } from "hardhat";

async function main() {
  const EnvironmentalImpact = await ethers.getContractFactory("EnvironmentalImpact");
  const environmentalImpact = await EnvironmentalImpact.deploy();
  await environmentalImpact.waitForDeployment();
  console.log("EnvironmentalImpact deployed to:", await environmentalImpact.getAddress());

  const SustainabilityToken = await ethers.getContractFactory("SustainabilityToken");
  const sustainabilityToken = await SustainabilityToken.deploy();
  await sustainabilityToken.waitForDeployment();
  console.log("SustainabilityToken deployed to:", await sustainabilityToken.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});