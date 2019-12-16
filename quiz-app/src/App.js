import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'; 
import Home from './home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/quiz/:id'>

        </Route>
        <Route path='/form'>

        </Route>
        <Route path='/quiz'>

        </Route>
        <Route path='/results'>

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
