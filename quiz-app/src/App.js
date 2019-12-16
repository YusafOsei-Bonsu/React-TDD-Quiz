import React, { Component } from 'react';
import './App.css';
import { getCatData } from './components/api';
import { connect } from 'react-redux';

class App extends Component {
  

  componentDidMount() {
    this.props.dispatch(getCatData());
    
  }
  render() {
    console.log(this.props)
    return (
      <div>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  store: state
})

export default connect(mapStateToProps)(App)