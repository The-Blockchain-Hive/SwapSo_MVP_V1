"use client";

import { polygon, polygonMumbai, arbitrum, localhost } from "wagmi/chains";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig } from "wagmi";
const { chains, publicClient } = configureChains(
  // [polygon, arbitrum, polygonMumbai, localhost, { id: 31337, ...localhost }],
  [
    {
      id: 3_1337,
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
  ],
  [
    jsonRpcProvider({
      rpc: (chainId) => {
        if (chainId.id == 31337) {
          //   return {
          //     http: "https://polygon-mainnet.g.alchemy.com/v2/ZLSEk8HyDPO8GF7NmrIZpRxxxKAY1zgr",
          //     webSocket:
          //       "wss://polygon-mainnet.g.alchemy.com/v2/ZLSEk8HyDPO8GF7NmrIZpRxxxKAY1zgr",
          //   };
          // } else if (chainId.id == 42161) {
          //   return {
          //     http: "https://arb-mainnet.g.alchemy.com/v2/eCm1C8c0ke-nbr-n7sZ9S_UUovDTlTV6",
          //     webSocket:
          //       "wss://arb-mainnet.g.alchemy.com/v2/eCm1C8c0ke-nbr-n7sZ9S_UUovDTlTV6",
          //   };
          // } else if (chainId.id == 80001) {
          //   return {
          //     http: "https://polygon-mumbai.g.alchemy.com/v2/EaKu789oxhWzYFvzEzOPAkCqIl2CwKj5",
          //     webSocket:
          //       "wss://polygon-mumbai.g.alchemy.com/v2/EaKu789oxhWzYFvzEzOPAkCqIl2CwKj5",
          //   };
          // } else if (chainId.id == 31337 ||chainId.id == 1337) {
          return {
            http: "http://127.0.0.1:8545/",
            // webSocket:
            //   "wss://polygon-mumbai.g.alchemy.com/v2/EaKu789oxhWzYFvzEzOPAkCqIl2CwKj5",
          };
        }
      },
    }),
  ]
);

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
