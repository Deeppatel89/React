import React from 'react'
// import Header from '../component/Header'
import './Signup.css'
import { useState } from 'react'

const Signup = (props) => {
  const [enterfname, setfname] = useState('')
  const [enterlname, setlname] = useState('')
  const [enteremail, setemail] = useState('')

  const fnamechange = (event) => {
      
      setfname(event.target.value)
     
  }
  const lnamechange = (event) => {
      setlname(event.target.value)
  }
  const emailchange = (event) => {
    setemail(event.target.value)
  }

  const clicked = (event) =>{

      event.preventDefault();
      
      const customer = {
          fname : enterfname,
          lname : enterlname,
          email : enteremail
      }
     
      console.log(customer);

  }

  return (
   

    <>
    
   <div className="sign">
        <div className="container">
           <h3 className='h3'>Create New Account</h3>
            <form className="from" onSubmit={clicked}>
            <label className='label' >First Name</label><br/>
            <input type="text" onChange={fnamechange}/><br />
            <label className='label'>Last Name</label><br/>
            <input type="text" onChange={lnamechange}/><br />
            <label className='label'>Email</label><br/>
            <input type="email" onChange={emailchange}/><br />
            <button type="submit">Submit</button>
           </form>
        
    </div>
    </div>
      

    </>
  )
  
}

export default Signup