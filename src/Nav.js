import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';



function Nav() {
    const navstyle={
        color:'white'
    }
  return (

      <nav>
    <h3>Nutripot</h3>

    <ul className="nav-links">
        <Link style={navstyle} to='/Login'>
        <li>Login</li></Link>
        <Link style={navstyle} to ='/Register'>
        <li>Register</li></Link>
        <Link style={navstyle} to ='/Update'>
        <li>Update</li></Link>

    </ul>

    </nav>

    

  );
}

export default Nav;
