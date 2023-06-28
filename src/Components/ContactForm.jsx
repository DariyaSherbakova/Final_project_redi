
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
const ContactForm = () => {
  const [formStatus, setFormStatus] = useState()
  const [data, setData] = useState([])

  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('')
    axios.post ("https://backend-for-redi.onrender.com/messages", {
      "client": e.target.client.value,
      "phone": e.target.phone.value,
      "email": e.target.email.value,
      "message": e.target.message.value
    }).then(i=>console.log(i)).catch(i=>console.log(i))
  //  setData([...data, `name: ${e.target.name.value}`, `phone: ${e.target.phone.value}`,`email: ${e.target.email.value}`, `message: ${e.target.message.value}`])
  //  console.log(e.target.name.value, e.target.phone.value);

  }
  return (
    <div className="container mt-5 items-center">
      <h2 className="mb-3">Contact Us </h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">
            Name
          </label>
          <input className="form-control border-2" type="text" name="client" required />
        </div>
        <div className="mb-3">
          <label className="form-label" >
            Phone
          </label>
          <input className="form-control border-2" type="text" name="phone" required />
        </div>
        <div className="mb-3">
          <label className="form-label" >
            Email
          </label>
          <input className="form-control border-2" type="email" name="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" >
            Message
          </label>
          <textarea className="form-control border-2 " name="message" required />
        </div>
        <button className="btn btn-primary" type="submit"> Send
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default ContactForm
