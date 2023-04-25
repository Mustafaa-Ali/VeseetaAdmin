import { Outlet, Navigate } from "react-router-dom";
import react, { useEffect, useState } from 'react';
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {userphone} from '../store/Actions/userphone'


const DoctorRoutes = () => {

    
    const token = localStorage.getItem("token");
 
    // const userphone = useSelector(state => state.userphone.userphone);
    const userphone = sessionStorage.getItem('doctorPhone');
    console.log("userPhone route", userphone)


    return (
        <>
            {
                 (userphone  ? <Outlet /> : <Navigate to="/login" />) 

            }


        </>
    )


}


export default DoctorRoutes;