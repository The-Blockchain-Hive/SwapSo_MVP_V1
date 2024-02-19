"use client"
import React from "react";
import Link from "next/link";
import {FaTwitter, FaInstagram, FaLinkedin, FaDiscord, FaWhatsapp, FaTelegram, FaArrowAltCircleLeft, FaArrowLeft} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#00000] w-screen text-white pt-8 pb-5">
      <div className="container">
        <div className="flex flex-wrap  text-lg w-screen justify-between px-10 gap-8 md:flex-row md:text-sm">
          <div className="company-section">
            <h3 className="text-xl font-semibold mb-4 md:text-lg">Company</h3>
            <ul>
              <li><a href="/about" className="hover:text-gray-300 hover:ease-in-out duration-300 opacity-70">About Us</a></li>
              <li><a href="/team" className="hover:text-gray-300 hover:ease-in-out duration-300 opacity-70">Team</a></li>
              <li><a href="/mission" className="hover:text-gray-300 hover:ease-in-out duration-300 opacity-70">Mission</a></li>
              <li><a href="/partners" className="hover:text-gray-300 hover:ease-in-out duration-300 opacity-70">Partners</a></li>
            </ul>
          </div>
          <div className="quick-links-section">
            <h3 className="text-xl font-semibold mb-4 md:text-lg">Quick Links</h3>
            <ul>
              <li><a href="/" className="hover:text-gray-300 hover:ease-in-out duration-300 opacity-70">Home</a></li>
              <li><a href="/courses" className="hover:text-gray-300 hover:ease-in-out duration-300 opacity-70">Courses</a></li>
              <li><a href="/marketplace" className="hover:text-gray-300 hover:ease-in-out duration-300 opacity-70">MarketPlace</a></li>
            </ul>
          </div>
          <div className="resources-section">
            <h3 className="text-xl font-semibold mb-4 md:text-lg">Resources</h3>
            <ul>
              <li><a href="https://www.theblockchainhive.com/ambassador" className="hover:text-gray-300 hover:ease-in-out duration-300 text-wrap opacity-70">Campus Ambassador</a></li>
              <li><a href="/blog" className="hover:text-gray-300 hover:ease-in-out duration-300 opacity-70"><Link href="https://blogs.swapso.io" target='_blank'>Blogs</Link></a></li>
              <li><a href="/events" className="hover:text-gray-300 hover:ease-in-out duration-300 opacity-70">Events</a></li>
            </ul>
          </div>
          <div className="support-section">
            <h3 className="text-xl font-semibold mb-4 md:text-lg">Support</h3>
            <ul>
              <li><a href="/contacts" className="hover:text-gray-300 hover:ease-in-out duration-300 opacity-70">Contacts</a></li>
              <li><a href="/faq" className="hover:text-gray-300 hover:ease-in-out duration-300 opacity-70">FAQ</a></li>
              <li><a href="/privacy" className="hover:text-gray-300 hover:ease-in-out duration-300 opacity-70">Privacy</a></li>
              <li><a href="/terms" className="hover:text-gray-300 hover:ease-in-out duration-300 opacity-70">Terms and Conditions</a></li>
            </ul>
          </div>
        </div>
        <div className=" flex-row flex-wrap">
        <div className="flex flex-row flex-wrap justify-between">
        <div className="social-media-section px-20 mt-12">
            <div className="flex space-x-10 flex flex-row flex-wrap">
              <a href="https://twitter.com/theblock_chive" aria-label="Twitter"><FaTwitter size={32} /></a>
              <a href="https://www.instagram.com/theblockchainhive/" aria-label="Instagram"><FaInstagram size={32} /></a>
              <a href="https://www.linkedin.com/company/theblockchainhivee/" aria-label="LinkedIn"><FaLinkedin size={32} /></a>
              <a href="https://discord.com/invite/6CjRfUSds7" aria-label="Discord"><FaDiscord size={32} /></a>
              <a href="https://chat.whatsapp.com/B7H7elZHya6HzlvQ0gXJS8" aria-label="Whatsapp"><FaWhatsapp size={32} /></a>
              <a href="https://chat.whatsapp.com/B7H7elZHya6HzlvQ0gXJS8" aria-label="Telegram"><FaTelegram size={32}/></a>
            </div>
        </div>
          <div className="px-20 mt-8 rounded-lg text-blue-900">
          <i>Subscribe to our newsletter</i>
            <form>
              <input type="email" placeholder="Enter your email" className="rounded-lg px-4 py-2 border border-gray-300 w-2/3 text-black" />
              <button type="submit" className="text-blue-900 rounded-lg px-4 py-2 border border-gray-300 ml-2">➔</button>
            </form>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
