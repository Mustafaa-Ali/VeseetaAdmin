

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import NotFound from './Components/notFound/notFound';
import { LangProvider } from './contexts/lang';
import { useState } from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './pages/Home/home';
import Doctors from './pages/Doctors/Doctors';
import Cities from './pages/Cities/Cities';
import Speaciality from './pages/Speaciality/Speaciality';
import Offers from './pages/Offers/Offers';
import Users from './pages/Users/Users';
import Login from './Components/Login/Login';
import ForgetPass from './Components/ForgetPass/ForgetPass';
import PrivateRoutes from './utils/PrivateRoutes';
function App() {
  const [lang , setLang]=   useState("en")

  return (
    <div >
      
     {/* <Header/> */}
     <LangProvider value={{lang , setLang}}>
     
     <NavBar/>
    
     <Routes>
     <Route path="/" element={<Login/>}/>
   

     <Route element={<PrivateRoutes/>} >
      <Route path="/sidebar" element={<Sidebar/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/users" element={<Users />}/>
      <Route path="/doctor" element={<Doctors />}/>
      <Route path="/cities" element={<Cities/>}/>
      <Route path="/speaciality" element={<Speaciality/>}/>
      <Route path="/offers" element={<Offers/>}/>
      </Route>
    
     <Route path="/login" element={<Login/>}/>
     <Route path="/forgetpassword" element={<ForgetPass/>}/>
     


     <Route path="*"  element={<NotFound/>} />
     
     </Routes>
     <Footer/>
     </LangProvider>
   </div>
  );
}

export default App;

