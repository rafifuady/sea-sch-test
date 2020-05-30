import { applyMiddleware, createStore } from 'redux';
// import { composeWithDevtools } from "redux-devtools-extension";

import appReducer from './reducer'
import thunk from 'redux-thunk'

let reduxStore = createStore(
    appReducer,
    applyMiddleware(thunk)
);

export default reduxStore