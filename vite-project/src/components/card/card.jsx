import React from 'react'
import './card.css'
import {Link} from 'react-router-dom'

const card = ({item}) => {
  return (
    <div className='card'>
      <Link to={`/${item.id}`} className="imgContainer">
      <img src={item.img} alt="" />
      </Link>
      <div className='textContainer'>
        <h2 className='title'>
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className='address'>
          <img src="../images/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className='price'>
          <span>${item.price}</span>
        </p>

        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="../images/bed.png" alt="" />
              <span>{item.bedroom} Bedroom</span>
            </div>

            <div className="feature">
              <img src="../images/bath.png" alt="" />
              <span>{item.bathroom} Bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="../images/save.png" alt="" />
            </div>

            <div className="icon">
              <img src="../images/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default card