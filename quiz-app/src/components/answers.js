import React from 'react'

const Answers = (props) => {
    let answers = [props.results.correct_answer];
    answers = answers.concat(props.results.incorrect_answers);
    answers.sort(function (a, b) { return 0.5 - Math.random() });

    return (
        <div className='answers'>
            <form onSubmit={(event) => props.handle(event)}>
                <button >{answers[0]}</button>
                <button>{answers[1]}</button>
                <button>{answers[2]}</button>
                <button>{answers[3]}</button>
            </form>
        </div>
    );
}

export default Answers;