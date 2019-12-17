import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Setting up storage to make sure the store persist after refresh
const persistConfig = {
    key: 'root',
    storage,
};
// Initialise store
const initialState = {
    users: [],
    catDropDown: [],
    quizData: []
}
// Initialize reducer. The reducer is the only way to communicate with state.
// It takes an action creates new state object, then updates the new state object. 
const reducer = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case 'catDropDown':
            // console.log( action.payload)
            return Object.assign({}, state, { catDropDown: action.payload })
        case 'questionsAnswers':
            // console.log( action.payload)
            return Object.assign({}, state, { quizData: action.payload })
        case 'addUser':
            return Object.assign({}, state, { users: action.payload })
        default:
            return state
    }
}
const persistedReducer = persistReducer(persistConfig, reducer)
// Create and export store
export const store = createStore(persistedReducer, applyMiddleware(thunk));
// Export persistent store
export let persistor = persistStore(store);