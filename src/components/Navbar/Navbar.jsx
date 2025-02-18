import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'


const Navbar = () => {
  return (
    <nav className='container'>
     <image src = {logo} alt="Hi" className='logo'/>

     <ul>
        <li>Home</li>
        <li>Project</li>
        <li>About Us</li>
        <li>Contact Us</li>
   
        <li><button className='btn'>Portfolio</button></li>
     </ul>
    </nav>
  )
}

export default Navbar
