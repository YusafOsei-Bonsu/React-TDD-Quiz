import React from 'react'
const Questions = ({results}) => {
  console.log(results)
    return (
        <div className='answers'> 
          <h5>{atob(results.question)}</h5>
        </div>
        );
}
export default Questions;