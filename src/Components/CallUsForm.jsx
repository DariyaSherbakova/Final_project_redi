import React, { useState } from 'react';

const CallUsForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // create axios post with the link, then send object of the values of the message
   
    console.log(`Name: ${name}, Phone: ${phone}`);
    
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
      className='border-2'
        type="text"
        id="name"
        value={name}
        onChange={handleNameChange}
        required
      />
      <br />

      <label htmlFor="phone">Phone:</label>
      <input
      className='border-2'
        type="tel"
        id="phone"
        value={phone}
        onChange={handlePhoneChange}
        required
      />

      <button className='btn btn-primary' type="submit">Call Us</button>
    </form>
  );
};

export default CallUsForm;
