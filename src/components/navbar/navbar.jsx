import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const navbar = () =>{
    return (
        <div className='navbar'>
            
            <h1 className='logo'>Foodiv.</h1>
            <ul className='navopt'>
                <li><Link to="/">Home</Link></li>
                {/* <li><Link to="/details">Details</Link></li> */}
                <li><Link to="/add">Add Recipe</Link></li>
                
            </ul>
        </div>
    )
}

export default navbar;