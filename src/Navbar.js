import React, { useEffect, useState } from "react";
import "./Navbar.css";
import axios from 'axios';
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
  const [productData, setProductData] = useState([]);
  async function getDetails() {
    await axios.get("https://dummyjson.com/products").then((res) => {
      setProductData(res.data.products);
    });
  }
  useEffect(() => {
    getDetails();
    }, []);
  
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
    <div className='imagecontainer'>
      {productData.map((product) => (
        <productData
        key={product.id}
        image={product.thumbnail}
        label={product.title}
        />
      ))}
      
      
    </div>
  </div> 
  );
};

export default Navbar;
