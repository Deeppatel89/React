import React from 'react'
import { useDispatch } from 'react-redux';
// import { authAction } from '../features/auth/authSlice';
import { login,logout } from '../features/auth/authSlice';

const Loginform1 = () => {
const dispatch = useDispatch();

 const submit = (e)=>{
    e.preventDefault();
    dispatch(login())


 }


  return (
   <form onSubmit={submit}>
    <input type="text" />
    <input type="text" />
    <button>Submit</button>
   </form>
  )
}

export default Loginform1