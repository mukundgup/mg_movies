
import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="custom-footer">
           
                
                    <div className="social-icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                        <a href=" https://www.instagram.com/earnerswave?igsh=MWFpdDJpOTgyZjNkZw==&utm_source=ig_contact_invite " target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </div>
                
        </footer>
    );
};

export default Footer;