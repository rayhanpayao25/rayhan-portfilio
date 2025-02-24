import React from 'react'
import './Hero.css'
//import dark_arrow from '../../assets/'

const Hero = () => {
  return (
    <div className='hero container'>
      <div  className='hero-text'>
      <h1>Hi, I am Rayhan</h1>
      <p>A passionate front-end web designer and developer. I specialize in creating visually appealing, user-friendly websites that provide 
        seamless and engaging experiences. I focus on both design and functionality to ensure a balanced approach to web development. 
        Whether it's crafting responsive layouts or optimizing user interfaces, I'm dedicated to building websites that not only look 
        great but also perform efficiently across all devices.</p>
        <button className='btn'>Hire Me <img src="{dark_arrow}" alt="" /></button>
    </div>
    </div>
  )
}

export default Hero
