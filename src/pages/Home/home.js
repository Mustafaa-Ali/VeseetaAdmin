import React, { useEffect} from 'react';
import { Link} from 'react-router-dom';
import style from './home.module.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
const Home = () => {








 





  useEffect(() => {

  


   

  }, [])


  return (

    <>
      <Sidebar />
      <main className="main container my-5 min-vh-100" >

       <div className='mt-5'>
       <div className='row my-5'>
          <div className='col-lg-4 my-3 '>
            <div className="card" >
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="#" className="card-link">Card link</Link>
                <Link to="#" className="card-link">Another link</Link>
              </div>
            </div>
          </div>
          <div className='col-lg-4 my-3 '>
            <div className="card" >
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="#" className="card-link">Card link</Link>
                <Link to="#" className="card-link">Another link</Link>
              </div>
            </div>
          </div>
          <div className='col-lg-4 my-3 '>
            <div className="card" >
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="#" className="card-link">Card link</Link>
                <Link to="#" className="card-link">Another link</Link>
              </div>
            </div>
          </div>
          <div className='col-lg-4 my-3 '>
            <div className="card" >
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="#" className="card-link">Card link</Link>
                <Link to="#" className="card-link">Another link</Link>
              </div>
            </div>
          </div>
          <div className='col-lg-4 my-3 '>
            <div className="card" >
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="#" className="card-link">Card link</Link>
                <Link to="#" className="card-link">Another link</Link>
              </div>
            </div>
          </div>
          <div className='col-lg-4 my-3 '>
            <div className="card" >
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="#" className="card-link">Card link</Link>
                <Link to="#" className="card-link">Another link</Link>
              </div>
            </div>
          </div>

        </div>
       </div>



      </main>
    </>
  );
}

export default Home;
