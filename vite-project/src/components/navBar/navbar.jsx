import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
const navbar =()=> {

  return (
    <nav>
        <div className='left'>
            <Link href="#" className='logo'>
                <img src="../images/logo.png" alt="logo" />
                <span>VeroEstate</span>
            </Link>
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Agents</Link>
        </div>
        <div className='right'>
            <Link href="/" className='log'>Sign In</Link>
            <Link href="/" className='register'>Sign Up</Link>
        </div>
    </nav>
  )
}

export default navbar