

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import NotFound from './Components/notFound/notFound';
import { LangProvider } from './contexts/lang';
import { useState } from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './pages/Home/home';
import Cities from './pages/Cities/Cities';
import Speaciality from './pages/Speaciality/Speaciality';

function App() {
  const [lang , setLang]=   useState("en")

  return (
    <div >
      
     {/* <Header/> */}
     <LangProvider value={{lang , setLang}}>
     
     <NavBar/>
    
     <Routes>
     <Route path="/" element={<Home/>}/>
   

     <Route path="/sidebar" element={<Sidebar/>}/>
     <Route path="/home" element={<Home/>}/>
     <Route path="/cities" element={<Cities/>}/>
     <Route path="/speaciality" element={<Speaciality/>}/>
     


     <Route path="*"  element={<NotFound/>} />
     
     </Routes>
     <Footer/>
     </LangProvider>
   </div>
  );
}

export default App;

