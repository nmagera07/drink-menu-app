import React from 'react'
import { useParams } from 'react-router-dom'

export default function Vodka() {
    let { drinkId } = useParams()
    return (
        <div className="drinkName">
            <h1>Espresso Martini</h1>
            <p>Vodka, Espresso, Simple Syrup</p>
        </div>
    )
}
