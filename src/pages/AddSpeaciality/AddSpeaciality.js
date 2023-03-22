
import * as React from 'react';
import { useState } from 'react';
import style from './AddSpeaciality.module.css';

import Swal from "sweetalert2";



function AddSpeaciality(props){
 
   
    
    function showAlert(message,icon){
        Swal.fire({
            title: message,
            icon: icon,
            showConfirmButton: false,
            timer: 2000
          });
    } 
   
    
    function close(e){
        e.preventDefault();
        let addSpeaciality = document.getElementById("add_speaciality");
        addSpeaciality.classList.add("d-none");
      }


    return(
    <>
   
    <div className={`${style.contain}`}>
        <div className="row justify-content-center  mx-1 mb-5">
            <div className="col-lg-12 mb-4">
                <div className={` ${style.pull_left}`}>
                    <h2>Add Speaciality</h2>
                </div>
            </div>

            <form className={`${style.create_accont}`}>
               
                <div className="row">
                <div  className={` col-12`}>
                    <button className={`${style.pull_right} outline-none fa-solid fa-square-xmark fs-4  text-danger`} style={{border:"none"}} onClick={close}> </button>
                </div>
                    
                    <div className="col-12 mb-3">
                        <div className="form-group">
                            <strong className='d-block mb-2'>Speaciality Name:</strong>
                            <input type="text"  
                           
                              className="form-control" placeholder="Speaciality Name" />
                                    
                        </div>
                    </div>
                    <div className="col-12 mb-3">
                        <div className="form-group">
                            <strong className='d-block mb-2'>Speaciality Img URL:</strong>
                            <input type="text"  
                           
                              className="form-control" placeholder="Speaciality Img URL" />
                                    
                        </div>
                    </div>
                   
               
                  
                    <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                        <button type="submit" className= {`btn ${style.btnCreate} mb-3`}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    </>
    )
}

export default AddSpeaciality;


