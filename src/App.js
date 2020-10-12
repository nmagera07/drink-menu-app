import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'


import './App.css';

import Navbar from './components/navbar'
import Container from './components/container'
import Drinks from './components/drinks'
import Vodka from './components/drinkList/vodka'

function App() {

  return (
    <div className="App">
      <Router>
        <Route path="/" component={Navbar} />
        <Route exact path="/" component={Container} />
        <Route path="/drinks" component={Drinks} />
        <Route path="/drinks/vodka" component={Vodka} />
      </Router>
    </div>
  );
}

export default App;
