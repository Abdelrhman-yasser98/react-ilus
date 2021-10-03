import React from 'react';
import './form.css';
import warn from '../../images/icon-error.svg';

const Form = () => {
    let handleSubmit = (e) => {
        e.preventDefault();
        let spa = document.querySelector('.spa');
        let war = document.querySelector('.war');
        let con = document.querySelector('.con');
        let inp = document.querySelector('.inp');
        inp.value = 'Example@email/com'
        spa.style.display= 'block';
        war.style.display= 'block';
        con.style.cssText= 'padding: 4px; background-color:  hsl(0, 94%, 66%); color: white; border-radius: 3px';
    }
    let handleFocus = () => {
        let spa = document.querySelector('.spa');
        let war = document.querySelector('.war');
        let con = document.querySelector('.con');
        let inp = document.querySelector('.inp');
        inp.value = '';
        spa.style.display= 'none';
        war.style.display= 'none';
        con.style.padding= '0px'

    }
    return(
        <div className='form' id='form'>
            <div className='form1'>
                <p>35,000+ already joined</p>
                <h2>Stay up-to-date with what we’re doing</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='con'>
                    <input type='text' onFocus={handleFocus} placeholder='Enter Your Email Adress' className='inp'/>
                    <img src={warn} alt='warn' className='war'/>
                    <span className='spa'>Whoops, make sure it's an Email</span> 
                </div>
                <input type='submit' value='Contact Us' className='sub'/>
            </form>
        </div>
    )
}
export default Form;