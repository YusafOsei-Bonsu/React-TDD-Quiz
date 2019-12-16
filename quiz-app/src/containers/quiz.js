import React from 'react';
import Question from '../components/question';
import Answers from '../components/answers';

const Quiz = () => {
    return (
        <div className='questionAndAnswer'>
            <Question />
            <Answers /> 
        </div>
        
    );
}

export default Quiz;