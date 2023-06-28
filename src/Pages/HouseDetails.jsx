import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import ContactForm from '../Components/ContactForm';
import ReservationForm from '../Components/ReservationForm';
import CallUsForm from '../Components/CallUsForm';

function HouseDetails({ selectHome }) {
  const [picPosition, setPicPosition] = useState(0)
  const [reserveModal, setReserveModal] = useState(true)





  function back() {
    if (picPosition === 0) {
      setPicPosition(selectHome.pics.length - 1)
    } else {
      setPicPosition((i) => (i = i - 1))
    }
  }
  function next() {
    if (picPosition + 1 === selectHome.pics.length) {
      setPicPosition(0)
    } else {
      setPicPosition((i) => (i = i + 1))
    }
  }


  return (

    <div>

      <div className='conteinerDetails text-7xl mb-4' >

        {selectHome && <h1>{selectHome.name}</h1>}
      </div>
      <div className='mainContainer lg:grid lg:grid-cols-2 lg:gap-4'>

        <div className="carousel w-full   ">





          <div className="carousel-item relative w-full">
            {selectHome && <img src={selectHome.pics[picPosition]} className="w-full" />}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a onClick={back} className="btn btn-circle" >❮</a>
              <a onClick={next} className="btn btn-circle" >❯</a>
            </div>
          </div>



        </div>
        <div className='button flex justify-evenly'>

          {/* Open the modal using ID.showModal() method */}

          <button className="btn btn-primary w-30" onClick={() => window.reserveModal.showModal()}>Reserve a tour</button>
          <dialog id="reserveModal" className="modal">
            <div method="dialog" className="modal-box">
              <ReservationForm />
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>


     


          {/* Open the modal using ID.showModal() method */}
          <button className="btn btn-primary w-30" onClick={() => window.messageModal.showModal()}>Send message</button>
          <dialog id="messageModal" className="modal">
            <div method="dialog" className="modal-box">
              <ContactForm />


            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>






          <button className="btn btn-primary w-30" onClick={() => window.callModal.showModal()}>Call</button>
          <dialog id="callModal" className="modal">
            <div method="dialog" className="modal-box">
              <CallUsForm />


            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>


        <div className='conteinerDetailsNext text-xl lg:col-start-1 lg:col-span-1 lg:row-start-3 lg:row-span-1  ' >
          
          {selectHome && <h3>Price: ${selectHome.price}</h3>}
          {selectHome && <h3>Address: {selectHome.address}</h3>}
          {selectHome && <h3>Built in {selectHome.year}</h3>}
          {selectHome && <h3>Size: {selectHome.area} Sq. Ft </h3>}
          {selectHome && <h3>Bedrooms: {selectHome.beds}</h3>}
          {selectHome && <h3>Bathrooms: {selectHome.baths}</h3>}

        </div>

        <div className='amenities lg:space-y-4  lg:col-start-2 lg:col-span-1 lg:row-start-1 lg:row-span-1'>
          <h3>Amenities</h3>
          {selectHome && selectHome.amenities.map(i => <p className='sideBorder'> <ion-icon name="star-outline"></ion-icon> {i}</p>)}
          <div className='homedescription col-end '>
            <h2>Description</h2>
            {selectHome && <p>  {selectHome.description}</p>}
          </div>
        </div>

        {/* <div className='bg-primary lg:col-start-2 lg:col-span-1 lg:row-start-1 lg:row-span-1 '> */}


      </div>

    </div>
    // </div>
  );
}

export default HouseDetails