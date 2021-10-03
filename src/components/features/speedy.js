import React from 'react';
import './main.css';
import image2 from '../../images/illustration-features-tab-2.svg';
function Speedy() {
    return (
        <div className='main'>
            
                <div className='image'>
                    <img src={image2} alt='image2'/>
                </div> 
                <div className='description'>
                    <h1>Intelligent search</h1>
                    <p>
                        Our powerful search feature will help you find saved sites in no time at all. 
                        No need to trawl through all of your bookmarks.
                    </p>
                    <button>
                        More Info
                    </button>
                </div>
            </div> 
        
    );
}
export default Speedy;