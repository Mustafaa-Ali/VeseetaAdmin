import * as React from 'react';
import { useState, useEffect } from 'react';
import style from './EditDoctor.module.css';

import Swal from "sweetalert2";

import { db, auth } from '../../Firebase/Firebase';


function EditDoctor(props) {

    const [data, setData] = useState(null);
    const [Name, setName] = useState('');
    const [ImgUrl, setImgUrl] = useState('');
    const [Speciality, setSpeciality] = useState('');
    const [City, setCity] = useState('');
    const [Phone, setPhone] = useState();
    const [Waitingtime, setWaitingtime] = useState('');
    const [Rate, setRate] = useState();
    const [Location, setLocation] = useState();
    const [ExaminationFees, setExaminationFees] = useState();
    const [Availability, setAvailability] = useState();
    const [About, setAbout] = useState();


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
        let editDoctor = document.getElementById("edit_Doctor");
        editDoctor.classList.add("d-none");
    }

    const getOne = () => {
        const id = props.id;
        console.log("idd", id)
        console.log("props", props)
        db.collection("Doctor")
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    const data = doc.data();
                    console.log("dataaaaaaaaaaaaaaa", data)
                    setData(data);
                    setName(data.Name);
                    setImgUrl(data.ImgUrl);
                    setCity(data.City);
                    setSpeciality(data.Speciality);
                    setPhone(data.Phone);
                    setWaitingtime(data.Waitingtime);
                    setRate(data.Rate);
                    setAbout(data.About);
                    setAvailability(data.Availability);
                } else {
                    console.log("No such document!");
                }
            })
            .catch((error) => {
                console.log("Error getting document:", error);
            });

    }

    const handleEditData = (event) => {
        event.preventDefault();

        if (props.id) {
            const id = props.id;
            db.collection("Doctor")
                .doc(id)
                .update({
                    Name: Name,
                    ImgUrl: ImgUrl,
                    Speciality: Speciality,
                    City: City,
                    Phone: Phone,
                    Waitingtime: Waitingtime,
                    Rate: Rate,
                    ExaminationFees: ExaminationFees,
                    Availability: Availability,
                    About: About,
                    Location: Location,

                })
                .then(() => {
                    console.log("Document successfully updated!");
                    showAlert("Document successfully updated!", "success");
                    let editDoctors = document.getElementById("edit_Doctor");
                    editDoctors.classList.add("d-none");
                    props.fetchData();
                })
                .catch((error) => {
                    console.error("Error updating document: ", error);
                    showAlert("Error updating document", 'error')
                });
        }

    };

    useEffect(() => {
        if (props.id) {
            console.log("from useeffect")

            getOne();


        }


    }, [props.id]);

    return (
        <>
            {/* <SideBar /> */}
            <div className={`${style.contain}`}>
                <div className="row justify-content-center  mx-1 mb-5">
                    <div className="col-lg-12 mb-4">
                        <div className={` ${style.pull_left}`}>
                            <h2>View Doctor</h2>
                        </div>
                    </div>

                    <form className={`${style.create_accont}`} onSubmit={handleEditData}>

                        <div className="row">
                            <div className={` col-12 `}>
                                <button className={`${style.pull_right} outline-none fa-solid fa-square-xmark fs-4  text-danger`} style={{ border: "none" }} onClick={close}> </button>
                            </div>
                            <div className="col-12  mb-3">
                                <div className="form-group d-flex justify-content-center">

                                    <img  className=" rounded-circle " src={ImgUrl} alt=""/>
                                    {/* <strong className='d-block mb-2'>Doctor Image URL:</strong>
                                    <input type="text" value={ImgUrl} disabled
                                        onChange={(e) => {
                                            setImgUrl(e.target.value);
                                        }}
                                        className="form-control" placeholder="Doctor Image URl" /> */}

                                </div>
                            </div>
                            <div className="col-lg-6  mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>Doctor Name:</strong>
                                    <input type="text" value={Name} disabled
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                        className="form-control" placeholder="Doctor Name" />

                                </div>
                            </div>
                            <div className="col-lg-6  mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>Doctor Speciality:</strong>
                                    <input type="text" value={Speciality} disabled
                                        onChange={(e) => {
                                            setSpeciality(e.target.value);
                                        }}
                                        className="form-control" placeholder="Doctor Speciality" />

                                </div>
                            </div>
                            <div className="col-lg-6  mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>Doctor City:</strong>
                                    <input type="text" value={City} disabled
                                        onChange={(e) => {
                                            setCity(e.target.value);
                                        }}
                                        className="form-control" placeholder="Doctor City" />

                                </div>
                            </div>
                            <div className="col-lg-6  mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>Doctor Phone:</strong>
                                    <input type="text" value={Phone} disabled
                                        onChange={(e) => {
                                            setPhone(e.target.value);
                                        }}
                                        className="form-control" placeholder="Doctor Phone" />

                                </div>
                            </div>
                            
                            <div className="col-lg-6  mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>Location:</strong>
                                    <input type="text" value={Location} disabled
                                        onChange={(e) => {
                                            setLocation(e.target.value);
                                        }}
                                        className="form-control" placeholder="Location" />

                                </div>
                            </div>
                            <div className="col-lg-6  mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>ExaminationFees:</strong>
                                    <input type="text" value={ExaminationFees} disabled
                                        onChange={(e) => {
                                            setExaminationFees(e.target.value);
                                        }}
                                        className="form-control" placeholder="ExaminationFees" />

                                </div>
                            </div>
                            <div className="col-lg-6  mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>Rate:</strong>
                                    <input type="text" value={Rate} disabled
                                        onChange={(e) => {
                                            setRate(e.target.value);
                                        }}
                                        className="form-control" placeholder="Rate" />

                                </div>
                            </div>
                            <div className="col-lg-6  mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>Waitingtime:</strong>
                                    <input type="text" value={Waitingtime} disabled
                                        onChange={(e) => {
                                            setWaitingtime(e.target.value);
                                        }}
                                        className="form-control" placeholder="Waitingtime" />

                                </div>
                            </div>
                            <div className="col-lg-6  mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>Availability:</strong>
                                    <input type="text" value={Availability} disabled
                                        onChange={(e) => {
                                            setAvailability(e.target.value);
                                        }}
                                        className="form-control" placeholder="Availability" />

                                </div>
                            </div>
                            <div className="col-lg-6  mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>About:</strong>
                                    <input type="text" value={About} disabled
                                        onChange={(e) => {
                                            setAbout(e.target.value);
                                        }}
                                        className="form-control" placeholder="About" />

                                </div>
                            </div>



                            {/* <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                                <button type="submit" className={`btn ${style.btnCreate} mb-3`}>Submit</button>
                            </div> */}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditDoctor;


