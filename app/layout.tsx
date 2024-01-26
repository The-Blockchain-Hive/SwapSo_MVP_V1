"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WagmiConfig } from "wagmi";

import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { wagmiConfig, chains } from "./utils/wallet-utils";
import DataContextProvider from "./context/DataContextProvider";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
    
           <DataContextProvider>{children} </DataContextProvider> 
     
      </RainbowKitProvider>
    </WagmiConfig>
      </body>
    </html>
  );
}
