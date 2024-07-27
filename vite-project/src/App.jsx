import React from 'react'
import './App.css'
import Navbar from './components/navBar/navbar'
import Homepage from './routes/homepage/Homepage'

const App = ()=> {
  return (
    <div className='layout'>
      <div className='navbar'>
      <Navbar/>
      </div>
      
      <div className='content'>
      <Homepage/>
      </div>
    </div>
  )
}

export default App