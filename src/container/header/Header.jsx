import React, {useEffect, useRef} from 'react';
import './Header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';


const Header = () => {
  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    document.querySelector('span').onmouseover = event => {
      let iterations =0;
      const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("").map((letter,index) => {
          if(index < iterations){
            console.log(event.target.dataset.value[index]);
            return event.target.dataset.value[index]
          }
          return letters[Math.floor(Math.random()*26)];
        } ).join("");
        
        if(iterations >= event.target.dataset.value.length) clearInterval(interval);
        iterations +=1/3;
      },30)
    }
  },[])

  const ref =useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry =>{
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in-right');
        }
      });
    }, {threshold: 0.5});
    observer.observe(ref.current)
    return () =>{
      observer.disconnect();
    }
  }, [])
  
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content' ref={ref}>
        <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 <span data-value="OPENAI">OPENAI</span></h1>
        <p>If you're looking to take your website, app, or product to the next level, GPT-3 is the tool you've been waiting for. With its ability to generate seemingly human-like text, the potential applications for GPT-3 are limitless.</p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header