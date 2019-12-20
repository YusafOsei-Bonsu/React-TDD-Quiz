import React from 'react';
import '../styles/answers.css';

export const Questions = ({results}) => {
    return (
        <div className='answers'> 
          <h5>{atob(results.question)}</h5>
        </div>
        );
}
export default Questions;