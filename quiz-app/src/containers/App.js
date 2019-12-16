import React from 'react';
import '../App.css';
import Quiz from '../containers/quiz';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'; 
import Start from '../components/start';
import Form from '../components/form';
import Results from './results';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Start/>
        </Route>
        <Route exact path='/form'>
          <Form/>
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
