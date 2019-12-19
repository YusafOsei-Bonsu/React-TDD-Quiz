import React from 'react'
export const Questions = ({results}) => {
  // console.log(results.question)
    return (
        <div className='answers'> 
          <h5>{atob(results.question)}</h5>
        </div>
        );
}
export default Questions;