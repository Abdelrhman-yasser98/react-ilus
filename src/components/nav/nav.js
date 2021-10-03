import React from 'react';
import logo from '../../images/logo-bookmark.svg';
import humberger from '../../images/icon-hamburger.svg';
import facebook from '../../images/icon-facebook.svg';
import twitter from '../../images/icon-twitter.svg';
import cross from '../../images/icon-close.svg';
import './nav.css';
function Nav() {
    let handleClick1 = ()=> {
        let over = document.querySelector('.overAll');
        over.style.visibility = 'hidden';
    }
    if (document.body.clientWidth >= 500) {
        return (
            <div className='nav'>
            <img src= {logo} alt='logo'/>
            <div className='naving'>
                <ul>
                    <li><a href='#features'>Features</a></li>    
                    <li><a href='#pricing'>Pricing</a></li>    
                    <li><a href='#form'>Contact</a></li>    
                </ul>
                <button>Login</button>    
            </div> 
        </div>
        );
    } else {
        return (
            <div className='nav'>
                <img src= {logo} alt='logo'/>
                <img src= {humberger} alt= 'humberger' onClick={()=> {
                    let over = document.querySelector('.overAll');
                    over.style.visibility = 'visible'
                }}/>
                <div className='overAll'>
                    <div className='overImg'>
                        <img src= {logo} alt='logo'/>
                        <img src= {cross} alt='cross' onClick={handleClick1}/>
                    </div>
                    <ul>
                        <li onClick={handleClick1}><a href='#features'>Features</a></li>    
                        <li onClick={handleClick1}><a href='#pricing'>Pricing</a></li>    
                        <li onClick={handleClick1}><a href='#form'>Contact</a></li>  
                    </ul>
                    <button>Login</button>
                    <div className='icons'>
                        <img src= {facebook} alt='facebook'/>
                        <img src= {twitter} alt='twitter'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;



