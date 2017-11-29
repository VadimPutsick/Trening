import { combineReducers } from 'redux';
import { currecyListReducer } from './currecy-list.reducer';

export const appReducers = combineReducers({
    currecyList: currecyListReducer
});
