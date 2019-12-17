import React from 'react';
import '../styles/form.css';
import { connect } from 'react-redux';
import { getQuizData } from './api/'

const Form = (props) => {
    let info = props.categories;
    return (
        <div className='form'>
            <form onSubmit={(event) => props.handleSubmit(event)}>
                <select name="topic">
                    {info.map((data) => { return <option key={data.id} value={data.id}>{data.name}</option> })}
                </select><br />
                <input type="radio" name="difficulty" value="easy" />
                <input type="radio" name="difficulty" value="medium" />
                <input type="radio" name="difficulty" value="hard" /><br/>
                <input type='text' placeholder='player1' /><br/>
                <input type="submit" value="Go" />
            </form>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return { categories: state.catDropDown, justStore: state, userName: state.users }
};
//add an on change to add user name to data
const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (event) => {
            event.preventDefault();
            let difficulty = event.target.difficulty.value;
            let topic = event.target.topic.value;
            dispatch(getQuizData(topic, difficulty));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);