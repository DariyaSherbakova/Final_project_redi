import React, { useState } from 'react';

import axios from 'axios';
const ReservationForm = () => {

 

  const handleSubmit = (e) => {
    e.preventDefault();
   axios.post("https://backend-for-redi.onrender.com/tours", {
       "client": e.target.client.value,
       "phone": e.target.phone.value,
       "time": e.target.time.value,
       "date": e.target.day.value
    }).then(i=>console.log(i)).catch(i=>console.log(i))
};

  return (
    <form onSubmit={handleSubmit}>
      <label >Day:</label>
      <input
      className='border-2'
        type="date"
        id="day"
        name='day'
        required
      />

      <label >Time:</label>
      <input
      className='border-2'
        type="time"
        id="time"
        name='time'
        required
        
      />

<label >Name:</label>

      <input type="text" name="client" className='border-2' />
      <br />
      <label >Phone:</label>
      

      <input type="text" name="phone"  className='border-2' />

      <button className='btn btn-primary' type="submit">Reserve</button>
    </form>
  );
};

export default ReservationForm;
