import React from 'react'
import './Navbar.css'
const Navaccess = ({ image, label}) => {
  return (
    <div>
        <div className="imagecontainer">
            <div className='images'>
              <img src={image} alt={label}/>
              <h3>{label}</h3>
            </div>
        </div>
    </div>
  )
}
export default Navaccess