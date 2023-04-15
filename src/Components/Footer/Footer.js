import React from 'react'
import style from './Footer.css'
import '../../index.css'
import { Link } from 'react-router-dom'
export default class Footer extends React.Component {


    render() {

        return <>

            <section className={`${style.main} `}>
                {/* <!-- footer --> */}
                <footer className="py-5">
                    <div className="container">
                        <div className=" footer-content row justify-content-center">
                  
                            <div className=" mb-3 text-center row justify-content-center">
                                <img src="assets/google-play-badge.jfif" alt=""/>
                                    <img src="assets/app-store-badge.png" alt=""/>

                                        <div className="social text-lg-start text-center">
                                            <ul className='d-flex justify-content-center'>
                                                <li><a href="" className=""><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="" className=""><i className="fab fa-instagram"></i></a></li>
                                                <li><a href="" className=""><i className="fab fa-twitter"></i></a></li>
                                            </ul>

                                        </div>

                                    </div>
                            </div>


                        </div>


                </footer>
                {/* <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <h3 className='text-white text-uppercase'>get in touch</h3>
                        <ul className='list-unstyled text-white'>
                            <li><i class="fa-solid fa-envelope text-white me-3"></i> info@gmail.com </li>
                            <li><i class="fa-solid fa-phone text-white me-2"></i> +0201016445971</li>
                        </ul>
                    </div>
                    <div className='col-md-4'>
                        <div className='d-flex justify-content-center'>
                            <button className=' text-uppercase fw-bold'>contact us</button>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <ul className='list-unstyled d-flex'>
                            <li className='mx-4'>
                                <a className='text-decoration-none text-white' href='https://www.linkedin.com/login'>
                                     <i class="fa-brands fa-linkedin text-white fs-3"></i>
                                </a>
                            </li>
                            <li className='mx-4'>
                                <a className='text-decoration-none text-white' href='https://www.facebook.com/login'>
                                     <i class="fa-brands fa-facebook text-white fs-3"></i>
                                </a>
                            </li>

                            <li className='mx-4'>
                                <a className='text-decoration-none text-white' href='https://www.twitter.com/'>
                                     <i class="fa-brands fa-twitter text-white fs-3"></i>
                                </a>
                            </li>
                         
                        </ul>
                        <p className='text-white ms-5'>copyright &copy; 2023</p>
                    </div>
                </div>
            </div> */}
            </section>
        </>
    }


}