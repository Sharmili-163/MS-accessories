import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './LoginPages.js'
import Navbar from './Navbar.js';

const Pages = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Navbar/>}/>
    </Routes>
    </BrowserRouter>
  );
    
};

export default Pages