import * as React from 'react';
import { useState } from 'react';
import style from './AddOffers.module.css';

import Swal from "sweetalert2";

import { db, auth } from '../../Firebase/Firebase';
import { collection, addDoc } from "firebase/firestore";
import { useTranslation } from 'react-i18next';

function AddOffers(props) {
    const { t } = useTranslation();
    const [SessionName, setSessionName] = useState('')
    const [Price, setPrice] = useState(0)
    const [Info, setInfo] = useState('')
    const [ImgUrl, setImgUrl] = useState('')
    const [DoctorName, setDoctorName] = useState('')
    const [DoctorImg, setDoctorImg] = useState('')
    const [Discount, setDiscount] = useState(0)
    const [Booked, setBooked] = useState(0)
    const [Available, setAvailable] = useState('')
    const [BookingDate, setBookingDate] = useState('')




    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "Offers"), {
                SessionName, Price, Info, ImgUrl,
                DoctorName, DoctorName, DoctorImg, Discount, Booked, Available, BookingDate
            });
            console.log("Document written with ID: ", docRef.id);
            let addoffers = document.getElementById("add_offers");
            showAlert("Offer added successfully", "success")
            addoffers.classList.add("d-none");
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
        let addOffers = document.getElementById("add_offers");
        addOffers.classList.add("d-none");
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

                    <form className={`${style.create_accont}`} onSubmit={handleFormSubmit}>

                        <div className="row">
                            <div className={` col-12 text-end`}>
                                <button className={`${style.pull_right} outline-none fa-solid fa-square-xmark fs-4  text-danger`} style={{ border: "none" }} onClick={close}> </button>
                            </div>

                            <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>{t("item_name")}:</strong>
                                    <input type="text"
                                        onChange={(e) => {
                                            setSessionName(e.target.value);
                                        }}
                                        className="form-control" placeholder={t("item_name")} />

                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'> {t(("item_img"))}:</strong>
                                    <input type="text"
                                        onChange={(e) => {
                                            setImgUrl(e.target.value)
                                        }}
                                        className="form-control" placeholder={t(("item_img"))} />

                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>{t("doctor_name")}</strong>
                                    <input type="text"
                                        onChange={(e) => {
                                            setDoctorName(e.target.value);
                                        }}
                                        className="form-control" placeholder={t("doctor_name")} />

                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>{t("doctor_img")}</strong>
                                    <input type="text"
                                        onChange={(e) => {
                                            setDoctorImg(e.target.value);
                                        }}
                                        className="form-control" placeholder={t("doctor_img")} />

                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>{t("item_available")} </strong>
                                    <div className='row mb-3'>
                                        <div className='col-6'>
                                            <input type="radio" id="true" name="available" value="true" className='mx-2'
                                                checked
                                                onChange={(e) => {
                                                    setAvailable(e.target.value);
                                                }} />
                                            <label for="true">{t("item_available")} </label>
                                        </div>

                                        <div className='col-6'>
                                            <input type="radio" id="false" name="available" value="false" className='mx-2'
                                                onChange={(e) => {
                                                    setAvailable(e.target.value);
                                                }} />
                                            <label for="false">{t("item_not_available")} </label>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>{t("item_price")}</strong>
                                    <input type="number"
                                        onChange={(e) => {
                                            setPrice(e.target.value);
                                        }}
                                        className="form-control" placeholder={t("item_price")} />

                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>{t("item_dicount")}</strong>
                                    <input type="number"
                                        onChange={(e) => {
                                            setDiscount(e.target.value);
                                        }}
                                        className="form-control" placeholder={t("item_dicount")} />

                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>{t("book")}</strong>
                                    <input type="number"
                                        onChange={(e) => {
                                            setBooked(e.target.value);
                                        }}
                                        className="form-control" placeholder={t("book")}/>

                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>{t("booking_date")}</strong>
                                    <input type="date"
                                        onChange={(e) => {
                                            setBookingDate(e.target.value);
                                        }}
                                        className="form-control" placeholder={t("booking_date")} />

                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>{t("info")}</strong>
                                    <input type="text"
                                        onChange={(e) => {
                                            setInfo(e.target.value);
                                        }}
                                        className="form-control" placeholder={t("info")} />

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

export default AddOffers;


