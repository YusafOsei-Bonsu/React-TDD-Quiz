import React from 'react';
import Answers from '../components/answers';
import Questions from '../components/questions';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const Quiz = (props) => {
    let id = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
    return (
        <div className='questionAndAnswer'>
            <Questions results={props.results[id.id]} handle={handleSubmit} />
            <Answers results={props.results[id.id]} />
        </div>
    );
}


const mapStateToProps = (state) => {
    return ({ results: state.quizData })
};

export default connect(mapStateToProps)(Quiz);