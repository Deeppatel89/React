import React from 'react';
import './App.css'
import Loginform1 from './component/Loginform1';
import { useSelector } from 'react-redux/es/exports';
import Main from './component/Main';
const App = () =>{
    const isLoggedIn = useSelector(state=>state.auth.isLoggedIn)
    console.log(isLoggedIn)
    return(
        <div className="body">
         {!isLoggedIn&&<Loginform1/>}  
        {isLoggedIn&&<Main/>} 
         
        </div>
    );
}
export default App;