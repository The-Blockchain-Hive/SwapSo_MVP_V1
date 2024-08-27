import * as React from "react";
import { type WalletClient, useWalletClient } from "wagmi";
import { JsonRpcProvider } from "ethers";

// Function to convert a viem Wallet Client to an ethers.js Signer
export function walletClientToSigner(walletClient: WalletClient) {
  const { account, chain, transport } = walletClient;

  // Create JsonRpcProvider instance from transport URL
  const provider = new JsonRpcProvider(transport.url, Number(chain.id)); // Use chainId as number

  // Obtain a Signer from the provider
  const signer = provider.getSigner(account.address);
  
  return signer;
}

/** Hook to convert a viem Wallet Client to an ethers.js Signer. */
export function useEthersSigner({ chainId }: { chainId?: number } = {}) {
  const { data: walletClient } = useWalletClient({ chainId });

  return React.useMemo(
    () => (walletClient ? walletClientToSigner(walletClient) : undefined),
    [walletClient]
  );
}
