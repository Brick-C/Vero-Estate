import React from 'react'
import './navbar.css'

const navbar =()=> {

  return (
    <nav>
        <div className='left'>
            <a href="#" className='logo'>
                <img src="../images/logo.png" alt="logo" />
                <span>VeroEstate</span>
            </a>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
        </div>
        <div className='right'>
            <a href="/" className='log'>Sign In</a>
            <a href="/" className='register'>Sign Up</a>
        </div>
    </nav>
  )
}

export default navbar