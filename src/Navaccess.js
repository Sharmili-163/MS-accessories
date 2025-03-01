import React from 'react'
import './Navbar.css'
const Navaccess = (props) => {
  return (
    <div>
        <div className="imagecontainer">
            <div className='images'>
              <img src={props.ms} alt=""/>
              <h3>{props.shop}</h3>
            </div>
        </div>
    </div>
  )
}
export default Navaccess