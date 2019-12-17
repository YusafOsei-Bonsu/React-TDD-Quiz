import axios from 'axios';

export const getCatData = (dispatch) => {
    return (dispatch) => {
        axios.get("https://opentdb.com/api_category.php").then(response => {
            const data = response.data;
            dispatch({ type: 'catDropDown', payload: data.trivia_categories });
        })

    }
};
// Fetch for quiz by category id, level and 
export const getQuizData = (value, dif, dispatch) => {
    return (dispatch) => {
        axios.get(`https://opentdb.com/api.php?amount=10&category=${value}&difficulty=${dif}`).then(response => {
            const data = response.data.results;
            console.log(data);
            dispatch({ type: 'questionsAnswers', payload: data });
        })
        // .catch(() => dispatch({type: 'handle-error' hasErrors: true }))
    }
};