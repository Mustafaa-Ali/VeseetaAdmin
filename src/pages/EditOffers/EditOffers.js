
import * as React from 'react';
import { useState, useEffect } from 'react';
import style from './EditOffers.module.css';

import Swal from "sweetalert2";

import { db, auth } from '../../Firebase/Firebase';
import { useTranslation } from 'react-i18next';
function EditOffers(props) {

    const { t } = useTranslation();

    console.log("props", props)
    const [data, setData] = useState(null);
    const [SessionName, setSessionName] = useState('')
    const [Price, setPrice] = useState(0)
    const [Info, setInfo] = useState('')
    const [ImgUrl, setImgUrl] = useState('')
    const [DoctorName, setDoctorName] = useState('')
    const [DoctorImg, setDoctorImg] = useState('')
    const [Discount, setDiscount] = useState(0)
    const [Booked, setBooked] = useState(0)
    const [Available, setAvailable] = useState()
    const [BookingDate, setBookingDate] = useState('')

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
        let editOffers = document.getElementById("edit_offers");
        editOffers.classList.add("d-none");
    }

    const getOne = () => {
        const id = props.id;
        console.log("idd", id)
        db.collection("Offers")
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    const data = doc.data();
                    console.log("dataaaaaaaaaaaaaaa", data)
                    setData(data);
                    setSessionName(data.SessionName)
                    setAvailable(data.Available)
                    setBooked(data.Booked)
                    setBookingDate(data.BookingDate)
                    setDiscount(data.Discount)
                    setInfo(data.Info)
                    setImgUrl(data.ImgUrl)
                    setDoctorName(data.DoctorName)
                    setPrice(data.Price)
                    setDoctorImg(data.DoctorImg)
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
            db.collection("Offers")
                .doc(id)
                .update({
                    SessionName: SessionName,
                    DoctorImg: DoctorImg,
                    DoctorName: DoctorName,
                    Discount: Discount,
                    Price: Price,
                    ImgUrl: ImgUrl,
                    Available: Available,
                    Info: Info,
                    Booked: Booked,
                    BookingDate: BookingDate,

                })
                .then(() => {
                    console.log("Document successfully updated!");
                    showAlert("Document successfully updated!", "success");
                    let editOffers = document.getElementById("edit_offers");
                    editOffers.classList.add("d-none");
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
                            <h2>{t("edit")} </h2>
                        </div>
                    </div>

                    <form className={`${style.create_accont}`} onSubmit={handleEditData}>

                        <div className="row">
                            <div className={` col-12 text-end`}>
                                <button className={`${style.pull_right} outline-none fa-solid fa-square-xmark fs-4  text-danger`} style={{ border: "none" }} onClick={close}> </button>
                            </div>

                            <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'> {t("item_name")}:</strong>
                                    <input type="text"
                                        value={SessionName}
                                        onChange={(e) => {
                                            setSessionName(e.target.value);
                                        }}
                                        className="form-control" placeholder={t("item_name")} />

                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>{t(("item_img"))}:</strong>
                                    <input type="text"
                                        onChange={(e) => {
                                            setImgUrl(e.target.value)
                                        }}
                                        value={ImgUrl}
                                        className="form-control" placeholder={t(("item_img"))} />

                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>{t("doctor_name")}</strong>
                                    <input type="text"
                                        value={DoctorName}
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
                                        value={DoctorImg}
                                        onChange={(e) => {
                                            setDoctorImg(e.target.value);
                                        }}
                                        className="form-control" placeholder={t("doctor_img")}/>

                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>{t("item_available")} </strong>
                                    <div className='row mb-3'>
                                        <div className='col-6'>
                                            {console.log("Available", Available)}
                                            {console.log("Available true", Available == "true")}
                                            <input type="radio" id="true" name="available" className='mx-2'
                                                value='true'
                                                
                                                checked={Available == "true"} onChange={(e) => {
                                                    setAvailable(e.target.value);
                                                }} />
                                            <label for="true">{t("item_available")} </label>
                                        </div>

                                        <div className='col-6'>
                                            <input type="radio" id="false" name="available" className='mx-2'
                                                value='false'
                                                
                                               checked={Available === false}  onChange={(e) => {
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
                                        value={Price}
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
                                        value={Discount}
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
                                        value={Booked}
                                        onChange={(e) => {
                                            setBooked(e.target.value);
                                        }}
                                        className="form-control" placeholder={t("book")} />

                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <div className="form-group">
                                    <strong className='d-block mb-2'>{t("booking_date")}</strong>
                                    <input type="date"
                                        value={BookingDate}
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
                                        value={Info}
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

export default EditOffers;


