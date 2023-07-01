import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';







function Dashboard({Dashboard}) {
    const [properties, setProperties] = useState()
    const [messages, setMessages] = useState()
    const [reservedtour, setReservedtour] = useState()
   
    useEffect(() => {
        // API Calls goes here

        axios("https://backend-for-redi.onrender.com/properties").then(i => setProperties(i.data)).catch(i => console.log(i))
        axios("https://backend-for-redi.onrender.com/messages").then(i => setMessages(i.data)).catch(i => console.log(i))
        axios("https://backend-for-redi.onrender.com/tours").then(i => setReservedtour(i.data)).catch(i => console.log(i))
    }, [])

    const handleDelete = (propertyId)  =>{
        alert(propertyId)
        axios.delete(`https://backend-for-redi.onrender.com/properties/${propertyId}`).then(i => console.log(i)).catch(i => console.log(i))
    }

  return (
    <div  className='justify-items-center text-center' >
        {messages && messages.map(i => <p>{i.client}</p>)}
        <h1 className='text-5xl'>Welcome to the Dashboard!</h1>
        <Link to='/messages'> 
        <button className='btn btn-primary'>Messages</button>
      </Link>
        <Link to='/tours'>
        <button className='btn btn-primary ' >Reserved tours</button>
        </Link>
   <div className='container justify-items-center lg:flex lg:flex-wrap lg:gap-8 lg:ml-16 lg:justify-items-center'>
            {properties && properties.map(i => <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={i.pics[0]} alt="Houses" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{i.name}</h2>
                    <p>${i.price}</p>
                    <p>{i.beds} bds | {i.baths} ba | {i.area} sqft </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"  onClick={() => handleDelete(i.id)} >Delete</button>
                        <button className='btn btn-primary'>Update</button>
                        
                    </div>
                </div>
            </div>)}
        </div>
</div>
  )
}

export default Dashboard