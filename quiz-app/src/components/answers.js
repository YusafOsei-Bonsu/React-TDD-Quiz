import React from 'react';
import { useHistory } from 'react-router-dom';

const Answers = (props) => {
    let answers = [props.results.correct_answer];
    answers = answers.concat(props.results.incorrect_answers);
    answers.sort(function (a, b) { return 0.5 - Math.random() });
    let iD = props.idParam;
    let history = useHistory();
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div className='answers'>
            <form onSubmit={(event) => {
                handleSubmit(event);
                history.push(`/quiz/${iD + 1}`)
            }}>
                <button >{answers[0]}</button>
                <button >{answers[1]}</button>
                <button >{answers[2]}</button>
                <button >{answers[3]}</button>
            </form>
        </div>
    );
}

export default Answers;