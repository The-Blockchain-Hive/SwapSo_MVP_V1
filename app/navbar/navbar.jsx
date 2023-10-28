"use client"
import React, { useState, useEffect } from "react"; 
import { ethers } from "ethers";
import Image from "next/image";
import "./navbar.css";

const checkIfWalletIsConnected = async () => {
  try {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have MetaMask!");
      return;
    }

    console.log("We have the ethereum object", ethereum);

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  } catch (error) {
    console.log(error);
  }
};

const connectWallet = async () => {
  try {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Get MetaMask!");
      return;
    }

    const accounts = await ethereum.request({ 
      method: "eth_requestAccounts",
    });

    console.log("Connected", accounts[0]);
    setCurrentAccount(accounts[0]);
  } catch (error) {
    console.log(error);
  }
};
// const provider = new ethers.providers.Web3Provider(window.ethereum);
const disconnectWallet = async () => {
  try {
    // Null account triggers disconnect
    await provider.send("eth_requestAccounts", []); 
    setCurrentAccount(null);
  } catch (error) {
    console.log(error);
  }
}
const Navbar = () => {
  const [currentAccount, setCurrentAccount] = useState("");

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <nav className="navbar1">
      <div>
        <Image src="/logo.png" width={100} height={100} />
      </div>

      <ul className="nav-links">
        <li className="nav-list">Home</li>
        <li className="nav-list dropdown">
          Courses
          <div className="dropdown-content">
            <a className="d1" href="#">
              Short Content
            </a>
            <a className="d2" href="#">
              Long Content
            </a>
          </div>
        </li>
        <li className="nav-list dropdown">
          Marketplace
          <div className="dropdown-content">
            <a className="d1" href="#">
              Short Content
            </a>
            <a className="d2" href="#">
              Long Content
            </a>
          </div>
        </li>
      </ul>

      <div>
      <button onClick={connectWallet}>
        {currentAccount ? (
          <span>Connected: {currentAccount.slice(0,6)}...</span>  
        ) : (  
          <span>Connect Wallet</span>
        )}
      </button>
      
      <button onClick={disconnectWallet}>
    
      </button>
      </div>
    </nav>
  );
};

export default Navbar;