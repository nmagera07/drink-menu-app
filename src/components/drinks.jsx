import React from 'react'

import {Link, useRouteMatch, Route, Switch} from 'react-router-dom'
import Vodka from './drinkList/vodka';
import Rum from './drinkList/rum';
import Gin from './drinkList/gin'
import Tequila from './drinkList/tequila'
import Whiskey from './drinkList/whiskey'
import Beer from './drinkList/beer'
import Wine from './drinkList/wine'

function Drinks() {
    let { path, url } = useRouteMatch();
    return (
        <div className="drink-container">
            <h1>DRINKS</h1>
            <div className="drinks">
            <ul>
                <Link to={`${url}/vodka`}> <li> Vodka </li> </Link>
                <Link to={`${url}/rum`}> <li>Rum</li> </Link>
                <Link to="/drinks/gin"> <li>Gin</li></Link>
                <Link to="/drinks/tequila"> <li>Tequila</li></Link>
                <Link to="/drinks/whiskey"> <li>Whiskey</li></Link>
                <Link to="/drinks/beer"> <li>Beer</li></Link>
                <Link to="/drinks/wine"> <li>Wine</li></Link>
            </ul>

            <Switch>
                <Route exact path={path} />
                <Route path='/drinks/vodka' component={Vodka} />
                <Route path='/drinks/rum' component={Rum} />
                <Route path="/drinks/gin" component={Gin} />
                <Route path="/drinks/tequila" component={Tequila} />
                <Route path="/drinks/whiskey" component={Whiskey} />
                <Route path="/drinks/beer" component={Beer} />
                <Route path="/drinks/wine" component={Wine} />
            </Switch>
            </div>
        </div>
    )
}

export default Drinks
