
import { GET_CURRENCY_LIST_FULFILLED, GET_CURRENCY_LIST_REJECTED, CURRENCY_LIST_FILTERED } from './../actions';


export let initialState = {
    state: 'INITIAL',
    items: [],
    filteredItems: [],
    nameRate: {}
};
// Selected Currency Reducer
export function currecyListReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CURRENCY_LIST_FULFILLED:
            localStorage.setItem('defaultCurrency', JSON.stringify(action.payload[0]));
            action.payload.forEach(
                function (item) {
                    state.nameRate[item.nameShort] = item.rate;
                }

            );
           
            return {
                ...state,
                state: 'FULFILLED',
                items: action.payload,
                filteredItems: action.payload

            };
        case GET_CURRENCY_LIST_REJECTED:
            return {
                ...state,
                state: 'REJECTED',
                error: action.payload.toString()
            };
        case CURRENCY_LIST_FILTERED:
            let newValues = state.items.filter(item => item.nameShort.indexOf(String(action.payload).toUpperCase()) !== -1);
            return {
                ...state,
                state: 'FILTERED',
                filteredItems: newValues
            };
        default:
            return state;
    }
}