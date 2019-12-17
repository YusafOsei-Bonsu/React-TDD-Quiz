import React from 'react';
import '../styles/form.css';

const Form = () => {
    return (
        <div className='form'>
            <form>
                <select name="topic">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                </select><br/>
                <div className='levelInputs'>
                <input type="radio" name="difficulty" value="easy" />
                <input type="radio" name="difficulty" value="medium" />
                <input type="radio" name="difficulty" value="hard" /><br/>   
                </div>

                <input id="textbox" type='text' placeholder='player1' />
            </form>
        </div>
    )
}

export default Form;