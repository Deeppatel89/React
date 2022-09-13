import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <ul>
    <li><Link className="home" to="/">Login</Link></li>
    <li><Link className="home" to="/Display">Display</Link></li>
    <li><Link className="home" to="/Update">Update</Link></li>
    </ul>
    </>
  )
}

export default Header