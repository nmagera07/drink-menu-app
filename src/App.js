import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


import './App.css';

import Navbar from './components/navbar'
import Container from './components/container'
import Drinks from './components/drinks'


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
              <Container />
          </Route>
          <Route path="/drinks">
              <Drinks />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
