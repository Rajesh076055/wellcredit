import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    const navigate = useNavigate();
    

    const logOutHandler = () =>{
        localStorage.removeItem('token');
        localStorage.removeItem('user');
       window.location.assign('/login/');
    }
  return (
    <div className='Navigation__Container'>
        <div className='Navigation__Logo'>
           
        </div>
        <div className='Navigation__Links'>
            <ul>
                <Link className='Links'>Home</Link>
                <Link className='Links'>Services</Link>
                <Link className='Links' onClick={logOutHandler}>Log Out</Link>
            </ul>
        </div>
    </div>
  )
}

export default Navigation