import React from 'react'
import Login from './Login'

function Nav() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <img className='w-20' src="https://ik.imagekit.io/xidabax8x/Screenshot_2023-06-19_134917.png?updatedAt=1687177531606" alt="logo" />
       
      </div>
      <div className="navbar-end">
        {/* <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button> */}

        {/* The button to open modal */}
        
        <div className="modal" id="my_modal_8">
          <div className="modal-box">
            
            <Login />
            <form className="my-form">
              <h3 className="font-bold text-lg text-center">Login</h3>
              <div className="input-container">
                <label className="input-label ">Username</label><br />
                <input type="text" name="uname" placeholder="" className="text-input border solid black" />
              </div>
              <div className="input-container">
                <label className="input-label">Password</label><br />
                <input type="password" name="pass" placeholder="" className="text-input border solid black" />
              </div>
            </form>


            <div className="button-container modal-action ">

              <a href="#" className="btn btn-primary ">Submit</a>
            </div>
          </div>
        </div>    <a href="#my_modal_8" className="btn btn-primary">Login</a>
{/* 
<div className="modal" id="my_modal_8">
        <div className="modal-box">
          <Login />
        </div>
      </div> */}

        {/* Put this part before </body> tag */}

        {/* <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button> */}
      </div>
    </div>
  )
}

export default Nav