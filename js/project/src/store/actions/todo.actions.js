import { ADD_TODO, REMOVE_TODO , GET_CURRENCY_LIST} from './todo.types';

export function addTodo(payload) {
    return {
        type: ADD_TODO,
        payload
    };
}

export function removeTodo(payload) {
    return {
        type: REMOVE_TODO,
        payload
    };
}
export function getCurrencyList(payload) {
    return {
        type: GET_CURRENCY_LIST,
        payload
    };
}


