import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export default function navbar() {
    const [background, changeBackground] = useState("white")
    return (
        <div className="navbar">
            <Link to="/"> <h1>Magera's Pub</h1> </Link>
            <ul>
                <Link to="drinks"> <li>Drinks</li> </Link>
                <Link to="contact"> <li>Contact</li> </Link>
            </ul>
        </div>
    )
}
