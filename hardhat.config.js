require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");

dotenv.config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  networks: {
    localhost: {
      chainId: 31337,
      url: process.env.REACT_APP_MAINNET_RPC_URL || "http://127.0.0.1:8545/",
      accounts: ["0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"]
    },
  },
  etherscan: {
    apiKey: "JQRW7XX9ZCA28RHTK9KJ47B4AC3M6BTX4P",
  },
  customChains: [
    {
      network: "hardhat",
      chainId: 31337,
      urls: {
        apiURL: "http://127.0.0.1:8545/",
        browserURL: "http://127.0.0.1:8545/"
      }
    }
  ]
};

