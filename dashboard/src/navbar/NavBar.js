import React from 'react'

import './NavBar.css'

const NavBar = () => {
  return (
    <div>
       <div className="navbar">
        <div className="Logo">
           <h1>DEEP PATEL</h1>
        </div>
        <div className="search">
            <input type="text" />
            <i class="fa-solid fa-magnifying-glass" id='icon'></i>
        </div>
    
       </div>

    </div>
  )
}

export default NavBar