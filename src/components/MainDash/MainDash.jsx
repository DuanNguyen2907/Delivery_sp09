import React from 'react'
import './MainDash.css'
import Cards from '../Cards/Cards'
import RevenueCard from '../Card/RevenueCard'

const MainDash = () => {
  return (
    <div className='MainDash'>
      <div className='Top'>
        <div>
          <h2>
              ORDER ACTIVITY
          </h2>
          <Cards/>  
        </div>
        <div>
          <h2>SHIPPING REVENUE</h2>
          <RevenueCard/>
        </div>
      </div>
    </div>
  )
}

export default MainDash