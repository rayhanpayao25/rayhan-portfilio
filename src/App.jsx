import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'



const App = () => {
  return (
    <div>
     <Navbar/>
     <Hero/>
  
     <div className='container'>
      <Title subTitle=' GDSC Program' title= 'My GDSC Projects'/>
       <Programs/>
     </div>
   

    </div>
  )
}

export default App
