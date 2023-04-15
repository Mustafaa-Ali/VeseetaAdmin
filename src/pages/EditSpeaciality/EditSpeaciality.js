
import * as React from 'react';
import { useState, useEffect } from 'react';
import style from './EditSpeaciality.module.css';

import Swal from "sweetalert2";

import { db, auth } from '../../Firebase/Firebase';
import { useTranslation } from 'react-i18next';
function EditSpeaciality(props) {

    const { t } = useTranslation();
    const [data, setData] = useState()
    const [Name, setName] = useState('')
    const [imgUrl, setimgUrl] = useState('')

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
        let editSpeaciality = document.getElementById("edit_speaciality");
        editSpeaciality.classList.add("d-none");
    }


    const getOne = () => {
        const id = props.id;
        console.log("idd", id)
        db.collection("Speciality")
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    const data = doc.data();
                    console.log("dataaaaaaaaaaaaaaa", data)
                    setData(data);
                    setName(data.Name)
                    setimgUrl(data.imgUrl)
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
            db.collection("Speciality")
                .doc(id)
                .update({
                    Name: Name,
                    imgUrl: imgUrl

                })
                .then(() => {
                    console.log("Document successfully updated!");
                    showAlert("Document successfully updated!", "success");
                    let editSpeaciality = document.getElementById("edit_speaciality");
                    editSpeaciality.classList.add("d-none");
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

            <div className={`${style.contain}`}>
                <div className="row justify-content-center  mx-1 mb-5">
                    <div className="col-lg-12 mb-4">
                        <div className={` ${style.pull_left}`}>
                            <h2>{t("edit")} </h2>
                        </div>
                    </div>

                    <form className={`${style.create_accont}`} onSubmit={handleEditData} >

                        <div className="row">
                            <div className={` col-12`}>
                                <button className={`${style.pull_right} outline-none fa-solid fa-square-xmark fs-4  text-danger`} style={{ border: "none" }} onClick={close}> </button>
                            </div>

                            <div className="col-12 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'> {t("doctor_name")}:</strong>
                                    <input type="text"
                                        value={Name}
                                        onChange={(e) => {
                                            setName(e.target.value)
                                        }}
                                        className="form-control" placeholder={t("doctor_name")} />

                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'> {t(("item_img"))}:</strong>
                                    <input type="text"
                                        value={imgUrl}
                                        onChange={(e) => {
                                            setimgUrl(e.target.value)
                                        }}
                                        className="form-control" placeholder={t(("item_img"))} />

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

export default EditSpeaciality;


