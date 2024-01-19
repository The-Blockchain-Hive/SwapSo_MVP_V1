"use client"
import React, { useState, useEffect , useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "./navbar.css";
import { useWeb3Modal } from '@web3modal/wagmi/react'

const Navbar = () => {
  const navbarRef = useRef(null);
  let lastScrollTop = 0;
  const delta = 5;
  const { open } = useWeb3Modal()
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
          <Image className="logo1" src="/official_logo.png" width={100} height={100} />
        <ul className="nav-links">
          <li className="nav-list">
            <a href="/">Home</a>
          </li>
          <li className="nav-list">
            <Link href='/courses'>Courses</Link>
          </li>
          <li className="nav-list">
            <Link href="/marketplace">Market Place</Link>
          </li>
        </ul>

        <div>
          <div className="dropdown">
          <w3m-button />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
