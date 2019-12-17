import axios from 'axios';

export const getCatData = (dispatch) => {
    return (dispatch) => {
        axios.get("https://opentdb.com/api_category.php").then(response => {
            const data = response.data;
            dispatch({ type: 'catDropDown', payload: data.trivia_categories });
        })

    }
};
// Fetch fo quiz by category id
export const x = (dispatch, value) => {
    return (dispatch) => {
        axios.get(`https://opentdb.com/api.php?amount=10&category=${value}`).then(response => {
            const data = response.data;
            console.log(data);
            dispatch({ type: 'questionsAnswers', payload: data });
        })
        // .catch(() => dispatch({type: 'handle-error' hasErrors: true }))

    }
};