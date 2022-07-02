import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'
// import logo from '../image/amezonblacklogo.png'

const Header = () => {
  return (
    <nav>
        <div className="main">
            
         <ul>
         <li><Link className="home" to="/">Home</Link></li>
         <li><Link className="home" to="/About">About us</Link></li>
         <li><Link className="home" to="/Contact">Contact us</Link></li>    
         <li><Link className="home" to="/Signup">Sign up</Link></li>   
         </ul>
        </div>
    </nav>
  )
}

export default Header