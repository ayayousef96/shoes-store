import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <center>
            <nav className='Nav'>
                <ul>
                <li>
                    <Link to="/" >Home</Link>
                </li>  
                <li>
                <Link to="/ShoesList">Shoes List</Link>
                </li>
                
                <li>
                <Link to="/addshoes">Add shoes</Link>
                </li>
                
                </ul>
                
            </nav>

        </center>
    );
}

export default Nav;
