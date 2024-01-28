"use client"
import React, { useState, useEffect , useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "./navbar.css";
import { ConnectButton } from '@rainbow-me/rainbowkit'

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


  return (
    <>
      
      <nav id="navbar1" className="sticky mx-auto" ref={navbarRef}>
          <Image className="logo1" src="/newlogo.svg" alt="logo" width={150} height={100} />
        <ul className="nav-links">
          <li className="nav-list">
            <a href="/">Home</a>
          </li>
          <li className="nav-list">
            <Link href='/Courses'>Courses</Link>
          </li>
          <li className="nav-list">
            <Link href="/Marketplace">Market Place</Link>
          </li>
        </ul>
        {/* <div>
         <Link href="/"><button>Sign In</button></Link>
        </div> */}
        <div>
          <div className="dropdown">
            <ConnectButton />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
