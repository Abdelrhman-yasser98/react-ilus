import React from 'react';
import './main.css';
import image3 from '../../images/illustration-features-tab-3.svg';
function Easy() {
    return (
        <div className='main'>
                <div className='image'>
                    <img src={image3} alt='image3'/>
                </div>
                <div className='description'>
                    <h1>Share your bookmarks</h1>
                    <p>
                        Easily share your bookmarks and collections with others. Create a shareable 
                        link that you can send at the click of a button.
                    </p>
                    <button>
                        More Info
                    </button>
                </div>
            </div>
        
    );
}
export default Easy;