import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Display from './Display'
import Login from './Login'
import Update from './Update'


const Router = () => {
    return (
        <>
           
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Display" element={<Display />} />
                <Route path="/Update" element={<Update/>} />
               
            </Routes>
            
           
        </>
    )
}

export default Router