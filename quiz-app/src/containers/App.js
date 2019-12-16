import React from 'react';
import '../App.css';
import Quiz from '../containers/quiz';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'; 
import Home from '../containers/home';
import Results from './results';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/quiz'>
          <Quiz />
        </Route>
        <Route path='/results'>
          <Results />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
