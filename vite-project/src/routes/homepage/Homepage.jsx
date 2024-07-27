import React from 'react'
import './Homepage.css'
import SearchBar from '../../components/searchBar/searchBar'

const Homepage = ()=> {
  return (
    <div className='homepage'>
        <div className='textContainer'>
            <div className="wrapper">
            <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
            
            <p className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, magni. Nesciunt ipsam cum a blanditiis totam dolorum deserunt omnis praesentiu</p>

            <SearchBar/>    
          
            <div className='boxes'>
            <div className='box'>
                <h2>16+</h2>
                <p>Years of Experience</p>
            </div>

            <div className='box'>
                <h2>200</h2>
                <p>Award Gained</p>
            </div>

             <div className='box'>
                <h2>1200+</h2>
                <p>Property Ready</p>
            </div>
            </div>
            
            </div>
        </div>
        <div className='imgContainer'>
            <img src="../images/bg.png" alt="background" />
        </div>
    </div>
  )
}

export default Homepage