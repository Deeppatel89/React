import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'
import logo from '../image/logo.jpg'

const Header = () => {
  return (
    <nav>
      <div className="main">
        <div className="logo">
          <img className='logoimg' src={logo} alt="" />
        </div>
        <div className="search">
          <input className='searchinp' type="text" placeholder="Search.." />
          <button><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <ul>
          <li><Link className="home" to="/">Home</Link></li>
          <li><Link className="home" to="/About">About us</Link></li>
          <li><Link className="home" to="/Contact">Contact us</Link></li>
          <li><Link className="home" to="/Signup">Sign up</Link></li>
          <li><Link className="home" to="/Signin">Sign in</Link></li>
        </ul>
        
      </div>
    </nav>
  )
}

export default Header