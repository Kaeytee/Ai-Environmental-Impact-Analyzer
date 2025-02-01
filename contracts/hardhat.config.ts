// import { HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";
// import * as dotenv from "dotenv";

// dotenv.config();

// const config: HardhatUserConfig = {
//   solidity: "0.8.20",
//   networks: {
//     matic: {
//       url: process.env.POLYGON_RPC_URL || "http://127.0.0.1:8545",
//       accounts: [process.env.PRIVATE_KEY || ""],
//     },
//   },
//   etherscan: {
//     apiKey: process.env.POLYGONSCAN_API_KEY,
//   },
// };

// export default config;
import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "dotenv/config";
import "@nomiclabs/hardhat-etherscan";

interface ExtendedHardhatUserConfig extends HardhatUserConfig {
  etherscan?: {
    apiKey: string;
  };
}

const config: ExtendedHardhatUserConfig = {
  solidity: "0.8.20",
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  networks: {
    matic: {
      url: process.env.POLYGON_RPC_URL || "https://polygon-rpc.com",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    localhost: {
      url: "http://127.0.0.1:8546",
      // Hardhat provides default accounts with pre-funded ETH for local testing
    },
    localhost_alt: {
      url: "http://127.0.0.1:8547",
      // Hardhat provides default accounts with pre-funded ETH for local testing
    },
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY || "",
  },
};

export default config;