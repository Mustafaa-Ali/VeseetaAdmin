import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgetPass.css';

import { db, auth } from '../../Firebase/Firebase';

import '../../index.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
const ForgetPass = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function showAlert(message, icon) {
        Swal.fire({
            title: message,
            icon: icon,
            showConfirmButton: false,
            timer: 2000
        });
    }
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handlePasswordReset = (email) => {
        auth.sendPasswordResetEmail(email)
            .then(() => {
                showAlert("Password reset email sent", "success")
                navigate("/login");
            })
            .catch((error) => {
            showAlert(" An error occurred while sending the password reset email", "error")
            });
    };

    return (
        <>
            <div className=' min-vh-100  page-section d-flex align-items-center'>
                <div class="card text-center  " id="sin">
                    <div class="card-header" style={{ backgroundColor: "#0d6efd", color: "white" }}>
                        Reset Your Password
                    </div><br />
                    <div class="container py-5">
          
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handlePasswordReset(email);
                        }}>
                            <input type="email" style={{ width: "75%", margin: "0 auto" }}
                                    className="form-control" id="email" name="email"placeholder='Enter Your Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                            <button type="submit" className='btn btn-danger my-3'>Reset Password</button>
                        </form>
                    </div>

                </div>


            </div>
        </>
    );
}

export default ForgetPass;
