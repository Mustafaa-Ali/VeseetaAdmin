
import * as React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import style from './Speaciality.module.css';
import { useState, useEffect, useRef } from 'react';

import AddSpeaciality from './../AddSpeaciality/AddSpeaciality';
import EditSpeaciality from './../EditSpeaciality/EditSpeaciality';
import Swal from "sweetalert2";
import '../../index.css'
import { db, auth } from '../../Firebase/Firebase';
import { useSelector } from 'react-redux';
const Speaciality = () => {
    const [Speaciality, setSpeaciality] = useState([])
    const [speacialityId, setSpeacialityId] = useState('')
    const user = useSelector(state => state.user.user);
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
                const speacialityRef = db.collection('Speciality').doc(id);
                speacialityRef.delete()
                    .then(() => {
                        setSpeaciality(Speaciality.filter(d => d.id !== id));
                        afterDelete("Speciality deleted successfully.", "success");
                    })
                    .catch((error) => {
                        console.log(error);
                        afterDelete("Failed to delete Speciality.", "error");
                    });
            }
        })
    }



    // const handleSubmit = async () => {
    //     try {
    //         await auth.signInWithEmailAndPassword("amanyasad88@gmail.com", "Amany@1234");

    //     } catch (error) {
    //         console.error(error);
    //     }
    // };







    const fetchSpeaciality = async () => {

        // const user = auth.currentUser;
        console.log("user", user);
        if (user) {
            try {
                const SpeacialityRef = db.collection('Speciality');
                const SpeacialitySnapshot = await SpeacialityRef.get();
                const SpeacialityData = SpeacialitySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

                console.log("Speaciality", SpeacialityData);
                setSpeaciality(SpeacialityData);
            } catch (error) {
                console.log(error);
            }


        }
    };






    useEffect(() => {

        // handleSubmit();
        fetchSpeaciality();

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
                                        }}>  + Speaciality</Link>
                                    </div>
                                    <br />
                                    <br />
                                </div>
                            </div>

                            <div id="add_speaciality" className='d-none'>
                                <AddSpeaciality fetchData={fetchSpeaciality} />
                            </div>



                            <div id="edit_speaciality" className='d-none'>
                                <EditSpeaciality id={speacialityId} fetchData={fetchSpeaciality} />
                            </div>


                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">

                                    <div className="table-responsive table-responsive-data2" style={{ maxHeight: "100vh" }}>
                                        <table className={`table ${style.table_data2}  `} >
                                            <thead className={`${style.thead}`}>
                                                <tr>
                                                    <th className='text-white'>Id</th>
                                                    <th className='text-white'>Speaciality Name </th>
                                                    <th className='text-white'>Speaciality Img URL </th>


                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Speaciality.map((Speaciality, index) => {
                                                    console.log(Speaciality)
                                                    return (

                                                        <>
                                                            <tr key={index} className={`${style.tr_shadow}`}>
                                                                <td>{index + 1}</td>
                                                                <td>{Speaciality.Name}</td>
                                                                <td><img src={Speaciality.imgUrl} width={100} height={100} alt="" /></td>

                                                                <td>
                                                                    <div className="d-flex justify-content-around">
                                                                        <Link className="item p-2" type='button' onClick={() => {
                                                                            window.scrollTo(0, 0);
                                                                            setSpeacialityId(Speaciality.id);
                                                                            let editSpeaciality = document.getElementById("edit_speaciality");
                                                                            editSpeaciality.classList.remove("d-none");

                                                                            let addSpeaciality = document.getElementById("add_speaciality");
                                                                            if (addSpeaciality.classList.contains('d-none') === false) {
                                                                                addSpeaciality.classList.add("d-none");
                                                                            }
                                                                        }}>
                                                                            <i className={`fa-solid fa-pen   ${style.text_creat}`} ></i>
                                                                        </Link>

                                                                        <form>
                                                                            <Link type='button' className="item p-2"
                                                                                onClick={() => {
                                                                                    DeleteAlert(Speaciality.id)
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

export default Speaciality;


