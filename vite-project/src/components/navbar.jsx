import React from 'react'
import './navbar.css'
const navbar = () => {
  return (
    <nav>
        <div className='left'>
            <a href="#">
                <img src="" alt="" />
                <span>VeroEstate</span>
            </a>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
        </div>
        <div className='right'>
            <a href="/">Sign In</a>
            <a href="/">Sign Up</a>
        </div>
    </nav>
  )
}

export default navbar