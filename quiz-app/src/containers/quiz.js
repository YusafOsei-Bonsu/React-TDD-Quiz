import React from 'react';
import Answers from '../components/answers';
import Questions from '../components/questions';

const Quiz = ({results}) => {
    let i = 0;
    const counter = (i) => i++;

    const handleSubmit = (e) => {
        e.preventDefault();
        counter(i);
    }
        
    return (
        <div className='questionAndAnswer'>
            <Questions results={results[i]}/>
            <Answers results={results[i]}/>
        </div>
    );
}

export default Quiz;