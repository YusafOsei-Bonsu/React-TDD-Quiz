import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/start.css';

const Start = () => {
    let history = useHistory();

    // Navigates to the form page
    function goToForm() {
        history.push('/form');
    }

    return (
        <div className='start'>
           <button className="glow-on-hover" onClick={goToForm}>Start Quiz</button>
        </div>
    )
}

export default Start;