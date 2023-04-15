import * as React from 'react';
import { useState } from 'react';
import style from './AddDoctor.module.css';

import Swal from "sweetalert2";

import { db, auth } from '../../Firebase/Firebase';
import { collection, addDoc } from "firebase/firestore";
import { useTranslation } from 'react-i18next';
function AddDoctor(props) {

    const { t } = useTranslation();
    const [data, setData] = useState(null);
    const [Name, setName] = useState('');
    const [ImgUrl, setImgUrl] = useState('');
    const [Speciality, setSpeciality] = useState('');
    const [City, setCity] = useState('');
    const [Phone, setPhone] = useState();
    const [Waitingtime, setWaitingtime] = useState();
    const [Rate, setRate] = useState();
    const [location, setLocation] = useState();
    const [ExaminationFees, setExaminationFees] = useState();
    const [Availability, setAvailability] = useState();
    const [About, setAbout] = useState();


    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "Doctor"), { Name, Speciality, Phone, ImgUrl, City });
            console.log("Document written with ID: ", docRef.id);
            let addDoctor = document.getElementById("add_Doctor");
            showAlert("Doctor added successfully", "success")
            addDoctor.classList.add("d-none");
        } catch (e) {
            console.error("Error adding document: ", e);
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
        let addDoctor = document.getElementById("add_Doctor");
        addDoctor.classList.add("d-none");
    }


    return (
        <>

            <div className={`${style.contain}`}>
                <div className="row justify-content-center  mx-1 mb-5">
                    <div className="col-lg-12 mb-4">
                        <div className={` ${style.pull_left}`}>
                            <h2>{t("add")} </h2>
                        </div>
                    </div>

                    <form className={`${style.create_accont}`} onSubmit={handleFormSubmit}>

                        <div className="row">
                            <div className={` col-12 `}>
                                <button className={`${style.pull_right} outline-none fa-solid fa-square-xmark fs-4  text-danger`} style={{ border: "none" }} onClick={close}> </button>
                            </div>

                            <div className="col-lg-6  mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'> {t("item_name")}:</strong>
                                    <input type="text"
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                        className="form-control" placeholder={t("item_name")} />

                                </div>
                            </div>
                            <div className="col-lg-6  mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'> {t("item_speciality")}:</strong>
                                    <input type="text"
                                        onChange={(e) => {
                                            setSpeciality(e.target.value);
                                        }}
                                        className="form-control" placeholder={t("item_speciality")} />

                                </div>
                            </div>
                            <div className="col-lg-6  mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'> {t("item_city")}:</strong>
                                    <input type="text"
                                        onChange={(e) => {
                                            setCity(e.target.value);
                                        }}
                                        className="form-control" placeholder={t("item_city")} />

                                </div>
                            </div>
                            <div className="col-lg-6  mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'> {t("item_phone")}:</strong>
                                    <input type="text"
                                        onChange={(e) => {
                                            setPhone(e.target.value);
                                        }}
                                        className="form-control" placeholder={t("item_phone")} />

                                </div>
                            </div>
                            <div className="col-lg-6  mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'> {t("item_img")}:</strong>
                                    <input type="text"
                                        onChange={(e) => {
                                            setImgUrl(e.target.value);
                                        }}
                                        className="form-control" placeholder={t(("item_img"))} />

                                </div>
                            </div>
                            <div className="col-lg-6  mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>{t("location")}:</strong>
                                    <input type="text"
                                        onChange={(e) => {
                                            setLocation(e.target.value);
                                        }}
                                        className="form-control" placeholder={t("location")} />

                                </div>
                            </div>
                            <div className="col-lg-6  mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>{t("examination")}:</strong>
                                    <input type="text"
                                        onChange={(e) => {
                                            setExaminationFees(e.target.value);
                                        }}
                                        className="form-control" placeholder={t("examination")} />

                                </div>
                            </div>
                            <div className="col-lg-6  mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>{t("rate")}:</strong>
                                    <input type="text"
                                        onChange={(e) => {
                                            setRate(e.target.value);
                                        }}
                                        className="form-control" placeholder={t("rate")} />

                                </div>
                            </div>
                            <div className="col-lg-6  mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>{t("waiting_time")}:</strong>
                                    <input type="text"
                                        onChange={(e) => {
                                            setWaitingtime(e.target.value);
                                        }}
                                        className="form-control" placeholder={t("waiting_time")} />

                                </div>
                            </div>
                            <div className="col-lg-6  mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>{t("item_available")}:</strong>
                                    <input type="text"
                                        onChange={(e) => {
                                            setAvailability(e.target.value);
                                        }}
                                        className="form-control" placeholder={t("item_available")} />

                                </div>
                            </div>
                            <div className="col-12  mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>{t("about")}:</strong>
                                    <input type="text"
                                        onChange={(e) => {
                                            setAbout(e.target.value);
                                        }}
                                        className="form-control" placeholder={t("about")} />

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

export default AddDoctor;


