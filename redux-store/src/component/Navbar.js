import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'


const Navbar = () => {
  const item = useSelector((state)=>state.cart)
  console.log(item)
  return (
    <div>
        <div className="nav">
            <ul>
             <li><Link to="/">HOME</Link></li>  
             <li><Link to="/cart">CART</Link></li>
             <li>cart item : {item.length}</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar