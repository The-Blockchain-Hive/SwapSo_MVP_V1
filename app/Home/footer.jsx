"use client"
import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import {FaTwitter, FaInstagram, FaLinkedin, FaDiscord, FaWhatsapp, FaTelegram, FaArrowAltCircleLeft, FaArrowLeft} from 'react-icons/fa';
// components/Footer.js

const Footer = () => {
  return (
    <footer className="bg-[#00000] w-screen text-white pt-8 pb-5">
      <div className="container">
        <div className="flex flex-wrap  text-lg w-screen justify-between px-10 gap-8 md:flex-col md:text-sm">
          <Image src={logo} width={200} height={200} alt="logo" className="m-0 p-0"/>
          <div className="company-section">
            <h3 className="text-xl font-semibold mb-4 md:text-lg">Company</h3>
            <ul>
              <li><a href="/about" className="hover:text-gray-300 hover:ease-in-out duration-300">About Us</a></li>
              <li><a href="/team" className="hover:text-gray-300 hover:ease-in-out duration-300">Team</a></li>
              <li><a href="/mission" className="hover:text-gray-300 hover:ease-in-out duration-300">Mission</a></li>
              <li><a href="/partners" className="hover:text-gray-300 hover:ease-in-out duration-300">Partners</a></li>
            </ul>
          </div>
          <div className="quick-links-section">
            <h3 className="text-xl font-semibold mb-4 md:text-lg">Quick Links</h3>
            <ul>
              <li><a href="/" className="hover:text-gray-300 hover:ease-in-out duration-300">Home</a></li>
              <li><a href="/courses" className="hover:text-gray-300 hover:ease-in-out duration-300">Courses</a></li>
              <li><a href="/marketplace" className="hover:text-gray-300 hover:ease-in-out duration-300">MarketPlace</a></li>
            </ul>
          </div>
          <div className="resources-section">
            <h3 className="text-xl font-semibold mb-4 md:text-lg">Resources</h3>
            <ul>
              <li><a href="/ambassador" className="hover:text-gray-300 hover:ease-in-out duration-300">Campus Ambassador</a></li>
              <li><a href="/blog" className="hover:text-gray-300 hover:ease-in-out duration-300">Blog</a></li>
              <li><a href="/events" className="hover:text-gray-300 hover:ease-in-out duration-300">Events</a></li>
            </ul>
          </div>
          <div className="support-section">
            <h3 className="text-xl font-semibold mb-4 md:text-lg">Support</h3>
            <ul>
              <li><a href="/contacts" className="hover:text-gray-300 hover:ease-in-out duration-300">Contacts</a></li>
              <li><a href="/faq" className="hover:text-gray-300 hover:ease-in-out duration-300">FAQ</a></li>
              <li><a href="/privacy" className="hover:text-gray-300 hover:ease-in-out duration-300">Privacy</a></li>
              <li><a href="/terms" className="hover:text-gray-300 hover:ease-in-out duration-300">Terms and Conditions</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-row justify-between">
        <div className="social-media-section px-20">
            <h3 className="text-xl font-semibold mb-4 md:text-lg">Follow Us</h3>
            <div className="flex space-x-10">
              <a href="https://twitter.com/theblock_chive"><FaTwitter size={32} /></a>
              <a href="https://www.instagram.com/theblockchainhive/"><FaInstagram size={32} /></a>
              <a href="https://www.linkedin.com/company/theblockchainhivee/"><FaLinkedin size={32} /></a>
              <a href="https://discord.com/invite/6CjRfUSds7"><FaDiscord size={32} /></a>
              <a href="https://chat.whatsapp.com/B7H7elZHya6HzlvQ0gXJS8"><FaWhatsapp size={32} /></a>
              <a href="https://chat.whatsapp.com/B7H7elZHya6HzlvQ0gXJS8"><FaTelegram size={32}/></a>
            </div>
          </div>
          <div className="subscribe-section px-20">
            {/* <h3 className="text-xl font-semibold mb-4 md:text-lg">Subscribe</h3> */}
            {/* <form className="flex items-center">
              <input type="email" placeholder="Enter your email" className="py-2 px-4 border border-gray-700 rounded-l text-black focus:outline-none" />
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-r"><span className="flex"><FaArrowLeft className="self-center mr-2" size={15}/>Subscribe </span></button>
            </form> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;







// import './footer.css';

// const Footer = () => {


//     return(
//         <main>
//             <div className="footer">
//                 <div className="box">
//                 <div className="FooterHeading"> <h1 className="font-bold">Company</h1> </div>
//                 <ul className="footerLinks">            
//                     <li><a href="#">About Us</a></li>
//                     <li><a href="#">Team</a></li>
//                     <li><a href="#">Mission</a></li>
//                     <li><a href="#">Partners</a></li>
//                 </ul>
//                 </div>
//                 <div className="box">
//                 <div className="FooterHeading"> <h1 className="font-bold"> Quick Links</h1> </div>
//                 <ul className="footerLinks">     
//                     <li><a href="#">Home</a></li>
//                     <li><a href="#">Courses</a></li>
//                     <li><a href="#">MarketPlace</a></li>
//                 </ul>
//                 </div>
//                 <div className="box">
//                 <div className="FooterHeading"> <h1 className="font-bold">Resources</h1> </div>
//                 <ul className="footerLinks">            
//                     <li><a href="#">Campus Ambassador</a></li>
//                     <li><a href="#">Blog</a></li>
//                     <li><a href="#">Events</a></li>
//                 </ul>
//                 </div>
//                 <div className="box">
//                 <div className="FooterHeading"> <h1 className="font-bold">Support</h1> </div>
//                 <ul className="footerLinks">            
//                     <li><a href="#">Contacts</a></li>
//                     <li><a href="#">FAQ</a></li>
//                     <li><a href="#">Privacy</a></li>
//                     <li><a href="#">Terms and Conditions</a></li>
//                 </ul>
//                 </div>
//                 <div className="box"></div>
//                 <div className="subscribeSection">
//                     <div className="footerHeading font-bold">Subscribe Our Newsletter</div>
//                 <form>
//                     <div className="inputContainer">
//                         <input type="email" className="subscribeInput" placeholder="Enter your email" />
//                         <div className="inputArrow"><button type="submit" className="subscribeButton">➔</button></div>
//                     </div>
//                 </form>
//             </div>

//             </div>
//             <div className="icons">
//                 <Image src='/logo.png'  className="logo1" width={175} height={70}/>
//                 <a href="https://twitter.com/theblock_chive"><FaTwitter size={32} /></a>
//                 <a href="https://www.instagram.com/theblockchainhive/"><FaInstagram size={32} /></a>
//                 <a href="https://www.linkedin.com/company/theblockchainhivee/"><FaLinkedin size={32} /></a>
//                 <a href="https://discord.com/invite/6CjRfUSds7"><FaDiscord size={32} /></a>  
//                 <a href="https://chat.whatsapp.com/B7H7elZHya6HzlvQ0gXJS8"><FaWhatsapp size={32} /></a>
//                 <a href=""><FaTelegram size={32}/></a>       
//             </div>
//         </main>
//     )
// }
// export default Footer;