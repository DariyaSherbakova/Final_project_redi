
import './App.css';

import Footer from './Components/Footer';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';

import Nav from './Components/Nav';
import { renderMatches } from 'react-router-dom';
import HousesForSale from './Pages/HousesForSale';
// import data from "./data.json"
import { useEffect, useState } from 'react';
import axios from 'axios';
import HouseDetails from './Pages/HouseDetails';
import ContactForm from './Components/ContactForm';
import CallUsForm from './Components/CallUsForm';
import ReservationForm from './Components/ReservationForm';
import Login from './Components/Login';
import Dashboard from './Pages/Dashboard';
import Messages from './Pages/Messages';
import Tours from './Pages/Tours';


function App() {
  const [selectHome, setSelectedHome] = useState()
  const [admin, setAdmin] = useState()
  
    useEffect(() => {
        // API Calls goes here

        axios("https://backend-for-redi.onrender.com/admin").then(i => setAdmin(i.data)).catch(i => console.log(i))

    }, [])
  




  return (

    <div className='app  min-h-screen ' >

       {/* {properties && properties.map(i => <p>{i.name }</p> )} */}

      <Nav />
      
      {/* <Login admin={admin} />   */}
    
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/HousesForSale" element={<HousesForSale setSelectedHome={setSelectedHome} />} />
        <Route path="/HouseDetails" element={ <HouseDetails selectHome={selectHome} />  } />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Messages" element={<Messages />} />
        <Route path="/Tours" element={<Tours />} />

      </Routes>
      <Footer />

    </div>




  );



}

export default App;












  // setFormStatus('Submitting...')
 // let name = e.target.name.value
  //console.log(name)
  // const { name, phone, email, message } = e.target.elements
  // let conFom = {
  //   name: name.value,
  //   phone: phone.value,
  //   email: email.value,
  //   message: message.value,
  // }
  // console.log(conFom)