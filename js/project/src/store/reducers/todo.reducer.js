import { ADD_TODO, REMOVE_TODO } from './../actions';

const initialState = {
    state: 'INITIAL',
    values: []
}

export function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                values: [...state.values, action.payload]
            };

        case REMOVE_TODO:
            let newValues = state.values.filter(v => v !== action.payload);

            return {
                ...state,
                values: [...newValues]
            };

        default:
            return state;
    }
}