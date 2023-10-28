import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar1">
        <div>
            <img src="./logo.png" alt='logo' />
        </div>
      <ul className="nav-links">
        <li className="nav-list">Home</li>
        <li className="nav-list dropdown">
          Courses
          <div className="dropdown-content">
            <a href="#">Short Content</a>
            <a href="#">Long Content</a>
          </div>
        </li>
        <li className="nav-list dropdown">
          Marketplace
          <div className="dropdown-content">
            <a href="#">Short Content</a>
            <a href="#">Long Content</a>
          </div>
        </li>
      </ul>
      <button className="sign-in">Sign In / Sign Up</button>
    </nav>
  );
}

export default Navbar;