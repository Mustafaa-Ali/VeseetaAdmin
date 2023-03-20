
import * as React from 'react';
import { Link } from 'react-router-dom';
import { useState , useEffect} from "react";
import './Sidebar.css';
// import homeImg from '../../img/home2.png';
// import sectorImg from '../../img/Group.png';
// import benchmarkImg from '../../img/chart.png';
// import valueWorldImg from '../../img/value_world.png';

import { useSelector } from "react-redux";

function Sidebar() {

   

    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
        setActive(!isActive);
    };


   

    useEffect(() => {

           

        }, []);

    return (
        <div>

            <div className={`side-bar  ${isActive ? " " : "opened"}`}>

                <button type="button" className="btn side-bar__btn-toggler d-block d-lg-none" onClick={ToggleClass}>
                    <i className="fa fa-angle-right open font-weight-bold" aria-hidden="true"></i>
                    <i className="fa fa-times close" aria-hidden="true"></i>
                </button>

                <div>
                    <ul className="side-bar__items list-unstyled">
                        <li className="side-bar__item side__item--menu ">
                            <li className="side-bar__item side__item--menu terms ">
                                <Link to="/home" className="page-section-link">
                              
                                <i className="  side-bar__item--icon text-white  fs-2  bi bi-house-lock-fill"></i>
                                    <span className="side-bar__item--text">Home</span>
                                </Link>
                            </li>
                            <li className="side-bar__item side__item--menu terms ">
                                <Link to="/users" className="page-section-link">
                                <i className=" side-bar__item--icon text-white  fs-2 bi bi-people-fill"></i>
                                 
                                    <span className="side-bar__item--text">Users</span>
                                </Link>
                            </li>
                            <li className="side-bar__item side__item--menu terms  ">
                                <Link to="/users" className="page-section-link">
                                
                                <i class=" side-bar__item--icon text-white  fs-2 fa-solid fa-user-doctor"></i>
                                 
                                    <span className="side-bar__item--text">Doctors</span>
                                </Link>
                            </li>

                            <Link to="/cities" className="page-section-link">
                               
                                <i className="side-bar__item--icon text-white  fs-2 fa-solid fa-city"></i>
                                <span className="side-bar__item--text"> Cities</span>
                            </Link>
                        </li>

                        <li className="side-bar__item side__item--menu">
                            <Link to="/offers" className="page-section-link">
                            
                            <i className="side-bar__item--icon text-white  fs-2 bi bi-building-gear"></i>
                               
                                <span className="side-bar__item--text">Offers</span>
                            </Link>
                        </li>
                        <li className="side-bar__item side__item--menu terms ">
                            <Link to="/speaciality" className="page-section-link">
                          
                            <i class="side-bar__item--icon text-white  fs-2 fa-solid fa-building-user"></i>
                                <span className="side-bar__item--text">Speciality</span>
                            </Link>
                        </li>

                    </ul>


                </div>
            </div>
        </div>

    )

}

export default Sidebar;