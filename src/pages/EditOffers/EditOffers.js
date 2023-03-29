
import * as React from 'react';
import { useState } from 'react';
import style from './EditOffers.module.css';

import Swal from "sweetalert2";



function EditOffers(props) {



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
        let editOffers = document.getElementById("edit_offers");
        editOffers.classList.add("d-none");
    }


    return (
        <>
            {/* <SideBar /> */}
            <div className={`${style.contain}`}>
                <div className="row justify-content-center  mx-1 mb-5">
                    <div className="col-lg-12 mb-4">
                        <div className={` ${style.pull_left}`}>
                            <h2>Edit Offers</h2>
                        </div>
                    </div>

                    <form className={`${style.create_accont}`}>

                        <div className="row">
                            <div className={` col-12 text-end`}>
                                <button className={`${style.pull_right} outline-none fa-solid fa-square-xmark fs-4  text-danger`} style={{ border: "none" }} onClick={close}> </button>
                            </div>

                            <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>Offers Name:</strong>
                                    <input type="text"
                                        
                                        className="form-control" placeholder="Offers Name" />

                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>Offers Img Url:</strong>
                                    <input type="text"

                                        className="form-control" placeholder="Offers Img Url" />

                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>Doctor Name</strong>
                                    <input type="text"
                                        
                                        className="form-control" placeholder="Doctor Name" />

                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>Doctor Img Url</strong>
                                    <input type="text"
                                        
                                        className="form-control" placeholder="Doctor Img" />

                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>Available</strong>
                                    <div className='row mb-3'>
                                        <div className='col-6'>
                                            <input type="radio" id="true" name="available" value="true" className='mx-2'
                                                checked/>
                                                 
                                            <label for="true">True</label>
                                        </div>

                                        <div className='col-6'>
                                            <input type="radio" id="false" name="available" value="false" className='mx-2'/>
                                                
                                            <label for="false">False</label>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>Price</strong>
                                    <input type="number"
                                       
                                        className="form-control" placeholder="Price" />

                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>Discount</strong>
                                    <input type="number"
                                        
                                        className="form-control" placeholder="Discount" />

                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>Booked</strong>
                                    <input type="number"
                                        
                                        className="form-control" placeholder="Booked" />

                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>Booking Date</strong>
                                    <input type="date"
                                        
                                        className="form-control" placeholder="Booking Date" />

                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>Info</strong>
                                    <input type="text"
                                        
                                        className="form-control" placeholder="Info" />

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

export default EditOffers;


