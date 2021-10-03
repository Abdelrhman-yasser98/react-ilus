import React from 'react';
import './down.css';
import chrome from '../../images/logo-chrome.svg'; 
import opera from '../../images/logo-opera.svg'; 
import firefox from '../../images/logo-firefox.svg'; 

const Down = ()=> {
    return (
        <div className='down'>
            <div className='content'>
                <h1>Download the extension</h1>
                <p> 
                    We’ve got more browsers in the pipeline. Please do let us know if you’ve 
                    got a favourite you’d like us to prioritize.
                </p>
            </div>
            <div className='boxes'>
                <div>
                    <img src={chrome} alt='chrome'/>
                    <h5>Add to Chrome</h5>
                    <p>Minimum version 62</p>
                    <button>Add &amp; Install Extension</button>
                </div>
                <div>
                    <img src={firefox} alt='firefox'/>
                    <h5>Add to Firefox</h5>
                    <p>Minimum version 55</p>
                    <button>Add &amp; Install Extension</button>
                </div>
                <div>
                    <img src={opera} alt='opera'/>
                    <h5>Add to Opera</h5>
                    <p>Minimum version 46</p>
                    <button>Add &amp; Install Extension</button>
                </div>
            </div>
        </div>
    )
}
export default Down;