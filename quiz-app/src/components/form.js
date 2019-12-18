import React from 'react';
import '../styles/form.css';
import { connect } from 'react-redux';
import { getQuizData } from './api/';
import { useHistory } from 'react-router-dom';

const Form = (props) => {
    let info = props.categories;
    let history = useHistory();

    let difficultyLevels = {
        medium: 'medium',
        easy: 'easy',
        hard: 'hard' 
    }

    return (
        <div className='form'>
            <form onSubmit={(event) => {props.handleSubmit(event); history.push('/quiz')}}>
                <select name="topic">
                    {info.map((data) => { return <option key={data.id} value={data.id}>{data.name}</option> })}
                </select><br />
                <label>
                    <input type="radio" name="difficulty" value={difficultyLevels.easy} />
                    {difficultyLevels.easy}
                </label>
                <br />
                <label>
                    <input type="radio" name="difficulty" value={difficultyLevels.medium} />
                    {difficultyLevels.medium}
                </label>
                <br />
                <label>
                    <input type="radio" name="difficulty" value={difficultyLevels.hard} />
                    {difficultyLevels.hard}
                </label>
                
                <br/>
                <input id='textbox' onChange={props.handleChange} type='text' placeholder='player1' /><br/>
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
        handleSubmit: (event) => {
            event.preventDefault();
            let difficulty = event.target.difficulty.value;
            let topic = event.target.topic.value;
            dispatch(getQuizData(topic, difficulty));
        },
        handleChange: (event) => {
            let name = event.target.value;
            dispatch({ type: 'addUser', payload: name })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);