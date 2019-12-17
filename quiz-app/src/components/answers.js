import React from 'react'

const Answers = (props) => {
    let answers = [props.results.correct_answer];
    answers = answers.concat(props.results.incorrect_answers);
    answers.sort(function(a, b){return 0.5 - Math.random()});
    
    return ( 
        <div className='answers'>
            <p>{answers[0]}</p>
            <p>{answers[1]}</p>
            <p>{answers[2]}</p>
            <p>{answers[3]}</p>
        </div>
    );
}

export default Answers;