import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Initialise store
const initialState = {
    users: [],
    catDropDown: [],
    quizData: []
}
// Initialise reducer
const reducer = (state=initialState, action)=> {
    return state
}
// Create and export store
export const store = createStore(reducer, applyMiddleware(thunk));