import {createStore, applyMiddleware} from "redux";
import {rootReducer} from '../reducers';
import logger from "redux-logger";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));