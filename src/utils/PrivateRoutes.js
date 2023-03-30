import { Outlet, Navigate } from "react-router-dom";
import react, { useEffect, useState } from 'react';
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const PrivateRoutes = () => {

    
    const token = localStorage.getItem("token");
 
    
    

    useEffect(() => {


    }, []);

    return (
        <>
            {
                 (token? <Outlet /> : <Navigate to="/login" />) 

            }


        </>
    )


}


export default PrivateRoutes;