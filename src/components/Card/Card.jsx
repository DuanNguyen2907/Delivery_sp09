import React from 'react'
import "react-circular-progressbar/dist/styles.css";
import './Card.css'

const Card = (props) => {

  return (
    <div className="Card">     
        <CompactCard param = {props}/>
    </div>
  )
}

//compact Card

function CompactCard({param}){

    return(
        <div className="compactCard">
            <span
              style={{color: param.color}}
            >
              {param.number}
            </span>
            <span>package</span>
            <span>{param.title}</span>
        </div>
    )
}

// ExpandedCard

export default Card