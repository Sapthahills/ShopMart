import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOP MART</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <Link to='https://www.instagram.com/' target='blank'><img src={instagram_icon} alt="" /></Link>
                
            </div>
            <div className="footer-icons-container">
                <Link to='https://in.pinterest.com/' target='blank'><img src={pintest_icon} alt="" /></Link>
                
            </div>
            <div className="footer-icons-container">
            <Link to='https://web.whatsapp.com/' target='blank'><img src={whatsapp_icon} alt="" /></Link>
            </div>
        </div>
        <div className="footer-copyrights">
            <hr />
            <p>Copyrights &copy; {new Date().getFullYear()}</p>
        </div>
    </div>
  )
}

export default Footer