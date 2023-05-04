import * as React from 'react';
import { useState, useEffect } from 'react';
import style from './EditUser.module.css';

import Swal from "sweetalert2";

import { db, auth } from '../../Firebase/Firebase';
import { useTranslation } from 'react-i18next';
function EditUser(props) {
    const { t } = useTranslation();
    const [data, setData] = useState(null);
    const [Name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [uName, setUName] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState();
    const [status, setStatus] = useState();

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
        db.collection("users")
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    const data = doc.data();
                    console.log("dataaaaaaaaaaaaaaa", data)
                    setData(data);
                    setName(data.Name);
                    setEmail(data.email);
                    setUName(data.Name);
                    setCity(data.City);
                    setPhone(data.Phone);
                    setStatus(data.status);
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
            db.collection("users")
                .doc(id)
                .update({
                    // Name: Name,
                    email: email,
                    // UName: uName,
                    // City: city,
                    // Phone: phone,
                    Status:status
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
                            <h2>View</h2>
                        </div>
                    </div>

                    <form className={`${style.create_accont}`} onSubmit={handleEditData}>

                        <div className="row">
                            <div className={` col-12`}>
                                <button className={`${style.pull_right} fa-solid fa-square-xmark fs-4  text-danger`} style={{ border: "none" }} onClick={close}> </button>
                            </div>

                            {/* <div className="col-12 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>{t("item_name")}:</strong>
                                    <input type="text" value={Name} disabled
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                        className="form-control" placeholder={t("item_name")} />

                                </div>
                            </div> */}

                            <div className="col-12 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>{t("item_email")}:</strong>
                                    <input type="text" value={email} disabled
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        className="form-control" placeholder={t("item_email")} />

                                </div>
                            </div>

                            {/* <div className="col-12 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>{t("item_city")}:</strong>
                                    <input type="text" value={city} disabled
                                        onChange={(e) => {
                                            setCity(e.target.value);
                                        }}
                                        className="form-control" placeholder={t("item_city")} />

                                </div>
                            </div> */}

                            {/* <div className="col-12 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>{t("item_phone")}:</strong>
                                    <input type="text" value={phone} disabled
                                        onChange={(e) => {
                                            setPhone(e.target.value);
                                        }}
                                        className="form-control" placeholder={t("item_phone")} />

                                </div>
                            </div> */}
                            <div className="col-12 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>{t("status")}:</strong>
                                    <select className='form-control' onChange={(e)=>{
                                        console.log("e", e.target.value)
                                        setStatus(e.target.value)
                                    }}>
                                        <option selected={status === "Active"} value="Active"> {t("active")}</option>
                                        <option selected={status === "Block"} value="Block">{t("block")}</option>
                                    </select>
                                    {/* <input type="text" value={phone}
                                        onChange={(e) => {
                                            setPhone(e.target.value);
                                        }}
                                        className="form-control" placeholder="User Phone" /> */}

                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                                <button type="submit" className={`btn ${style.btnCreate} mb-3`}>{t("submit")}</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditUser;


