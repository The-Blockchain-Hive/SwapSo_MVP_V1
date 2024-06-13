"use client";
import React, { useState, useEffect, useRef, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { Puff } from 'react-loader-spinner';
import "./navbar.css";
import { UserAuth } from "../context/AuthContext";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const navbarRef = useRef(null);
  const { user, LogOut } = UserAuth();
  const delta = 5;

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await LogOut();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;

      const currentScroll = window.scrollY || 0;
      const navbar: any = navbarRef.current;

      if (!navbar) return;

      if (Math.abs(lastScrollTop - currentScroll) <= delta) return;

      if (currentScroll > lastScrollTop && currentScroll > navbar.offsetHeight) {
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

  const handleRouteChange = (url : any) => {
    startTransition(() => {
      router.push(url);
    });
  };

  return (
    <>
      {isPending && (
        <div className="loader-container">
          <Puff color="#00BFFF" height={100} width={100} />
        </div>
      )}
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
            <a onClick={() => handleRouteChange("/")}>Home</a>
          </li>
          <li className="nav-list">
            <a onClick={() => handleRouteChange("/allCourses")}>Courses</a>
          </li>
          <li className='nav-list'>
            <a onClick={() => handleRouteChange("/Marketplace")} className="ml-4">Market Place</a>
          </li>
        </ul>
        <div className="dropdown">
          <ConnectButton />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
