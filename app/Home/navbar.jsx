"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./navbar.css";

const Navbar = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setCurrentAccount(accounts[0]);
      setIsDropdownOpen(true); // Open the dropdown once connected
    } catch (error) {
      console.log(error);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const copyAddressToClipboard = () => {
    // Logic to copy user's address to clipboard
    // Example: navigator.clipboard.writeText(currentAccount);
  };

  const handleSettingsClick = () => {
    // Handle settings action
  };

  const handleLogoutClick = () => {
    // Handle logout action
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <>
      <nav id="navbar1" className="sticky">
        <div>
          <Image className="logo" src="/logo.png" width={100} height={100} />
        </div>
        <ul className="nav-links">
          <li className="nav-list">
            <a href="#">Home</a>
          </li>
          <li className="nav-list">
            <a href="#">Market Place</a>
          </li>
          <li className="nav-list">
            <a href="#">Courses</a>
          </li>
        </ul>

        <div>
          <div className="dropdown">
            <button className="wallet" onClick={currentAccount ? toggleDropdown : connectWallet}>
              {currentAccount ? (
                <span>{currentAccount.slice(0, 8)}...</span>
              ) : (
                <span>Connect Wallet</span>
              )}
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" onClick={copyAddressToClipboard}>
                    Copy Address
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={handleSettingsClick}>
                    Settings
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={handleLogoutClick}>
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
