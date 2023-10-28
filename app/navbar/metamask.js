"use client"
import { useEffect } from 'react';

async function authenticateWithMetaMask(isSignIn) {
  try {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
      // Request MetaMask access and enable it
      await window.ethereum.send('eth_requestAccounts');
    
      // Get the user's Ethereum address
      const accounts = await window.ethereum.send('eth_accounts');
      const userAddress = accounts.result[0];
    
      // You can now use the user's Ethereum address for authentication
      // For example, you can send this address to your server for verification.
    
      // Here, we'll just display the address for demonstration purposes.
      const action = isSignIn ? 'Signed In' : 'Signed Up';
      alert(`User ${action} with Ethereum address: ${userAddress}`);
    } else {
      // MetaMask is not installed
      alert('MetaMask is not installed. Please install MetaMask to use this feature.');
    }
  } catch (error) {
    // Handle any errors (e.g., user denied access or MetaMask not installed)
    console.error(error);
    alert('MetaMask authentication failed. Please make sure you have MetaMask installed and are logged in.');
  }
}

export default function MetaMaskAuthButton() {
  useEffect(() => {
    // Attach the MetaMask authentication function to both button click events
    const signInButton = document.getElementById('authButton1');
    const signUpButton = document.getElementById('authButton2');
    
    if (signInButton && signUpButton) {
      signInButton.addEventListener('click', () => authenticateWithMetaMask(true));
      signUpButton.addEventListener('click', () => authenticateWithMetaMask(false));

      // Cleanup the event listeners when the component unmounts
      return () => {
        signInButton.removeEventListener('click', () => authenticateWithMetaMask(true));
        signUpButton.removeEventListener('click', () => authenticateWithMetaMask(false));
      };
    }
  }, []);

  return null; // This component doesn't render anything
}
{/* <button onClick={disconnectWallet}>
Disconnect
</button> */}