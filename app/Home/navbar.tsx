"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "./navbar.css";
import { UserAuth } from "../context/AuthContext";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const navbarRef = useRef(null);
  const { user, LogOut } = UserAuth();
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
    <>
      <nav id="navbar1" className="sticky mx-auto" ref={navbarRef}>
        <Image
          className="logo1"
          src="/newlogo.svg"
          alt=""
          width={150}
          height={100}
        />
        <ul className="nav-links">
          <li className="nav-list">
            <Link href="/">Home</Link>
          </li>
          <li className="nav-list">
            <Link href="/Courses">Courses</Link>
          </li>
          <li className="nav-list">
            <Link href="/Marketplace">Market Place</Link>
          </li>
        </ul>
        {
          <div>
            {!user ? (
              <button className="sign-in bg-purple-500 w-40 p-2 rounded-lg">
                <a href="/signup" className="font-bold">
                  Sign in
                </a>
              </button>
            ) : (
              <button
                className="font-bold  bg-purple-500 w-40 p-2 rounded-lg"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            )}
          </div>
        }
        <div className="dropdown">
          <ConnectButton />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
