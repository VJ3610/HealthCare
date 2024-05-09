import SignInForm from './SignInForm';
import './Navbar.css';
import { useState } from 'react';
import "./SignInForm.css"
import Signup from './Signup';
// import logo from './medicare_logo.png'; 

const Navbar = () => {
  let [signup,setsignup]=useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img /*src={logo}*/ alt="Medicare Logo" />
        <p>Medi Care</p>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>|</li>
        <li>
          <a href="/schedule/med-time">Schedule </a>
        </li>
        <li>|</li>
        <li>
            <a href="/">Medicinal Details</a>
        </li>
      </ul>
      <div className="navbar-signup">
        <button onClick={()=>setsignup(!signup)}>Sign Up</button>
      </div>
      <div className={`sign_up_back ${signup ? 'sign_show' : ''} ` }>
          <div className={`Sign_page ${signup ? 'Sign_show' : ''} ` }>
          <span className='sign' onClick={()=>setsignup(false)}>&times;</span>
            {/* <SignInForm/> */}
            <Signup/>
          </div>
      </div>
      </nav> 
  );
}

export default Navbar;
