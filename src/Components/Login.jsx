import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';




function Login({admin}) {
    const navigate = useNavigate()

  
    

const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.pass.value

        console.log('Email:', email);
        console.log('Password:', password);

        if(admin) {
            if(admin.password==password)
            console.log("you can login");
            navigate('/Dashboard')

            
            
        } else {
            console.log("password is wrong");
        }

       
    };

    return (
        <form className="my-form" onSubmit={handleSubmit}>
            <h3 className="font-bold text-lg text-center">Login</h3>
            <div className="input-container">
                <label className="input-label">Email</label><br />
                <input
                    type="text"
                    name="email"
                    id='email'
                    placeholder=""

                    className="text-input border solid black"


                />
            </div>
            <div className="input-container">
                <label className="input-label">Password</label><br />
                <input
                    type="password"
                    name="pass"
                    id='pass'
                    placeholder=""

                    className="text-input border solid black"


                />
            </div>
            <div className="button-container modal-action">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    );
}




export default Login