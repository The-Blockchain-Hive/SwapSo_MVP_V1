import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Next.js Link
import './MobileNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useWeb3Modal } from '@web3modal/wagmi/react'

library.add(faBars, faTimes);

function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

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
    <nav className="mobile__navbar">
      <div className='mobile__inner__navbar'>
        <div className="left_navbar">
          <Image className="logo1" src="/official_logo.png" width={100} height={100} />
        </div>
        <div className='right_navbar'>
          <button className='navbar__icon' onClick={handleMenuToggle}>
            <FontAwesomeIcon icon={'bars'} size="2x" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className='mobile__navbar__menu'>
          <button className='close__icon' onClick={handleMenuClose}>
            <FontAwesomeIcon icon={'times'} size="2x" />
          </button>
          <ul className="inner__mobile__navbar__menu no-bullet">
            <li><Link onClick={handleMenuClose} href="/">Home</Link></li>
            <li><Link onClick={handleMenuClose} href="/Courses">Courses</Link></li>
            <li><Link onClick={handleMenuClose} href="/MarketPlace">Market Place</Link></li>
          </ul>
          <div>
          <div className="dropdown">
          <w3m-button />
          </div>
        </div>
        </div>
      )}
    </nav>
  );
}

export default MobileNavbar;
