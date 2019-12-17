import React from 'react';
import Answers from '../components/answers';
import Questions from '../components/questions';
import { connect } from 'react-redux';

const Quiz = (props) => {
    let i = 0;
    const counter = (i) => i++;

    const handleSubmit = (e) => {
        e.preventDefault();
        counter(i);
    }
        
    return (
        <div className='questionAndAnswer'>
            <Questions results={props.results[i]}/>
            <Answers results={props.results[i]}/>
        </div>
    );
}
const mapStateToProps = state => { 
    return ({results: state.quizData})};

export default connect(mapStateToProps)(Quiz);