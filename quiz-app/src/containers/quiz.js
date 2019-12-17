import React from 'react';
import Answers from '../components/answers';
import Questions from '../components/questions';
import { connect } from 'react-redux';




const Quiz = (props, theseProps) => {
    console.log(theseProps)
    let i = 0;
    const counter = (i) => i++;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Before' + i)
        counter(i);
        
    }



    return (
        <div className='questionAndAnswer'>
            <Questions results={props.results[i]} handle={handleSubmit} />
            <Answers results={props.results[i]} />
        </div>
    );
}


const mapStateToProps = (state, ownProps) => {
    return ({ results: state.quizData,theseProps:ownProps})
};

export default connect(mapStateToProps)(Quiz);