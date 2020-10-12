import React from 'react'

import {Link} from 'react-router-dom'

import Vodka from './drinkList/vodka'

export default function drinks() {
    return (
        <div className="drinks">
            <h1>Drinks</h1>
            <ul>
                <Link to="/drinks/vodka"> <li>Vodka</li> </Link>
                <Link to="/drinks/rum"> <li>Rum</li> </Link>
                <Link to="/drinks/gin"> <li>Gin</li></Link>
                <Link to="/drinks/tequila"> <li>Tequila</li></Link>
                <Link to="/drinks/whiskey"> <li>Whiskey</li></Link>
                <Link to="/drinks/beer"> <li>Beer</li></Link>
                <Link to="/drinks/wine"> <li>Wine</li></Link>
            </ul>
        </div>
    )
}
