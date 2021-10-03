import React from 'react';
import './main.css';
import image1 from '../../images/illustration-features-tab-1.svg';
function Simple() {
    return (
        <div className='main'>
            
                <div className='image'>
                    <img src={image1} alt='image1'/>
                </div>
                <div className='description'>
                    <h1>Bookmark in one click</h1>
                    <p>
                        Organize your bookmarks however you like. Our simple drag-and-drop interface 
                        gives you complete control over how you manage your favourite sites.
                    </p>
                    <button>
                        More Info
                    </button>
                </div>
                
            </div>
        
    );
}
export default Simple;