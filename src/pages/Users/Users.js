
import * as React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import style from './Users.module.css';
import { useState, useEffect, useRef } from 'react';

import AddUser from './../AddUser/AddUser';
import EditUser from './../EditUser/EditUser';
import Swal from "sweetalert2";
import '../../index.css'
import { db, auth } from '../../Firebase/Firebase';

import { useSelector } from 'react-redux';
import ReactPaginate from "react-paginate";
import { useTranslation } from 'react-i18next';
const Users = () => {


    const { t } = useTranslation();
    const [User, setUser] = useState([])
    const [UserId, setUserId] = useState('')
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
                const UsersRef = db.collection('users').doc(id);
                UsersRef.delete()
                    .then(() => {
                        setUser(User.filter(d => d.id !== id));
                        afterDelete("Offer deleted successfully.", "success");
                    })
                    .catch((error) => {
                        console.log(error);
                        afterDelete("Failed to delete Offer.", "error");
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







    const fetchUser = async () => {

        // const user = auth.currentUser;
        console.log("user", user);
        if (user) {
            try {
                const UserRef = db.collection('users');
                const UserSnapshot = await UserRef.get();
                const UserData = UserSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

                console.log("User", UserData);
                setUser(UserData);
            } catch (error) {
                console.log(error);
            }


        }
    };


    const [currentPage, setCurrentPage] = useState(0);
    let PER_PAGE = 10;
    let offset = currentPage * PER_PAGE;
    let currentPageData = User.slice(offset, offset + PER_PAGE).map((User, index) => {
        return (
            <>
                <tr key={index} className={`${style.tr_shadow}`}>
                    <td>{index + 1}</td>
                    <td>{User.Name}</td>
                    <td>{User.UName}</td>
                    <td>{User.Email}</td>
                    <td>{User.City}</td>
                    <td>{User.Phone}</td>
                    <td>{User.Status}</td>

                    <td>
                        <div className="d-flex justify-content-around">
                            <Link className="item p-2" type='button' onClick={() => {
                                window.scrollTo(0, 0);
                                setUserId(User.id);
                                let editUser = document.getElementById("edit_User");
                                editUser.classList.remove("d-none");

                                let addUser = document.getElementById("add_User");
                                if (addUser.classList.contains('d-none') === false) {
                                    addUser.classList.add("d-none");
                                }
                            }}>
                                <i className={`bi bi-eye-fill fs-6   ${style.text_creat}`} ></i>
                            </Link>

                            <form>
                                {/* <Link type='button' className="item p-2"
                                    onClick={() => {
                                        DeleteAlert(User.id)
                                    }}>
                                    <i className="fa-solid fa-trash fs-6 text-danger"></i>
                                </Link> */}
                            </form>
                        </div>
                    </td>
                </tr>
            </>
        )
    });
    let pageCount = Math.ceil(User.length / PER_PAGE);

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

    useEffect(() => {
        // handleSubmit();
        fetchUser();
    }, []);


    console.log("User", User)

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
                                        <h2 >{t("_user")}</h2>
                                    </div>
                                    <div className={`${style.pull_right} col-6 p-0`}>
                                        <Link className={` btn ${style.btnCreate} float-end`} type="button" onClick={() => {
                                            let addUser = document.getElementById("add_User");
                                            addUser.classList.remove("d-none");

                                            let editUser = document.getElementById("edit_User");
                                            if (editUser.classList.contains('d-none') === false) {
                                                editUser.classList.add("d-none");
                                            }
                                        }}>  + {t("one_user")}</Link>
                                    </div>
                                    <br />
                                    <br />
                                </div>
                            </div>

                            <div id="add_User" className='d-none'>
                                <AddUser fetchData={fetchUser} />
                            </div>



                            <div id="edit_User" className='d-none'>
                                <EditUser id={UserId} fetchData={fetchUser} />
                            </div>


                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">

                                    <div className="table-responsive table-responsive-data2" style={{ maxHeight: "100vh" }}>
                                        <table className={`table ${style.table_data2}  `} >
                                            <thead className={`${style.thead} text-white`}>
                                                <tr>
                                                    <th className='text-white'>{t("id")} </th>
                                                    <th className='text-white'>{t("item_name")}</th>
                                                    <th className='text-white'>{t("item_username")}</th>
                                                    <th className='text-white'>{t("item_email")}  </th>
                                                    <th className='text-white'>{t("item_city")} </th>
                                                    <th className='text-white'>{t("item_phone")}  </th>
                                                    <th className='text-white'>{t("item_status")}  </th>


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

export default Users;


