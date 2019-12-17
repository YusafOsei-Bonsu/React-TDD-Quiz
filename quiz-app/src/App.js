import React, { Component } from 'react';
import './App.css';
import { getCatData, getQuizData } from './components/api';
import { connect } from 'react-redux';

class App extends Component {

  handleSubmit(data) {
    console.log('clicked ' + data)
    let value = data.id
    getQuizData(value)
  }

  componentDidMount() {
    this.props.dispatch(getCatData());
  }

  render() {
    let info = this.props.categories;
    return (
      <div>
        <ul>
          {info.map((data) => {
            return <button onClick={() => { this.handleSubmit(data.id) }} className='categories' key={data.id}>
              {data.name}
            </button>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { categories: state.catDropDown }
};



export default connect(mapStateToProps)(App)