import React from 'react'

const Answers = (props) => {
    let answers = [props.results.correct_answer];
    answers = answers.concat(props.results.incorrect_answers);

    /* 
    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return 0.5 - Math.random()});

    Try implementing this to randomly display answers
    */

    console.log(answers);
    return ( 
        <div className='answers'>
            <p></p>
        </div>
    );
}

export default Answers;