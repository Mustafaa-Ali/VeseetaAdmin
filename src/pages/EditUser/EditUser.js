
import * as React from 'react';
import { useState } from 'react';
import style from './EditUser.module.css';

import Swal from "sweetalert2";



function EditUser(props) {



    function showAlert(message, icon) {
        Swal.fire({
            title: message,
            icon: icon,
            showConfirmButton: false,
            timer: 2000
        });
    }


    function close(e) {
        e.preventDefault();
        let addUser = document.getElementById("add_User");
        addUser.classList.add("d-none");
    }


    return (
        <>
            {/* <SideBar /> */}
            <div className={`${style.contain}`}>
                <div className="row justify-content-center  mx-1 mb-5">
                    <div className="col-lg-12 mb-4">
                        <div className={` ${style.pull_left}`}>
                            <h2>Add User</h2>
                        </div>
                    </div>

                    <form className={`${style.create_accont}`}>

                        <div className="row">
                            <div className={` col-12`}>
                                <button className={`${style.pull_right} fa-solid fa-square-xmark fs-4  text-danger`} style={{ border: "none" }} onClick={close}> </button>
                            </div>

                            <div className="col-12 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>User Name:</strong>
                                    <input type="text"

                                        className="form-control" placeholder="Category Name" />

                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                                <button type="submit" className={`btn ${style.btnCreate} mb-3`}>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditUser;


