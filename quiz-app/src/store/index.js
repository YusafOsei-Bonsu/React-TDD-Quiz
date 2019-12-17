import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Initialise store
const initialState = {
    users: [],
    catDropDown: [],
    quizData: []
}
// Initialise reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'catDropDown':
            // console.log( action.payload)
            return Object.assign({}, state, { catDropDown: action.payload })
        case 'questionsAnswers':
            // console.log( action.payload)
            return Object.assign({}, state, { quizData: action.payload })
            default:
                return state
            }
}
// Create and export store
export const store = createStore(reducer, applyMiddleware(thunk));