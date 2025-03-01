import React from "react";
import "./Navbar.css";
import mslogo from './assests/mslogo..jpeg';
import search_icon_light from './assests/search-w.png';
import search_icon_dark from './assests/search-b.png';
import toogle_light from './assests/night.png';
import toogle_dark from './assests/day.png';
import bangle from './bangle.jpeg';
import cosmetics from './cosmetics.jpeg';
import earrings from './earrings.jpeg';
import Navaccess from './Navaccess';
const Navbar = () => {
  return (
    <div>
    <nav className='navbar'>
      <img src={mslogo} alt="" className='logo' />
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Features</li>
        <li>About</li>
      </ul>
      
      <div className='search-box'>
        <input type="text" placeholder='search' />
        <img src={search_icon_light} alt="" />
      </div>
      <img src={toogle_light} alt="" className='toggle-icon'/>
    </nav>
    <div>
      <Navaccess ms={bangle} shop="fancy bangles"/>
      <Navaccess ms={cosmetics} shop="branded cosmetics"/>
      <Navaccess ms={earrings} shop="trending earrings"/>
    </div>
  </div> 
  );
};

export default Navbar;
