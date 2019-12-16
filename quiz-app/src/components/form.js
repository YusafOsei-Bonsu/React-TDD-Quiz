import React from 'react';

const Form = () => {
    return (
        <div className='form'>
            <form>
                <select name="topic">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                </select>
                <input type="radio" name="easy" value="">Easy</input>
                <input type="radio" name="medium" value="">Medium</input>
                <input type="radio" name="hard" value="">Hard</input>
                <input type='text' placeholder='player1' />
            </form>
        </div>
    )
}

export default Form;