import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../styles/results.css';

export const Results = (props) => {
    let history = useHistory();
    return (
        <div className='results'>
            <h1>Results</h1>
            <h3>{props.user}, you scored {props.data} out of {props.len}</h3>
            <button className="glow-on-hover" onClick={() => { props.handleClick(history); history.push('/'); }}>Restart Quiz</button>
        </div>
    );
}
export const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => {
            dispatch({ type: 'reset' });
            dispatch({ type: 'addUser', payload: "User" })   
        }
    }
}
export const mapStateToProps = (state, ownProps) => {
    return { len: state.quizData.length, data: state.score, user: state.users }
};
export default connect(mapStateToProps, mapDispatchToProps)(Results);