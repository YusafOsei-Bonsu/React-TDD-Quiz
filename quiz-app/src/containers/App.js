import React, { Component } from 'react';
import { getCatData } from '../components/api';
import { connect } from 'react-redux';
import '../App.css';
import Quiz from '../containers/quiz';
import { persistor } from './../store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Start from '../components/start';
import Form from '../components/form';
import Results from './results';
import { PersistGate } from 'redux-persist/integration/react';
export class App extends Component {
  componentDidMount() {
    this.props.dispatch(getCatData());
  }
  render() {
    return (
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Start />
            </Route>
            <Route exact path='/form'>
              <Form />
            </Route>
            <Route path='/quiz/:id'>
              <Quiz />
            </Route>
            <Route path='/results'>
              <Results />
            </Route>
          </Switch>
        </Router>
      </PersistGate>
    )
  }
}
export default connect()(App);