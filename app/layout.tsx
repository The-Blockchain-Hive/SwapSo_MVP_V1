"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { WagmiConfig } from "wagmi";
import { AuthContextProvider } from "./context/AuthContext";
import "@rainbow-me/rainbowkit/styles.css";
import { ErrorProvider } from './components/errorContext';
import NotificationBar from "./components/notificationBar";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { wagmiConfig, chains } from "./utils/wallet-utils";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics />

        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains}>
            <AuthContextProvider>
              <ErrorProvider>
                <NotificationBar />
                <div>{children}</div>
              </ErrorProvider>
            </AuthContextProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
