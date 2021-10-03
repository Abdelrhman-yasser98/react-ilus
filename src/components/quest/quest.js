import React, { useState } from 'react';
import arrow from '../../images/icon-arrow.svg';


const Quest = ({id,question,answer}) =>{
    const [isActive ,setIsActiv] = useState(false);
        return (
            <div className='quest' id={id}>
                <div className='head' onClick={()=> setIsActiv(!isActive)}>
                    <h4>{question}</h4>
                    <img src={arrow} alt='arrow' className={`image ${isActive?'active' : ''}`}/>
                </div>
                {isActive && <p className='text'> {answer} </p>}
            </div>
        
        )
    
}

export default Quest;
