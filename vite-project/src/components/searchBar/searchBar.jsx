import React, { useState } from 'react'
import './searchBar.css'

const searchBar = () => {

  const types = ['buy', 'rent'];

  const[query, setQuery] = useState({
    type:'buy',
    location:'',
    minPrice:0,
    maxPrice:0,
  })

  const switchType = (val)=>{
    setQuery((prev)=>({...prev, type:val}))
  }

  return (
    <div className='searchBar'>
        <div className="type">
         {types.map((type)=>(
          <button className={query.type === type ? 'active':""} key={type} onClick={()=>switchType(type)}>{type}</button>
         ))}
        </div>

        <form>
            <input type="text" name='location' placeholder="Enter Location" />
            <input type="number" name='minPrice'min={0} max={10000000} placeholder='Min Price' />
            <input type="number" name='minPrice'min={0} max={10000000} placeholder='Min Price' />
           <button>
           <img src="../images/search.png" alt="search" />
           </button>
        </form>
    </div>
  )
}

export default searchBar