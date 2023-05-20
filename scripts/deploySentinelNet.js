const hre = require("hardhat");

async function main() {
    const SentinelNet = await hre.ethers.getContractFactory("SentinelNet");
    const sentinelNet = await SentinelNet.deploy();

    await sentinelNet.deployed();

    console.log("SentinelNet deployed to:", sentinelNet.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

    