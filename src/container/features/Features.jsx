import React from 'react';
import './Features.css';
import Feature from "../../components/feature/Feature";
const featuresData = [
  {
    title:'Natural language processing ',
    text:'GPT-3 is a powerful language model that can understand and generate text in natural language. This feature allows users to communicate with the system using everyday language and receive responses that sound like they were written by a human.'
  },
  {
    title:'Customization',
    text:'GPT-3 can be fine-tuned to generate text specific to a particular domain or task. This feature allows users to train the system on their own data and improve the accuracy of the generated text.'
  },
  {
    title:'Multilingual support',
    text:'GPT-3 can generate text in several languages, including English, Spanish, German, French, Chinese, and more. This feature allows users to communicate with a global audience and expand the reach of their content.'
  },
  {
    title:'Text completion',
    text:'GPT-3 can assist users in completing their writing tasks by generating suggestions for text based on the input provided. This feature can be useful for tasks such as writing emails, social media posts, or even longer documents like essays or reports. Users can save time and effort by using GPT-3 to generate suggestions and then editing or modifying them as needed.'
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {
          featuresData.map(({title,text},i) => (
            <Feature title={title} text={text} key={title+i} />
          ))
        }
      </div>
    </div>
  )
}

export default Features;