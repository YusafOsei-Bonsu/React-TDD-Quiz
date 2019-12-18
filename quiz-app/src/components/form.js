import React from 'react';
import '../styles/form.css';
import { connect } from 'react-redux';
import { getQuizData } from './api/';
import { useHistory } from 'react-router-dom';
const Form = (props) => {
    let info = props.categories;
    let history = useHistory();
    return (
        <div className='form'>
            <form onSubmit={(event) => { props.handleSubmit(event, history) }}>
                <select name="topic">
                    {info.map((data) => { return <option key={data.id} value={data.id}>{data.name}</option> })}
                </select><br />
                <label htmlFor="easy">Easy</label>
                <input id="easy" type="radio" name="difficulty" value="easy" />
                <br />
                <label htmlFor="medium">Medium</label>
                <input id="medium" type="radio" name="difficulty" value="medium" />
                <br />
                <label htmlFor="hard">Hard</label>
                <input id="hard" type="radio" name="difficulty" value="hard" />
                <br />
                <input onChange={props.handleChange} type='text' placeholder='player1' /><br />
                <input type="submit" value="Go" />
            </form>
        </div>
    )
}
const mapStateToProps = (state, ownProps) => {
    return { categories: state.catDropDown, justStore: ownProps, userName: state.users }
};
//add an on change to add user name to data
const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: async (event, history) => {
            event.preventDefault();
            let difficulty = event.target.difficulty.value;
            let topic = event.target.topic.value;
            await dispatch(getQuizData(topic, difficulty));
            history.push('/quiz/0')
        },
        handleChange: (event) => {
            let name = event.target.value;
            dispatch({ type: 'addUser', payload: name })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form);