import { combineReducers } from 'redux';
import { todoReducer } from './todo.reducer';

export const appReducers = combineReducers({
    todo: todoReducer
});
