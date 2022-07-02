import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Signup from "./account/Signup";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Signin from './account/Signin';


const Router = () => {
  return (
   <div>
  
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />  
      <Route path="/About" element={<About />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
     </Routes>
     
   </div>
  )
}

export default Router