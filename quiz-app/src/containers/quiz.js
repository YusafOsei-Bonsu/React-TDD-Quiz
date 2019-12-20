import React from 'react';
import Answers from '../components/answers';
import Questions from '../components/questions';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Form from '../components/form';

 export const Quiz = (props) => {
    let id = useParams();
    let intId = parseInt(id.id);
    return (
        props.results.length === 0 ? <Form /> :
        <div className='questionAndAnswer'>
            <Questions results={props.results[id.id]} />
            <Answers results={props.results[id.id]} idParam={intId} />
        </div>   
    );
}
export const mapStateToProps = (state) => {
    return ({ results: state.quizData, error: state.hasErrors })
};
export default connect(mapStateToProps)(Quiz);