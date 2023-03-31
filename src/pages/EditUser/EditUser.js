import * as React from 'react';
import { useState, useEffect } from 'react';
import style from './EditUser.module.css';

import Swal from "sweetalert2";

import { db, auth } from '../../Firebase/Firebase';

function EditUser(props) {

    const [data, setData] = useState(null);
    const [Name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [uName, setUName] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState(0);

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
        let editUser = document.getElementById("edit_User");
        editUser.classList.add("d-none");
    }

    const getOne = () => {
        const id = props.id;
        console.log("idd", id)
        console.log("props", props)
        db.collection("Users")
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    const data = doc.data();
                    console.log("dataaaaaaaaaaaaaaa", data)
                    setData(data);
                    setName(data.Name);
                    setEmail(data.Email);
                    setUName(data.Name);
                    setCity(data.City);
                    setPhone(data.Phone);
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
            db.collection("Users")
                .doc(id)
                .update({
                    Name: Name,
                    email: email,
                    uName: uName,
                    city: city,
                    phone: phone
                })
                .then(() => {
                    console.log("Document successfully updated!");
                    showAlert("Document successfully updated!", "success");
                    let editUsers = document.getElementById("edit_User");
                    editUsers.classList.add("d-none");
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
                            <h2>Edit User</h2>
                        </div>
                    </div>

                    <form className={`${style.create_accont}`} onSubmit={handleEditData}>

                        <div className="row">
                            <div className={` col-12`}>
                                <button className={`${style.pull_right} fa-solid fa-square-xmark fs-4  text-danger`} style={{ border: "none" }} onClick={close}> </button>
                            </div>

                            <div className="col-12 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>Name:</strong>
                                    <input type="text"
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                        className="form-control" placeholder="Name" />

                                </div>
                            </div>

                            <div className="col-12 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>User Email:</strong>
                                    <input type="text"
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        className="form-control" placeholder="User Email" />

                                </div>
                            </div>

                            <div className="col-12 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>User City:</strong>
                                    <input type="text"
                                        onChange={(e) => {
                                            setCity(e.target.value);
                                        }}
                                        className="form-control" placeholder="User City" />

                                </div>
                            </div>

                            <div className="col-12 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>User Phone:</strong>
                                    <input type="text"
                                        onChange={(e) => {
                                            setPhone(e.target.value);
                                        }}
                                        className="form-control" placeholder="User Phone" />

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


