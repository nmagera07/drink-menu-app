import React from 'react'
import { useParams } from 'react-router-dom'

export default function Vodka() {
    let { drinkId } = useParams()
    return (
        <div className="drinkName">
            <h3>White Russian</h3>
            <p>Cream, Coffee liqueur, Vodka</p>

            <h3>Chocolate Ginger Martini</h3>
            <p>Creme de Cacao, Ginger syrup, Vodka, Orange bitters, rimmed with cayenne and sugar</p>

            <h3>Moscow Mule</h3>
            <p>Lime juice, Vodka, Gosling's Ginger beer</p>

            <h3>Espresso Martini</h3>
            <p>Vodka, Espresso, Coffee liqueur, Simple syrup</p>

            <h3>Lemon Drop</h3>
            <p>Lemon juice, Triple Sec, Simple syrup, Absolut Citron Vodka</p>

            <h3>Fleur of the Valley</h3>
            <p>Lemon juice, Strawberry puree, Vodka, Prosecco</p>

            <h3>Appletini</h3>
            <p>Apple cider, Lemon juice, Maple syrup, Vodka</p>

            <h3>Screwdriver</h3>
            <p>Orange juice, Vodka, Orange bitters</p>
        </div>
    )
}
