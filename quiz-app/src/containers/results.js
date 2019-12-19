import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
export const Results = (props) => {
    let history = useHistory();
    return (
        <div className='results'>
           <h1>Results</h1> 
           <h3>{props.user}, you scored {props.data} out of {props.len}</h3>
           <button onClick={()=>{props.handleClick(history);history.push('/');}}>Restart Quiz</button>
        </div>
    );
}
export const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => {
            dispatch({ type: 'reset' });   
        }
    }
}
export const mapStateToProps = (state, ownProps) => {
    return {  len:state.quizData.length ,data: state.score, user:state.users  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Results);