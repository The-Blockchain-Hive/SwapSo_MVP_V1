import { HardhatUserConfig } from "hardhat/config";
import "@openzeppelin/hardhat-upgrades";
import "@nomicfoundation/hardhat-toolbox";
import "solidity-docgen";
import "hardhat-deploy";
require("dotenv").config();

const { PRIVATE_KEY, POLYGON_API_KEY } = process.env;

// Define the etherscan property with the correct structure
const etherscan = {
  apiKey: {
    polygonMumbai: POLYGON_API_KEY || "",
    polygon: POLYGON_API_KEY || "",
  },
};

// Define your custom HardhatUserConfig interface
interface CustomHardhatUserConfig extends HardhatUserConfig {
  etherscan?: any;
  gasReporter?: {
    enabled: boolean;
  };
  docgen?: {
    output: string;
    pages: () => string;
  };
  namedAccounts?: {
    [name: string]: {
      [networkName: string]: number | string;
    };
  };
}

const config: CustomHardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
    },
    hardhat: {},
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [
        PRIVATE_KEY ||
          "0x33ed347ec39864cc65576d3ed8eafc96dd4d8f8e3f122f32e2f9d74e5aaab19f",
      ],
    },
    amoy: {
      url: "https://rpc-amoy.polygon.technology/",
      accounts: [
        PRIVATE_KEY ||
          "0x33ed347ec39864cc65576d3ed8eafc96dd4d8f8e3f122f32e2f9d74e5aaab19f",
      ],
    },
    openCampus: {
      url: "https://rpc.open-campus-codex.gelato.digital/",
      accounts: [
        PRIVATE_KEY ||
          "0x33ed347ec39864cc65576d3ed8eafc96dd4d8f8e3f122f32e2f9d74e5aaab19f",
      ],
    },
  },
  etherscan,
  gasReporter: { enabled: true },
  solidity: {
    compilers: [
      {
        version: "0.8.20",
      },
      {
        version: "0.8.25",
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
  namedAccounts: {
    deployer: {
      default: 0,
      hardhat: 0,
      localhost: 0,
      mumbai: 0,
      amoy: 0,
      openCampus: 0,
    },
  },
};

export default config;

//0x494b6aac3227d2a0ad647543a5f24e6d79551a5b course deployed address
//0x5a33708821be54536ac1379651494306b775e209 market deployed address