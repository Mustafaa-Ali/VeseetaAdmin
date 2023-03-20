
import * as React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import style from './Speaciality.module.css';
import { useState, useEffect, useRef } from 'react';

import AddSpeaciality from './../AddSpeaciality/AddSpeaciality';
import EditSpeaciality from './../EditSpeaciality/EditSpeaciality';
import Swal from "sweetalert2";
import '../../index.css'


const Speaciality =() =>{

  
    function afterDelete(message, icon) {
        Swal.fire({
            title: message,
            icon: icon,
            showConfirmButton: false,
            timer: 1500
        });
    }


    function DeleteAlert(id) {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
               
            }
        })
    }









 
    useEffect(() => {
      
    }, []);




    return (
        <>
          
            <Sidebar />
            <section className='page-section py-2'>
                <div className='container px-3 min-vh-100' >
                    <div className='page_content'>
                        <div className="">
                            <div className="row justify-content-center mx-2">
                                <div className="col-lg-12 row my-4">
                                    <div className='col-6 p-0'>
                                        <h2 >Speaciality</h2>
                                    </div>
                                    <div className={`${style.pull_right} col-6 p-0`}>
                                        <Link className={` btn ${style.btnCreate} float-end`} type="button" onClick={() => {
                                            let addSpeaciality = document.getElementById("add_speaciality");
                                            addSpeaciality.classList.remove("d-none");

                                            let editSpeaciality = document.getElementById("edit_speaciality");
                                            if (editSpeaciality.classList.contains('d-none') === false) {
                                                editSpeaciality.classList.add("d-none");
                                            }
                                        }}>  Add New Speaciality</Link>
                                    </div>
                                    <br />
                                    <br />
                                </div>
                            </div>

                            <div id="add_speaciality" className='d-none'>
                                <AddSpeaciality/>
                            </div>


                      
                            <div id="edit_speaciality" className='d-none'>
                                <EditSpeaciality  />
                            </div>


                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                   
                                    <div className="table-responsive table-responsive-data2" style={{ maxHeight: "100vh" }}>
                                        <table  className={`table ${style.table_data2}  `} >
                                            <thead className={`${style.thead}`}>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Speaciality Name </th>
                                                    <th>Speaciality Img URL </th>


                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>


                                              

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </section>
          
        </>
    )
}

export default Speaciality;


