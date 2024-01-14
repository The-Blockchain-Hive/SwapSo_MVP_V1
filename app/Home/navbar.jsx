"use client"
import React, { useState, useEffect , useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "./navbar.css";

const Navbar = () => {
  const navbarRef = useRef(null);
  let lastScrollTop = 0;
  const delta = 5;

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return;

      const currentScroll = window.scrollY || 0;
      const navbar = navbarRef.current;

      if (!navbar) return;

      if (Math.abs(lastScrollTop - currentScroll) <= delta) return;

      if (currentScroll > lastScrollTop && currentScroll > navbar.offsetHeight) {
        navbar.style.transform = 'translateY(-100%)';
      } else {
        navbar.style.transform = 'translateY(0)';
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener('scroll', handleScroll);

    const navbar = navbarRef.current;
    if (navbar) {
      navbar.style.transition = 'transform 0.3s ease';
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const [currentAccount, setCurrentAccount] = useState("");
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const checkIfWalletIsConnected = async () => {
  //   try {
  //     const { ethereum } = window;

  //     if (!ethereum) {
  //       console.log("Make sure you have MetaMask!");
  //       return;
  //     }

  //     console.log("We have the ethereum object", ethereum);

  //     const accounts = await ethereum.request({ method: "eth_accounts" });

  //     if (accounts.length !== 0) {
  //       const account = accounts[0];
  //       console.log("Found an authorized account:", account);
  //       setCurrentAccount(account);
  //     } else {
  //       console.log("No authorized account found");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const connectWallet = async () => {
  //   try {
  //     const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
  //     setCurrentAccount(accounts[0]);
  //     setIsDropdownOpen(true); // Open the dropdown once connected
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const toggleDropdown = () => {
  //   setIsDropdownOpen((prevState) => !prevState);
  // };

  // const copyAddressToClipboard = () => {
  //   // Logic to copy user's address to clipboard
  //   // Example: navigator.clipboard.writeText(currentAccount);
  // };

  // const handleSettingsClick = () => {
  //   // Handle settings action
  // };

  // const handleLogoutClick = () => {
  //   // Handle logout action
  // };

  // useEffect(() => {
  //   checkIfWalletIsConnected();
  // }, []);

  return (
    <>
      
      <nav id="navbar1" className="sticky mx-auto" ref={navbarRef}>
          <Image className="logo1" src="/official_logo.png" width={100} height={100} />
        <ul className="nav-links">
          <li className="nav-list">
            <a href="/">Home</a>
          </li>
          <li className="nav-list">
            <Link href='/Courses'>Courses</Link>
          </li>
          <li className="nav-list">
            <Link href="/MarketPlace">Market Place</Link>
          </li>
        </ul>

        <div>
          <div className="dropdown">
             <button className="wallet" >
             <span>Connect Wallet</span>{/*onClick={currentAccount ? toggleDropdown : connectWallet}>
              {currentAccount ? (
                <span>{currentAccount.slice(0, 8)}...</span>
              ) : (
                //span
              )} */}
            </button>
            {/* {isDropdownOpen && (
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
            )} */}
          </div>
        </div>
      </nav>
      
      
      {/* <div className=" w-screen h-28 border-b-[1px] border-gray-500 text-white">
        <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between"> 
          <Image className=" justify-self-start" src="/logo.png" width={100} height={100}></Image>
          <div className="justify-self-center">
            <ul className="flex justify-self-center p-10">            
              <li className="px-10 hover:text-[#0177B7] hover:ease-in-out duration-300 cursor-pointer text-xl"><a href="/">Market Place</a></li>
              <li className="px-10 hover:text-[#0177B7] hover:ease-in-out duration-300 cursor-pointer text-xl"><a href="/">Home</a></li>
              <li className="px-10 hover:text-[#0177B7] hover:ease-in-out duration-300 cursor-pointer text-xl"><a href="/">Courses</a></li>
            </ul>
          </div>
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
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
