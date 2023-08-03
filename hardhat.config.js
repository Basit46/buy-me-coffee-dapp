require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.19",
  networks: {
    goerli: {
      url: process.env.INFURA_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

//0x0091376d941f0AF2eee3c7b51fc1443AAa6796f4
