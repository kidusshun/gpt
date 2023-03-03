import React from 'react';
import './Blog.css'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>
          A lot is happening,<br />
          We are blogging about it.
        </h1>
      </div>
      <div className='gpt__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          A
        </div>
        <div className='gpt3__blog-container_groupB'></div>
      </div>
    </div>
  )
}

export default Blog