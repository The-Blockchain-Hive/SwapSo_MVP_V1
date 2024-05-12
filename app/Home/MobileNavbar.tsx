import React, { useState, useEffect, useRef } from "react";
import { UserAuth } from "../context/AuthContext";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import Link from "next/link";
import "./MobileNavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faTimes);

function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const navbarRef = useRef(null);
  const { user, LogOut } = UserAuth();
  // let lastScrollTop = 0;
  const delta = 5;

  const handleSignOut = async () => {
    try {
      await LogOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;

      const currentScroll = window.scrollY || 0;
      const navbar: any = navbarRef.current;

      if (!navbar) return;

      if (Math.abs(lastScrollTop - currentScroll) <= delta) return;

      if (
        currentScroll > lastScrollTop &&
        currentScroll > navbar.offsetHeight
      ) {
        navbar.style.transform = "translateY(-100%)";
      } else {
        navbar.style.transform = "translateY(0)";
      }

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    const navbar: any = navbarRef.current;
    if (navbar) {
      navbar.style.transition = "transform 0.3s ease";
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <nav className="mobile__navbar">
      <div className="mobile__inner__navbar">
        <div className="left_navbar">
          <Image
            className="logo1"
            src="/newlogo.svg"
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className="right_navbar">
          <button className="navbar__icon" onClick={handleMenuToggle}>
            <FontAwesomeIcon icon={"bars"} size="2x" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="mobile__navbar__menu">
          <button className="close__icon" onClick={handleMenuClose}>
            <FontAwesomeIcon icon={"times"} size="2x" />
          </button>
          <ul className="inner__mobile__navbar__menu no-bullet">
            <li className="p-1">
              <Link onClick={handleMenuClose} href="/">
                Home
              </Link>
              <hr />
            </li>
            <li className="p-1">
              <Link onClick={handleMenuClose} href="/Courses">
                Courses
              </Link>
              <hr />
            </li>
            <li className="p-1">
              <Link onClick={handleMenuClose} href="/Marketplace">
                Market Place
              </Link>
              <hr />
            </li>
            {
              <div>
                {!user ? (
                  <button className="ml-4 font-bold bg-purple-500 w-40 p-1 rounded-lg font-bold mt-4">
                    <a href="/signup">Sign in</a>
                  </button>
                ) : (
                  <button
                    className="ml-4 bg-purple-500 w-40 p-1 rounded-lg font-bold mt-4"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                )}
              </div>
            }
          </ul>
          <div>
            <div className="dropdown ml-4 mt-4">
              <ConnectButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default MobileNavbar;
