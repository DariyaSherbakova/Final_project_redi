
import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom'; 

import Nav from './Components/Nav';
import { renderMatches } from 'react-router-dom';
import HousesForSale from './Pages/HousesForSale';

function App() {
  return (

<div className  ='app  min-h-screen ' >

<Nav />

<Routes>
<Route path="/" element={<Home />} />
<Route path="/HousesForSale" element={<HousesForSale />} />

</Routes>
<Footer />

</div>




  );
   
   

}

export default App;
