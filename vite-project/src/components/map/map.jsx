import React from 'react'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './map.css'
import { Link } from 'react-router-dom'

const map = ({items}) => {
  return (
    <MapContainer center={[51.507,-0.1278]} zoom={6} scrollWheelZoom={false} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {items.map(item=>(
    <Marker key={item.id} position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
            <img src={item.img} alt="" />
            <div className="textContainer">
                <Link to={`/${item.id}`}>{item.title}</Link>
                <span>{item.bedroom} Bedroom</span>
                <b>$ {item.price}</b>
            </div>
        </div>
        
      </Popup>
    </Marker>
    ))}
  </MapContainer>
  )
}

export default map