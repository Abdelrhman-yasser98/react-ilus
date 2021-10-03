import React, {Component} from 'react';
import './frequantly.css'
import Quest from './quest';
import questData from './questData';
class Frequantly extends Component {
    render() {
        return (
            <div className='frequantly'>
                <div className='frequantly1' id ='pricing'>
                <h1>Frequently Asked Questions</h1>
                    <p>
                        Here are some of our FAQs. If you have any other questions you’d like 
                        answered please feel free to email us.
                    </p>
                </div>
                <section>
                    {questData.map(({id,question,answer}) => (<Quest key={id} id={id} question={question} answer={answer}/>))}
                </section>
                <button>More Info</button>
            </div>
        )
    }
}
export default Frequantly;