const hre = require("hardhat");

async function main() {
  const buymecoffee = await hre.ethers.deployContract("Buymecoffee");

  await buymecoffee.waitForDeployment();

  console.log(`Deployed to ${buymecoffee.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
