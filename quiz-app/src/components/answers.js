import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/answers.css';

export const Answers = (props) => {
    let correctAnswer = props.results.correct_answer;
    let answer = [props.results.correct_answer];
    let answers = answer.concat(props.results.incorrect_answers);
    answers.sort(function (a, b) { return 0.5 - Math.random() });
    let iD = props.idParam;
    let history = useHistory();
    return (
        <div className='answers'>
            <form onSubmit={(event) => {
                props.handleSubmit(event, iD, history, correctAnswer, props)
            }}>
                {answers.map(answer => {
                    return (
                        <div className="Container" key={answer}>
                            <label htmlFor={answer}>{atob(answer)}</label>
                            <input type='radio' name='answer' value={answer} id={answer} key={answer} />
                        </div>
                    )
                })}
                <button id="submitBtn">Submit</button>
                <h1>{props.user} your score is: {props.data}</h1>
            </form>
        </div>
    );
}
export const mapStateToProps = (state) => {
    return { len: state.quizData, data: state.score, user:state.users }
}
export const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (event, iD, history, correctAnswer, props) => {
            event.preventDefault();
            let userAnswer = event.target.answer;
            (userAnswer.value === correctAnswer) ? dispatch({ type: 'increment' }) : console.log("incorrect");
            if (iD === props.len.length - 1) {
                return history.push('/results')
            } else {
                return history.push(`/quiz/${iD + 1}`);
            }

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Answers);