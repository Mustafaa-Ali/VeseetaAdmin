
import * as React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import style from './Doctors.module.css';
import { useState, useEffect, useRef } from 'react';

import AddDoctor from './../AddDoctor/AddDoctor';
import EditDoctor from './../EditDoctor/EditDoctor';
import Swal from "sweetalert2";
import '../../index.css'
import { db, auth } from '../../Firebase/Firebase';


const Doctors = () => {


    const [Doctor, setDoctor] = useState([])
    const [DoctorId, setDoctorId] = useState([])

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


    const handleSubmit = async () => {
        try {
            await auth.signInWithEmailAndPassword("amanyasad88@gmail.com", "Amany@1234");

        } catch (error) {
            console.error(error);
        }
    };







    const fetchDoctor = async () => {
        
        const user = auth.currentUser;
        console.log("user", user);
        if (user) {
            try {
                const DoctorRef = db.collection('Doctor');
                const DoctorSnapshot = await DoctorRef.get();
                const DoctorData = DoctorSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

                console.log("Doctor", DoctorData);
                setDoctor(DoctorData);
            } catch (error) {
                console.log(error);
            }


        }
    };

    useEffect(() => {
        handleSubmit();
        fetchDoctor();
    }, []);


    console.log("Doctor", Doctor)

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
                                        <h2 >Doctor</h2>
                                    </div>
                                    <div className={`${style.pull_right} col-6 p-0`}>
                                        <Link className={` btn ${style.btnCreate} float-end`} type="button" onClick={() => {
                                            let addDoctor = document.getElementById("add_Doctor");
                                            addDoctor.classList.remove("d-none");

                                            let editDoctor = document.getElementById("edit_Doctor");
                                            if (editDoctor.classList.contains('d-none') === false) {
                                                editDoctor.classList.add("d-none");
                                            }
                                        }}>  + Doctor</Link>
                                    </div>
                                    <br />
                                    <br />
                                </div>
                            </div>

                            <div id="add_Doctor" className='d-none'>
                                <AddDoctor />
                            </div>



                            <div id="edit_Doctor" className='d-none'>
                                <EditDoctor />
                            </div>


                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">

                                    <div className="table-responsive table-responsive-data2" style={{ maxHeight: "100vh" }}>
                                        <table className={`table ${style.table_data2}  `} >
                                            <thead className={`${style.thead} text-white`}>
                                                <tr>
                                                    <th className='text-white'>Id</th>
                                                    <th className='text-white'>Doctor Name </th>
                                                    <th className='text-white'>Doctor Image </th>
                                                    <th className='text-white'>Doctor Speciality </th>
                                                    <th className='text-white'>Doctor City </th>
                                                    <th className='text-white'>Doctor Phone </th>                                                    


                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Doctor.map((Doctor, index) => {
                                                    
                                                    return (
                                                        
                                                        <>
                                                            <tr key={index} className={`${style.tr_shadow}`}>
                                                                <td>{index + 1}</td>
                                                                <td>{Doctor.Name}</td>
                                                                <td><img src={Doctor.ImgUrl} width={100} height={100} alt=""/></td>
                                                                <td>{Doctor.Speciality}</td>
                                                                <td>{Doctor.City}</td>
                                                                <td>{Doctor.Phone}</td>
                                                             
                                                                <td>
                                                                    <div className="d-flex justify-content-around">
                                                                        <Link className="item p-2" type='button'  onClick={() => {
                                                                            window.scrollTo(0, 0);
                                                                            setDoctorId(Doctor.id);
                                                                            let editDoctor = document.getElementById("edit_Doctor");
                                                                            editDoctor.classList.remove("d-none");

                                                                            let addDoctor = document.getElementById("add_Doctor");
                                                                            if (addDoctor.classList.contains('d-none') === false) {
                                                                                addDoctor.classList.add("d-none");
                                                                            }
                                                                        }}>
                                                                            <i className={`fa-solid fa-pen   ${style.text_creat}`} ></i>
                                                                        </Link>

                                                                        <form>
                                                                            <Link type='button' className="item p-2"
                                                                                onClick={() => {
                                                                                    DeleteAlert(Doctor.id)
                                                                                }}>
                                                                                <i className="fa-solid fa-trash text-danger"></i>
                                                                            </Link>
                                                                        </form>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </>
                                                    )
                                                })}



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

export default Doctors;


