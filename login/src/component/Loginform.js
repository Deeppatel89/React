import React from "react";
import './Loginform.css';

import pic from '../image/logologin.png';
import google from '../image/google.jpg';
import Twitter from '../image/twitter.jpg';
import { useDispatch } from "react-redux";
import { authAction } from "../features/auth/authSlice";


const Loginform = () => {
    const dispatch = useDispatch()

   const submit = (e)=>{
    e.preventDefault();
    dispatch(authAction.login)


   }



    return (
       
        <div className="loginform">
            <div className="logo">
                <img className="img2" src={pic} alt=""></img>
            </div>
            <div className="text">
                <h1 className="h11">Sign In To Treact</h1>
            </div>
            <div className="buttons">
                <button className="googlebtn" >
                    <img className="img3" src={google} alt=""></img>
                    <span className="a1">Sign in With Google</span>
                </button>
                <button className="googlebtn">
                    <img className="img3" src={Twitter} alt=""></img>
                    <span className="a1">Sign in With Twitter</span>
                    
                </button>
            </div>
            {/* <div className="ptag">
                <p className="p1">Or Sign in with your e-mail</p>
            </div> */}
            
            <div className="fild">
                <div className="email">
                    <input className="textarea" type="email" placeholder="          Email"></input>
                </div>
                <div className="password">
                    <input className="textarea" type="Password" placeholder="          Password"></input>

                </div>
            </div>
            <div className="signin">
                <button className="googlebtn" >
                    <span className="a1" >Sign in </span>
                </button>
            </div>
            
            <div className="footer">
                <span className="a3" >Forget Password ?</span>
                <p className="p3">Don't have an account?<span className="a4"> Sign Up</span></p>

            </div>
        </div>
      
    )
}
export default Loginform;