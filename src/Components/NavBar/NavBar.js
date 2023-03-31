
import React, { useContext, useState, useEffect } from 'react';
// import Link from '../Link/link';
import style from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
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

const NavBar = () => {

    const { lang, setLang } = useContext(langContext);
//    const [show, setShow] = useState('d-block')
   const navigate = useNavigate()
   const dispatch = useDispatch()


//    const show = useSelector(state=>state.show.show)   

const [show,setShow] = useState('d-none')

   
    const handleChange = () => {

        setLang(lang == 'en' ? 'ar' : 'en')
    }



    const handleLogout = () => {
       auth.signOut()
          .then(() => {
           
            dispatch(changeUser(null))
            // dispatch(changeShow('d-none'));
            setShow('d-none')
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            navigate('/')
          })
          .catch((error) => {
            console.log(error)
          });
      };

      
      const userinfo =   JSON.parse(localStorage.getItem('user'));

    //   console.log("userinfo", userinfo)
      useEffect(() => {
        
        if(userinfo){
            if(userinfo.uid){
                setShow('d-block')
            }
        }
        dispatch(changeUser(userinfo))
     
       
    
      }, [userinfo]);
    return (<>
        <section className=''>
            <Navbar className='fixed-top' expand="lg" style={{ background: `radial-gradient(circle, rgb(11, 109, 227) 0%, rgb(22, 103, 201) 0%, rgb(2, 76, 167) 90%)`, color: "white" }}>
                <Container style={{ color: "white" }}>
                    <Navbar.Brand to="/home"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav id="mainBtns" className='flex-row'>
                      
                           
                            <Dropdown className={`d-flex drop-user  align-items-center   ${show}` }>

                                <Dropdown.Toggle name='lang' variant="transparent" id="dropdown-basic" className={`text-white d-flex align-items-center dropnav testPad  `}>

                                    <img className={"rounded-circle mx-2 " } src={userImg} alt="" style={{ height: "40px" }} />
                                    <p className={"text-end text-white  mb-0 " }>  </p>

                                </Dropdown.Toggle>

                                <Dropdown.Menu className='my-2 '>
                                    

                                    <Dropdown.Item  onClick={handleLogout}>logout</Dropdown.Item>
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