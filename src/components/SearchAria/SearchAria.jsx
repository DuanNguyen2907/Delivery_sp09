import React from 'react'
import './SearchAria.css'

import { UilSearchAlt } from '@iconscout/react-unicons'

const SearchAria = () => {
  return (
    <div className='SearchAria'>
        <div className='Search'>
            <input type='text' placeholder='Search'></input>
            <UilSearchAlt/>
        </div>
        <div className='User'>
            
        </div>
    </div>
  )
}

export default SearchAria