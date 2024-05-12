"use client";

import { polygon, arbitrum, localhost } from "wagmi/chains";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { Chain, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig } from "wagmi";

function getRpc(chain: Chain) {
  if (chain.id == 137) {
    return {
      http: "https://polygon-mainnet.g.alchemy.com/v2/ZLSEk8HyDPO8GF7NmrIZpRxxxKAY1zgr",
      webSocket:
        "wss://polygon-mainnet.g.alchemy.com/v2/ZLSEk8HyDPO8GF7NmrIZpRxxxKAY1zgr",
    };
  } else if (chain.id == 42161) {
    return {
      http: "https://arb-mainnet.g.alchemy.com/v2/eCm1C8c0ke-nbr-n7sZ9S_UUovDTlTV6",
      webSocket:
        "wss://arb-mainnet.g.alchemy.com/v2/eCm1C8c0ke-nbr-n7sZ9S_UUovDTlTV6",
    };
  } else if (chain.id == 80002) {
    return {
      http: "https://polygon-amoy.g.alchemy.com/v2/EaKu789oxhWzYFvzEzOPAkCqIl2CwKj5",
      webSocket:
        "wss://polygon-amoy.g.alchemy.com/v2/EaKu789oxhWzYFvzEzOPAkCqIl2CwKj5",
    };
  } else if (chain.id == 31337 || chain.id == 1337) {
    return {
      http: "http://127.0.0.1:8545/",
    };
  }
  return null;
}

const productionChains = [polygon, arbitrum];
const devChains = [
  {
    id: 80002,
    name: "Polygon Amoy",
    network: "amoy",
    nativeCurrency: {
      decimals: 18,
      name: "MATIC",
      symbol: "MATIC",
    },
    rpcUrls: {
      default: { http: ["https://rpc-amoy.polygon.technology/"] },
      public: { http: ["https://rpc-amoy.polygon.technology/"] },
    },
  },
  localhost,
  {
    id: 31337,
    name: "Localhost",
    network: "localhost",
    nativeCurrency: {
      decimals: 18,
      name: "Ether",
      symbol: "ETH",
    },
    rpcUrls: {
      default: { http: ["http://127.0.0.1:8545"] },
      public: { http: ["http://127.0.0.1:8545"] },
    },
  },
];

let chains: any;
let publicClient;

if (process.env.ENV === "production") {
  const config = configureChains(productionChains, [
    jsonRpcProvider({
      rpc: (chainId) => getRpc(chainId),
    }),
  ]);
  chains = config.chains;
  publicClient = config.publicClient;
} else {
  const config = configureChains(devChains, [
    jsonRpcProvider({
      rpc: (chainId) => getRpc(chainId),
    }),
  ]);
  chains = config.chains;
  publicClient = config.publicClient;
}

const { connectors } = getDefaultWallets({
  appName: "Everything Gas Less",
  projectId: "87106bd465234d097b8a51ba585bf799",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export { wagmiConfig, chains };
