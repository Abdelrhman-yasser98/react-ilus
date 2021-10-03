import React from 'react';
import './footer.css';
import logo from '../.././images/logo-bookmark.svg';
import facebook from '../.././images/icon-facebook.svg';
import twitter from '../.././images/icon-twitter.svg';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer1'>
                <img src={logo} alt='logo'/>
                <ul>
                    <li><a href='#features'>Features</a></li>    
                    <li><a href='#pricing'>Pricing</a></li>    
                    <li><a href='#form'>Contact</a></li>    
                </ul>
            </div>
            <div className='footer2'>
                <a href='https://WWW.facebook.com'><img src={facebook} alt='facebook'/></a>
                <a href='https://twitter.com'><img src={twitter} alt='twitter'/></a>
            </div>
        </div>
    )
} 
export default Footer;