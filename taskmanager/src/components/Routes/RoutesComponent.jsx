import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { Login } from "../Login/Login";
import {Tasks} from "../Pages/Tasks";


export const RoutesComponent = () => {

    return(
        <>
        <Router>
            <Routes>
            <Route exact path="/" element={<Login/>}></Route>
            <Route exact path='/login' element={<Login />} />
            <Route exact path="/tasks" element={<Tasks/>}/>
            </Routes>
        </Router>
        
        </>
    )

}