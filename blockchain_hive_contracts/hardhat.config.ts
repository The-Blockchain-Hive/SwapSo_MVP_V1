// import { HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";
// import "@nomicfoundation/hardhat-ethers";
// import "solidity-docgen";
// require("dotenv").config();
// const {
//   PRIVATE_KEY,
//   POLYGON_API_KEY,

// } = process.env;
// const config: HardhatUserConfig = {
//   defaultNetwork: "localhost",
//   networks: {
//     localhost: {
//       url: " http://127.0.0.1:8545/",
//     },
//     hardhat: {},
//     mumbai: {
//       url: "https://rpc-mumbai.maticvigil.com",
//       accounts: [PRIVATE_KEY],
//     },
//     matic: {
//       url: "https://rpc-mainnet.maticvigil.com",
//       accounts: [PRIVATE_KEY],
//     },
//   },
//   etherscan: {
//     apiKey: {
//       polygonMumbai: POLYGON_API_KEY,
//       polygon: POLYGON_API_KEY,
//     },
//   },
//   gasReporter: { enabled: true },
//   solidity: {
//     compilers: [
//       {
//         version: "0.8.16",
//       },
//       {
//         version: "0.8.16",
//       },
//     ],
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//       evmVersion: "berlin",
//     },
//   },
//   docgen: {
//     output: "docs",
//     pages: () => "api.md",
//   },
//   paths: {
//     sources: "./contracts",
//     tests: "./test",
//     cache: "./cache",
//     artifacts: "./artifacts",
//   },
// };

// export default config;

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-ethers";
import "solidity-docgen";
require("dotenv").config();

const {
  PRIVATE_KEY,
  POLYGON_API_KEY,
} = process.env;

// Define the etherscan property with the correct structure
const etherscan = {
  apiKey: {
    polygonMumbai: POLYGON_API_KEY || '',
    polygon: POLYGON_API_KEY || '',
  },
};

// Define your custom HardhatUserConfig interface
interface CustomHardhatUserConfig extends HardhatUserConfig {
  etherscan?: any; // Define etherscan as a custom property
  gasReporter?: {
    enabled: boolean;
  }; // Define gasReporter as a custom property
  docgen?: {
    output: string;
    pages: () => string;
  };
}

const config: CustomHardhatUserConfig = {
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
    },
    hardhat: {},
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [PRIVATE_KEY || '0x33ed347ec39864cc65576d3ed8eafc96dd4d8f8e3f122f32e2f9d74e5aaab19f'], // Provide a default value for PRIVATE_KEY if it is undefined
    },
    matic: {
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [PRIVATE_KEY || '0x33ed347ec39864cc65576d3ed8eafc96dd4d8f8e3f122f32e2f9d74e5aaab19f'], // Provide a default value for PRIVATE_KEY if it is undefined
    },
  },
  etherscan, // Assign etherscan to your config
  gasReporter: { enabled: true }, // Define the gasReporter property
  solidity: {
    compilers: [
      {
        version: "0.8.16",
      },
      {
        version: "0.8.16",
      },
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "berlin",
    },
  },
  docgen: {
    output: "docs",
    pages: () => "api.md",
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};

export default config;

