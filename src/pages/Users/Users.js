
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
const Users = () => {


    const [User, setUser] = useState([])
    const [UserId, setUserId] = useState('')
    const user =   useSelector(state=>state.user.user);
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
                const UsersRef = db.collection('Users').doc(id);
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
                const UserRef = db.collection('Users');
                const UserSnapshot = await UserRef.get();
                const UserData = UserSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

                console.log("User", UserData);
                setUser(UserData);
            } catch (error) {
                console.log(error);
            }


        }
    };

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
                                        <h2 >User</h2>
                                    </div>
                                    <div className={`${style.pull_right} col-6 p-0`}>
                                        <Link className={` btn ${style.btnCreate} float-end`} type="button" onClick={() => {
                                            let addUser = document.getElementById("add_User");
                                            addUser.classList.remove("d-none");

                                            let editUser = document.getElementById("edit_User");
                                            if (editUser.classList.contains('d-none') === false) {
                                                editUser.classList.add("d-none");
                                            }
                                        }}>  + User</Link>
                                    </div>
                                    <br />
                                    <br />
                                </div>
                            </div>

                            <div id="add_User" className='d-none'>
                                <AddUser fetchData={fetchUser}/>
                            </div>



                            <div id="edit_User" className='d-none'>
                                <EditUser id={UserId} fetchData={fetchUser}/>
                            </div>


                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">

                                    <div className="table-responsive table-responsive-data2" style={{ maxHeight: "100vh" }}>
                                        <table className={`table ${style.table_data2}  `} >
                                            <thead className={`${style.thead} text-white`}>
                                                <tr>
                                                    <th className='text-white'>Id</th>
                                                    <th className='text-white'>Name </th>
                                                    <th className='text-white'>User Name </th>
                                                    <th className='text-white'>User Email </th>
                                                    <th className='text-white'>User City </th>
                                                    <th className='text-white'>User Phone </th>


                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {User.map((User, index) => {

                                                    return (

                                                        <>
                                                            <tr key={index} className={`${style.tr_shadow}`}>
                                                                <td>{index + 1}</td>
                                                                <td>{User.Name}</td>
                                                                <td>{User.UName}</td>
                                                                <td>{User.Email}</td>
                                                                <td>{User.City}</td>
                                                                <td>{User.Phone}</td>

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
                                                                            <i className={`fa-solid fa-pen   ${style.text_creat}`} ></i>
                                                                        </Link>

                                                                        <form>
                                                                            <Link type='button' className="item p-2"
                                                                                onClick={() => {
                                                                                    DeleteAlert(User.id)
                                                                                }}>
                                                                                <i className="fa-solid fa-trash text-danger"></i>
                                                                            </Link>
                                                                        </form>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </>
                                                    )
                                                })}



                                            </tbody>
                                        </table>
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


