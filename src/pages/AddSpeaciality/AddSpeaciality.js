import * as React from 'react';
import { useState } from 'react';
import style from './AddSpeaciality.module.css';

import Swal from "sweetalert2";
import { db, auth } from '../../Firebase/Firebase';
import { collection, addDoc } from "firebase/firestore";
import { useTranslation } from 'react-i18next';

function AddSpeaciality(props) {

    const { t } = useTranslation();
    const [Name, setName] = useState('')
    const [imgUrl, setimgUrl] = useState('')


    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "Speciality"), { Name, imgUrl });
            console.log("Document written with ID: ", docRef.id);
            let addSpeaciality = document.getElementById("add_speaciality");

            showAlert("Speaciality addwe successfully", "success")
            addSpeaciality.classList.add("d-none");

        } catch (e) {
            console.error("Error adding document: ", e);
            showAlert("Speaciality added failed", "error")
        }

        e.target.reset();
    };
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
        let addSpeaciality = document.getElementById("add_speaciality");
        addSpeaciality.classList.add("d-none");
    }


    return (
        <>

            <div className={`${style.contain}`}>
                <div className="row justify-content-center  mx-1 mb-5">
                    <div className="col-lg-12 mb-4">
                        <div className={` ${style.pull_left}`}>
                            <h2>{t("add")}</h2>
                        </div>
                    </div>

                    <form className={`${style.create_accont}`} onSubmit={handleFormSubmit} >

                        <div className="row">
                            <div className={` col-12`}>
                                <button className={`${style.pull_right} outline-none fa-solid fa-square-xmark fs-4  text-danger`} style={{ border: "none" }} onClick={close}> </button>
                            </div>

                            <div className="col-12 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>{t("item_name")}:</strong>
                                    <input type="text"
                                        onChange={(e) => {
                                            setName(e.target.value)
                                        }}
                                        className="form-control" placeholder={t("item_name")} />

                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>{t(("item_img"))}:</strong>
                                    <input type="text"
                                        onChange={(e) => {
                                            setimgUrl(e.target.value)
                                        }}
                                        className="form-control" placeholder={t(("item_img"))}/>

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

export default AddSpeaciality;


