// https://eth-goerli.g.alchemy.com/v2/iNg-U4gyegAQyKtw4Gy08nqBehsiUhwP

require("@nomiclabs/hardhat-waffle");

// require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/iNg-U4gyegAQyKtw4Gy08nqBehsiUhwP",
      account: [
        "0a30b52464b16aff364172889583b9be97ecb293014fcde810cb125066c16b2f"
      ]
    }
  }
};
