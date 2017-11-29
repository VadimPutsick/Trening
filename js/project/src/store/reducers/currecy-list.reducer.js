import { GET_CURRENCY_LIST_FULFILLED, GET_CURRENCY_LIST_REJECTED } from './../actions';

const initialState = {
    state: 'INITIAL',
    items: []
};

export function currecyListReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CURRENCY_LIST_FULFILLED:
            return {
                ...state,
                state: 'FULFILLED',
                items: action.payload
            };
        case GET_CURRENCY_LIST_REJECTED:
            return {
                ...state,
                state: 'REJECTED',
                error: action.payload.toString()
            };
        default:
            return state;
    }
}