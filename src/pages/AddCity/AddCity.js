
import * as React from 'react';
import { useState } from 'react';
import style from './AddCity.module.css';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { db, auth } from '../../Firebase/Firebase';
import { collection, addDoc} from "firebase/firestore";

function AddCity(props){
 
   const [Name, setName] = useState('')

   const navigate = useNavigate()

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
                const docRef = await addDoc(collection(db, "City"), {Name});
                console.log("Document written with ID: ", docRef.id);
                let addCity = document.getElementById("add_city");
                showAlert("City added successfully", "success")
                addCity.classList.add("d-none");
        } catch (e) {
                console.error("Error adding document: ", e);
        }

        e.target.reset();
    };
    
    function showAlert(message,icon){
        Swal.fire({
            title: message,
            icon: icon,
            showConfirmButton: false,
            timer: 2000
          });
    } 
   console.log("city: " + Name)
    
    function close(e){
        e.preventDefault();
        let addCity = document.getElementById("add_city");
        addCity.classList.add("d-none");
      }


    return(
    <>
   
    <div className={`${style.contain}`}>
        <div className="row justify-content-center  mx-1 mb-5">
            <div className="col-lg-12 mb-4">
                <div className={` ${style.pull_left}`}>
                    <h2>Add City</h2>
                </div>
            </div>

            <form className={`${style.create_accont}`} onSubmit={handleFormSubmit}>
               
                <div className="row">
                <div  className={` col-12`}>
                    <button className={`${style.pull_right} outline-none fa-solid fa-square-xmark fs-4  text-danger`} style={{border:"none"}} onClick={close}> </button>
                </div>
                    
                    <div className="col-12 mb-3">
                        <div className="form-group">
                            <strong className='d-block mb-2'>City Name:</strong>
                            <input type="text"  
                             onChange={(e)=>{
                                setName(e.target.value);
                             }}
                              className="form-control" placeholder="City Name" />
                                    
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

export default AddCity;


