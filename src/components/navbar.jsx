import React from 'react'
import {Link} from 'react-router-dom'
import {FaFacebookF, FaInstagram} from 'react-icons/fa'



const NavBar = (props) => {
    return (
        <div className="navbar">
            <Link to="/"> <h1></h1> </Link>
            <ul>
                <Link to="/"> <li>Home</li></Link>
                <Link to="/drinks/vodka"> <li>Drinks</li> </Link>
                <Link to="/contact"> <li>Contact</li> </Link>
                
                <div className="icons">
                <a href="https://www.facebook.com" target="_blank" rel=" noopener noreferrer"> <FaFacebookF /></a>
                <a href="https://instagram.com" target="_blank" rel=" noopener noreferrer"> <FaInstagram /> </a>
                </div>
            </ul>
        </div>
    )
}

export default NavBar