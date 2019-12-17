import React, { Component } from 'react';
// import './App.css';
import { getCatData, getQuizData } from '../components/api';
import { connect } from 'react-redux';
class App extends Component {
  handleSubmit = (event, value) => {
    event.preventDefault();
    console.log('clicked ' + value)
    this.props.dispatch(getQuizData(value));
  }
  componentDidMount() {
    this.props.dispatch(getCatData());

  }
  render() {
    console.log(this.props)
    let info = this.props.categories;
    return (
      <div>
        <ul>
          {info.map((data) => {
            return <button onClick={(event) => { this.handleSubmit(event, data.id) }} className='categories' key={data.id}>
              {data.name}
            </button>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { categories: state.catDropDown, justStore: state }
};

export default connect(mapStateToProps)(App);