import React from 'react';
import './Possibility.css';
import possibility from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibility} alt="possibility" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p> From language translation to decision-making, customer service to content creation, the potential of this AI model is limitless. With advanced machine learning and natural language processing, GPT-3 is revolutionizing how we interact with technology and each other.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility