import * as React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import style from './Cities.module.css';
import { useState, useEffect, useRef } from 'react';

import AddCity from './../AddCity/AddCity';
import EditCity from './../EditCity/EditCity';
import Swal from "sweetalert2";
import '../../index.css'
import { db, auth } from '../../Firebase/Firebase';


const Cities = () => {


    const [cities, setCities] = useState([])
    const [cityId, setcityId] = useState([])

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
                const cityRef = db.collection('City').doc(id);
                cityRef.delete()
                    .then(() => {
                        setCities(cities.filter(d => d.id !== id));
                        afterDelete('City deleted successfully', 'success');
                    })
                    .catch((error) => {
                        console.error(error);
                        afterDelete('Error deleting city', 'error');
                    });
            }
        });
    }


    const handleSubmit = async () => {
        try {
            await auth.signInWithEmailAndPassword("amanyasad88@gmail.com", "Amany@1234");

        } catch (error) {
            console.error(error);
        }
    };


    const fetchCities = async () => {

        const user = auth.currentUser;
        console.log("user", user);
        if (user) {
            try {
                const citiesRef = db.collection('City');
                const citiesSnapshot = await citiesRef.get();
                const citiesData = citiesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

                console.log("cities", citiesData);
                setCities(citiesData);
            } catch (error) {
                console.log(error);
            }

        }
    };

    useEffect(() => {
        handleSubmit();
        fetchCities();
    }, []);


    console.log("cities", cities)

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
                                        <h2 >Cities</h2>
                                    </div>
                                    <div className={`${style.pull_right} col-6 p-0`}>
                                        <Link className={` btn ${style.btnCreate} float-end`} type="button" onClick={() => {
                                            let addCity = document.getElementById("add_city");
                                            addCity.classList.remove("d-none");

                                            let editCity = document.getElementById("edit_city");
                                            if (editCity.classList.contains('d-none') === false) {
                                                editCity.classList.add("d-none");
                                            }
                                        }}>  + City</Link>
                                    </div>
                                    <br />
                                    <br />
                                </div>
                            </div>

                            <div id="add_city" className='d-none'>
                                <AddCity />
                            </div>



                            <div id="edit_city" className='d-none'>
                                <EditCity />
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
                                                    <th className='text-white'>City Name </th>



                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cities.map((city, index) => {
                                                    console.log(city)
                                                    return (

                                                        <>
                                                            <tr key={index} className={`${style.tr_shadow}`}>
                                                                <td>{index + 1}</td>
                                                                <td>{city.Name}</td>

                                                                <td>
                                                                    <div className="d-flex justify-content-around">
                                                                        <Link className="item p-2" type='button' onClick={() => {
                                                                            window.scrollTo(0, 0);
                                                                            setcityId(city.id);
                                                                            let editcity = document.getElementById("edit_city");
                                                                            editcity.classList.remove("d-none");

                                                                            let addcity = document.getElementById("add_city");
                                                                            if (addcity.classList.contains('d-none') === false) {
                                                                                addcity.classList.add("d-none");
                                                                            }
                                                                        }}>
                                                                            <i className={`fa-solid fa-pen   ${style.text_creat}`} ></i>
                                                                        </Link>

                                                                        <form>
                                                                            <Link type='button' className="item p-2"
                                                                                onClick={() => {
                                                                                    DeleteAlert(city.id)
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

export default Cities;


