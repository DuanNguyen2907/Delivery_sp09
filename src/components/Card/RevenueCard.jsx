import React from 'react'
import './Card.css'

const RevenueCard = () => {
  return (
    <div className="RevenueCard">
        <div className='Total Card'>
            <h3>Total</h3>
            <span>576.012.000vnd</span>
        </div>
        <div className='days Card'>
            <h3>7-days</h3>
            <span>1.560.000vnd</span>
        </div>
    </div>
  )
}

export default RevenueCard