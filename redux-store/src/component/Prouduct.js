// import React, { useEffect, useState } from 'react'
import './Product.css'
import Data from '../DataApi'
// import {add} from '../store/cartSlice'
import {add} from '../store/cartSlice'
// import { useDispatch } from 'react-redux'
import { useDispatch } from 'react-redux'

// console.log(Data)
const Prouduct = () => {
 const dispatch = useDispatch();

const HandelCh = (a)=>{
    dispatch(add(a))
    // console.log(e)
}

     
  return (
   <>
   <div className="productsWrapper">
            {Data.map((e) => (
                <div className="card" key={e.id}>
                    <img src={e.image} alt="" />
                    <h4>{e.title}</h4>
                    <h5>{e.price}</h5>
                    <button className="btn" onClick={() => HandelCh(e)}>
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
  
   
   </>
  )
}

export default Prouduct