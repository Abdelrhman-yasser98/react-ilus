import React from 'react';
import './manager.css';
import hero from '../../images/illustration-hero.svg';
function Manager() {
    return (
        <div className='manager'>
                <div className='description'>
                    <h1>A Simple Bookmark Manager</h1>
                    <p>
                        A clean and simple interface to organize your favourite websites. Open a new 
                        browser tab and see your sites load instantly. Try it for free.
                    </p>
                    <button>
                        Get it on Chrome
                    </button>
                    <button>
                        Get it on Firefox
                    </button>
                </div>
                <div className='image'>
                    <img src={hero} alt='hero'/>
                </div>
            </div>
        
    );
}
export default Manager;