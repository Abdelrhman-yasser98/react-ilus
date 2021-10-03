import React from 'react';
import {NavLink} from 'react-router-dom';
import './features.css'
const Features = ()=> {
    return(
        <div className='features'>
            <div className='features1'>
                <h1>Features</h1>
                <p>
                    Our aim is to make it quick and easy for you to access your favourite websites. 
                    Your bookmarks sync between your devices so you can access them on the go.
                </p>
            </div>
            <div className='features2' id='features'>
                <NavLink className='link' exact to='/'>Simple Bookmarking</NavLink>
                <NavLink className='link' to='/speedy'>Speedy Searching</NavLink>
                <NavLink className='link' to='/easy'>Easy Sharing</NavLink>
            </div>
        </div>
    )
}
export default Features;