import React from 'react';
import './style.css';
//import logo from './logo.svg';
import ivan from '../image/ivanCartoon.jpg'

function Navbar() {
    return (
        <div className="Navbar">
            <img src={ivan}
            style={{height: "200px",
            width:"200px",
            borderRadius: "50%"
            }} ></img>
           
        </div>
    );
}

export default Navbar;
