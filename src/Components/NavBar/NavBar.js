
import React, { useContext, useState, useEffect } from 'react';
// import Link from '../Link/link';
import style from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { langContext } from '../../contexts/lang';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/whitelogowithdotcom.png'
import Dropdown from 'react-bootstrap/Dropdown';
import userImg from '../../assets/user-img.webp';
import { db, auth } from '../../Firebase/Firebase';
import { useNavigate } from 'react-router-dom';
import changeUser from '../../store/Actions/user';
import changeShow from '../../store/Actions/show';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'
import classNames from 'classnames'
const NavBar = () => {

    const { lang, setLang } = useContext(langContext);
    //    const [show, setShow] = useState('d-block')
    const navigate = useNavigate()
    const dispatch = useDispatch()


    //    const show = useSelector(state=>state.show.show)   

    const [show, setShow] = useState('d-none')
    const [hidden, sethidden] = useState('d-block')


    const handleChange = () => {

        setLang(lang == 'en' ? 'ar' : 'en')
    }

    const [imgNavbar, setImgNavbar] = useState()

    const handleLogout = () => {
        auth.signOut()
            .then(() => {

                dispatch(changeUser(null))
                // dispatch(changeShow('d-none'));
                setShow('d-none')
                sethidden("d-block")
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                navigate('/login')
            })
            .catch((error) => {
                console.log(error)
            });
    };

    const languages = [
        {
            code: 'en',
            name: 'English',
            country_code: 'gb',
        },
        {
            code: 'ar',
            name: 'العربية',
            dir: 'rtl',
            country_code: 'sa',
        },
    ]

    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation();

    useEffect(() => {
        document.body.dir = currentLanguage.dir || 'ltr'
        document.title = t('app_title');
        
    }, [currentLanguage, t]);

    const GlobeIcon = ({ width = 24, height = 24 }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="currentColor"
            className="bi bi-globe"
            viewBox="0 0 16 16" >

            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
        </svg>
    )
    const userinfo = JSON.parse(localStorage.getItem('user'));

    //   console.log("userinfo", userinfo)
    useEffect(() => {

        if (userinfo) {
            if (userinfo.uid) {
                setShow('d-block')
                sethidden('d-none')
            }
        }
        dispatch(changeUser(userinfo))



    }, [userinfo]);
    return (<>
        <section className=''>
            <Navbar className='fixed-top' expand="lg" style={{ background: `radial-gradient(circle, rgb(11, 109, 227) 0%, rgb(22, 103, 201) 0%, rgb(2, 76, 167) 90%)`, color: "white" }}>
                <Container style={{ color: "white" }}>
                    <Navbar.Brand to="/" as={Link}><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav id="mainBtns" className='flex-row'>

                        {/* <Nav.Link className={`  nav-link btn  text-capitalize text-white  fw-bold  ${hidden} `} as={Link} to="/login">Login</Nav.Link> */}
                            <Dropdown className={`d-flex drop-user  align-items-center   ${show}`}>

                                <Dropdown.Toggle name='lang' variant="transparent" id="dropdown-basic" className={`text-white d-flex align-items-center dropnav testPad  `}>

                                    <img className={"rounded-circle mx-2 "} src={userImg} alt="" style={{ height: "40px" }} />
                                    <p className={"text-end text-white  mb-0 "}>  </p>

                                </Dropdown.Toggle>

                                <Dropdown.Menu className='my-2 '>


                                    <Dropdown.Item onClick={handleLogout}>logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle variant="transparent" className={` text-white`} style={{marginTop:".4rem"}} id="dropdown-basic">
                                    <GlobeIcon />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <span className="dropdown-item-text">{t('language')}</span>
                                    </Dropdown.Item>

                                    {languages.map(({ code, name, country_code }) => (
                                        <Dropdown.Item li key={country_code}>
                                            <a
                                                href="#"
                                                className={classNames('dropdown-item', {
                                                    disabled: currentLanguageCode === code,
                                                })}
                                                onClick={() => {
                                                    i18next.changeLanguage(code);
                                                }}
                                            >
                                                <span
                                                    className={`flag-icon flag-icon-${country_code} mx-2`}
                                                    style={{
                                                        opacity: currentLanguageCode === code ? 0.5 : 1,
                                                    }}
                                                ></span>
                                                {name}
                                            </a>
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </section>
    </>
    )
}


export default NavBar;