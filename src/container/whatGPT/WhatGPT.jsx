import React from 'react';
import { Feature } from '../../components';
import './WhatGPT.css';

const WhatGPT = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature 
          title="What is GPT-3" 
          text="The cutting-edge language model that's taking the world by storm. GPT-3 can generate natural language text on a wide range of topics, with unparalleled coherence, fluency, and creativity." 
          />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature 
          title="Chatbots" 
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Feature 
          title="Knowledgebase"
          text="With an unprecedented 175 billion parameters and an ability to generate human-like text, GPT-3 is the most advanced language model ever created." 
        />
        <Feature 
          title="Education"
          text=" Whether you need language translation, question answering, summarization, or text completion, GPT-3 has got you covered. Whether you need language translation, question answering, summarization, or text completion, GPT-3 has got you covered."
        />

      </div>
    </div>
  )
}

export default WhatGPT;