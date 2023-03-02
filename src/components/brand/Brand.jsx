import React from 'react';
import './Brand.css';
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'

const Brand = () => {
  return (
    <div className='gpt3__brand'>
      <div className='gpt3__brand-content'>
        <img src={google} alt="Google" />
        <img src={slack} alt="Slack" />
        <img src={atlassian} alt="Atlassian" />
        <img src={dropbox} alt="Dropbox" />
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  )
}

export default Brand