import React, { useEffect} from 'react';
import { Link} from 'react-router-dom';
import style from './home.module.css';
import Sidebar from '../../Components/Sidebar/Sidebar';

import BarChart from '../../Components/BarChart/BarChart';
const Home = () => {


  useEffect(() => {

  


   

  }, [])


  return (

    <>
      <Sidebar />
      <main className="main container my-5 min-vh-100 overflow-auto" >

       <div className='mt-5'>
       <div className='row my-5'>
          <div className='col-lg-4 my-3 '>
            <div className="card" style={{backgroundColor:"rgb(80, 143, 244)",color:"#fff"}}>
              <div className="card-body">
                <h5 className="card-title text-danger">Doctors</h5>
                <div className='d-flex justify-content-between'><h6 className="card-subtitle mb-2 ">Number Of Doctors </h6> <h6 className="card-subtitle mb-2 ">150</h6></div>
                <Link to="#" className="card-link text-decoration-none text-white">Go To Doctors</Link>
               
              </div>
            </div>
          </div>
          <div className='col-lg-4 my-3 '>
            <div className="card" >
            <div className="card-body" style={{backgroundColor:"rgb(255, 191, 67)", }}>
                <h5 className="card-title">Cities</h5>
                <div  className='d-flex justify-content-between'><h6 className="card-subtitle mb-2 text-muted">Number Of Cities </h6> <h6 className="card-subtitle mb-2 text-muted">150</h6></div>
                <Link to="#" className="card-link text-decoration-none">Go To Cities</Link>
               
              </div>
            </div>
          </div>
          <div className='col-lg-4 my-3 '>
            <div className="card" style={{backgroundColor:"rgb(75, 230, 157)"}}>
            <div className="card-body">
                <h5 className="card-title">Offers</h5>
                <div  className='d-flex justify-content-between'><h6 className="card-subtitle mb-2 text-muted">Number Of Offers </h6> <h6 className="card-subtitle mb-2 text-muted">150</h6></div>
                <Link to="#" className="card-link text-decoration-none">Go To Offers</Link>
               
              </div>
            </div>
          </div>
          <div className='col-lg-4 my-3 '>
            <div className="card" style={{backgroundColor:"rgb(146, 103, 255)"}}>
            <div className="card-body">
                <h5 className="card-title">Speacilaity</h5>
                <div  className='d-flex justify-content-between'><h6 className="card-subtitle mb-2 text-white">Number Of Speacilaity </h6> <h6>150</h6></div>
                <Link to="#" className="card-link text-decoration-none text-white">Go To Speacilaity</Link>
               
              </div>
            </div>
          </div>
          <div className='col-lg-4 my-3 '>
            <div className="card" >
            <div className="card-body" style={{backgroundColor:"#f699e0", color:"white"}}>
                <h5 className="card-title">Users</h5>
                <div  className='d-flex justify-content-between'><h6 className="card-subtitle mb-2 text-muted">Number Of Users </h6> <h6 className="card-subtitle mb-2 text-muted">150</h6></div>
                <Link to="#" className="card-link text-decoration-none text-white">Go To Users</Link>
               
              </div>
            </div>
          </div>
          <div className='col-lg-4 my-3 '>
            <div className="card" >
            <div className="card-body" style={{backgroundColor:"#99f6ca"}}>
                <h5 className="card-title">Pharmacies</h5>
                <div  className='d-flex justify-content-between'><h6 className="card-subtitle mb-2 text-muted">Number Of Pharmacies </h6> <h6>150</h6></div>
                <Link to="#" className="card-link text-decoration-none">Go To Pharmacies</Link>
               
              </div>
            </div>
          </div>
        

        </div>

        <div className='row my-5'>
          <div className='col-lg-6'>
            <BarChart />

          </div>

        </div>
       </div>



      </main>
    </>
  );
}

export default Home;
