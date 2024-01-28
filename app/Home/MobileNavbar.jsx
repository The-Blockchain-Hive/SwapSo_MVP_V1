import React, { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import Link from 'next/link';
import './MobileNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faTimes);

function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };


  return (
    <nav className="mobile__navbar">
      <div className='mobile__inner__navbar'>
        <div className="left_navbar">
          <Image className="logo1" src="/newlogo.svg" alt='logo1' width={100} height={100} />
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
            <li><Link onClick={handleMenuClose} href="/Marketplace">Market Place</Link></li>
            {/* <li><Link onClick={handleMenuClose} href="/">Sign In</Link></li> */}
          </ul>
          <div>
          <div className="dropdown">
            <ConnectButton />
          </div>
        </div>
        </div>
      )}
    </nav>
  );
}

export default MobileNavbar;
