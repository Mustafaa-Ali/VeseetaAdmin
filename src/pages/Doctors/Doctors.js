import * as React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import style from './Doctors.module.css';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import AddDoctor from './../AddDoctor/AddDoctor';
import EditDoctor from './../EditDoctor/EditDoctor';
import Swal from "sweetalert2";
import '../../index.css'
import { db, auth } from '../../Firebase/Firebase';
import ReactPaginate from "react-paginate";
import { useTranslation } from 'react-i18next';
const Doctors = () => {


    const { t } = useTranslation();
    const [Doctor, setDoctor] = useState([])
    const [DoctorId, setDoctorId] = useState('')
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
                const DoctorRef = db.collection('Doctor').doc(id);
                DoctorRef.delete()
                    .then(() => {
                        setDoctor(Doctor.filter(d => d.id !== id));
                        afterDelete("Doctor deleted successfully.", "success");
                    })
                    .catch((error) => {
                        console.log(error);
                        afterDelete("Failed to delete Doctor.", "error");
                    });
            }
        });
    }


    // const handleSubmit = async () => {
    //     try {
    //         await auth.signInWithEmailAndPassword("amanyasad88@gmail.com", "Amany@1234");

    //     } catch (error) {
    //         console.error(error);
    //     }
    // };







    const fetchDoctor = async () => {

        // const user = auth.currentUser;
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

    const [currentPage, setCurrentPage] = useState(0);
    let PER_PAGE = 10;
    let offset = currentPage * PER_PAGE;
    let currentPageData = Doctor.slice(offset, offset + PER_PAGE).map((Doctor, index) => {
        return (
            <>
            <tr key={index} className={`${style.tr_shadow}`}>
                <td>{index + 1}</td>
                <td>{Doctor.Name}</td>
                <td><img src={Doctor.ImgUrl} width={100} height={100} alt="" /></td>
                <td>{Doctor.Speciality}</td>
                <td>{Doctor.City}</td>
                <td>{Doctor.Phone}</td>

                <td>
                    <div className="d-flex justify-content-around">
                        <Link className="item p-2" type='button' onClick={() => {
                            window.scrollTo(0, 0);
                            setDoctorId(Doctor.id);
                            let editDoctor = document.getElementById("edit_Doctor");
                            editDoctor.classList.remove("d-none");

                            let addDoctor = document.getElementById("add_Doctor");
                            if (addDoctor.classList.contains('d-none') === false) {
                                addDoctor.classList.add("d-none");
                            }
                        }}>
                            <i className={`fa-solid fa-pen fs-6   ${style.text_creat}`} ></i>
                        </Link>

                        <form>
                            <Link type='button' className="item p-2"
                                onClick={() => {
                                    DeleteAlert(Doctor.id)
                                }}>
                                <i className="fa-solid fa-trash fs-6 text-danger"></i>
                            </Link>
                        </form>
                    </div>
                </td>
            </tr>
        </>
        )
    });
    let pageCount = Math.ceil(Doctor.length / PER_PAGE);

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

    useEffect(() => {
        // handleSubmit();
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
                                        <h2 >{t("_doctor")}</h2>
                                    </div>
                                    <div className={`${style.pull_right} col-6 p-0`}>
                                        <Link className={` btn ${style.btnCreate} float-end`} type="button" onClick={() => {
                                            let addDoctor = document.getElementById("add_Doctor");
                                            addDoctor.classList.remove("d-none");

                                            let editDoctor = document.getElementById("edit_Doctor");
                                            if (editDoctor.classList.contains('d-none') === false) {
                                                editDoctor.classList.add("d-none");
                                            }
                                        }}>  + {t("one_doctor")}</Link>
                                    </div>
                                    <br />
                                    <br />
                                </div>
                            </div>

                            <div id="add_Doctor" className='d-none'>
                                <AddDoctor fetchData={fetchDoctor} />
                            </div>



                            <div id="edit_Doctor" className='d-none'>
                                <EditDoctor id={DoctorId} fetchData={fetchDoctor} />
                            </div>


                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">

                                    <div className="table-responsive table-responsive-data2" style={{ maxHeight: "100vh" }}>
                                        <table className={`table ${style.table_data2}  `} >
                                            <thead className={`${style.thead} text-white`}>
                                                <tr>
                                                    <th className='text-white'>{t("id")}</th>
                                                    <th className='text-white'>{t("item_name")} </th>
                                                    <th className='text-white'>{t("item_img")}</th>
                                                    <th className='text-white'>{t("item_speciality")} </th>
                                                    <th className='text-white'>{t("item_city")}</th>
                                                    <th className='text-white'>{t("item_phone")} </th>


                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                              {currentPageData}


                                            </tbody>
                                        </table>
                                        <div className="w-75 mx-auto">

                                            <ReactPaginate
                                                nextLabel={t("next")}
                                                onPageChange={handlePageClick}
                                                pageRangeDisplayed={3}
                                                marginPagesDisplayed={2}
                                                pageCount={pageCount}
                                                previousLabel={t("prev")}
                                                pageClassName="page-item"
                                                pageLinkClassName="page-link"
                                                previousClassName="page-item"
                                                previousLinkClassName="page-link"
                                                nextClassName="page-item"
                                                nextLinkClassName="page-link"
                                                breakLabel="..."
                                                breakClassName="page-item"
                                                breakLinkClassName="page-link"
                                                containerClassName="pagination"
                                                activeClassName="active"
                                                renderOnZeroPageCount={null}
                                            />


                                        </div>
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


