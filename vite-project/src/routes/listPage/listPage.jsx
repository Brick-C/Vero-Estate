import React from 'react'
import './listPage.css'
import { listData } from '../../lib/dummyData';
import Filter from '../../components/filter/filter';
import Card from '../../components/card/card';
import Map from '../../components/map/map';

const listPage = () => {
  const data = listData;
  return (
    <div className='listpage'>
        <div className='listContainer'>
          <div className="wrapper">
            <Filter/>
            {data.map(item=>(
              <Card key={item.id} item={item}/>
            ))}
          </div>
        </div>
        <div className='mapContainer'>
          <Map items={data}/>
        </div>
    </div>
  )
}

export default listPage