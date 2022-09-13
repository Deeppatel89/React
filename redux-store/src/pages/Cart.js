import React from 'react'
import Navbar from '../component/Navbar';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/exports';
import {remove} from '../store/cartSlice'



const Cart = () => {
  const dispatch = useDispatch()

  const item = useSelector((state)=>state.cart)
  console.log(item)


  const handleRemove = (productid)=>{
    dispatch(remove(productid))
  }
 
  return (
    <div>
      <Navbar />
      <h3>Cart</h3>
            <div className="cartWrapper">
                {item.map((product) => (
                    <div key={product.id} className="cartCard">
                        <img src={product.image} alt="" />
                        <h5>{product.title}</h5>
                        <h5>{product.price}</h5>
                        <button className="btn" onClick={() => handleRemove(product.id)}>Remove</button>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Cart