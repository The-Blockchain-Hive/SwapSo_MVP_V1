import React from "react";
import Image from "next/image";
import {FaTwitter, FaInstagram, FaLinkedin, FaDiscord, FaWhatsapp, FaTelegram} from 'react-icons/fa';
import './footer.css';

const Footer = () => {

    return(
        <main>
            <div className="footer">
                <div className="box">
                <div className="FooterHeading"> <h1 className="font-bold">Company</h1> </div>
                <ul className="footerLinks">            
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Mission</a></li>
                    <li><a href="#">Partners</a></li>
                </ul>
                </div>
                <div className="box">
                <div className="FooterHeading"> <h1 className="font-bold"> Quick Links</h1> </div>
                <ul className="footerLinks">            
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">MarketPlace</a></li>
                </ul>
                </div>
                <div className="box">
                <div className="FooterHeading"> <h1 className="font-bold">Resources</h1> </div>
                <ul className="footerLinks">            
                    <li><a href="#">CA</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Events</a></li>
                </ul>
                </div>
                <div className="box">
                <div className="FooterHeading"> <h1 className="font-bold">Support</h1> </div>
                <ul className="footerLinks">            
                    <li><a href="#">Contacts</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms and Conditions</a></li>
                </ul>
                </div>
                <div className="box"></div>
                <div className="subscribeSection">
                    <div className="footerHeading">Subscribe</div>
                <form>
                    <div className="inputContainer">
                        <input type="email" className="subscribeInput" placeholder="Enter your email" />
                        <div className="inputArrow"><button type="submit" className="subscribeButton">➔</button></div>
                    </div>
                </form>
            </div>

            </div>
            <div className="icons">
                <Image src='/logo.png'  className="logo1" width={175} height={70}/>
                <a href="https://twitter.com/theblock_chive"><FaTwitter size={32} /></a>
                <a href="https://www.instagram.com/theblockchainhive/"><FaInstagram size={32} /></a>
                <a href="https://www.linkedin.com/company/theblockchainhivee/"><FaLinkedin size={32} /></a>
                <a href="https://discord.com/invite/6CjRfUSds7"><FaDiscord size={32} /></a>  
                <a href="https://chat.whatsapp.com/B7H7elZHya6HzlvQ0gXJS8"><FaWhatsapp size={32} /></a>
                <a href=""><FaTelegram size={32}/></a>       
            </div>
        </main>
    )
}
export default Footer;