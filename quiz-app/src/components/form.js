import React from 'react';
import '../styles/form.css';
import { connect } from 'react-redux';
import { getQuizData } from './api/';
import { useHistory } from 'react-router-dom';

export const Form = (props) => {
    let info = props.categories;
    // remove link that never loads
    info.splice(20, 1)
    let data = props.quizData
    let history = useHistory();
    return (
        <div>
            <form className='form' onSubmit={(event) => { props.handleSubmit(event, history, data) }}>
                <select name="topic">
                    {info.map((data) => { return <option className={data.id} key={data.id} value={data.id}>{data.name}</option> })}
                </select>
                <br />
                <label htmlFor="easy"><input id="easy" type="radio" key="easy" name="difficulty" value="easy" />Easy</label>
                <br />
                <label htmlFor="medium"><input id="medium" type="radio" name="difficulty" value="medium" />Medium</label>
                <br />
                <label htmlFor="hard"><input id="hard" type="radio" name="difficulty" value="hard" />Hard</label>
                <br />
                <input id="textInput" onChange={props.handleChange} type='text' placeholder='player1' /><br />
                <input type="submit" value="Go" />
            </form>
        </div>
    )
}
export const mapStateToProps = (state, ownProps) => {
    return { categories: state.catDropDown, justStore: ownProps, userName: state.users, quizData: state.quizData }
};
//add an on change to add user name to data
export const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (event, history, data) => {
            event.preventDefault();
            let difficulty = event.target.difficulty.value;
            let topic = event.target.topic.value;
            dispatch({type: 'reset'});
            dispatch(getQuizData(topic, difficulty));
            if (data.length === 0) {
                alert('Server Error. Please try again')
                history.push(`/form/`)
            }
            else {
                history.push('/quiz/0');
            }
        },
        handleChange: (event) => {
            let name = event.target.value;
            dispatch({ type: 'addUser', payload: name });
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form);