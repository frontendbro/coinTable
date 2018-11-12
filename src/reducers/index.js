
import {combineReducers} from 'redux';
import {pageReducer} from './pageReducers.js';

export const rootReducer = combineReducers({
  page: pageReducer
})