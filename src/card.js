import React from 'react'
import './card.css'

const card = (props) => {
  return (
    <div>
        <img src={props.img} alt=""/>
        <h1>{props.productName}</h1>
    </div>
  )
}

export default card