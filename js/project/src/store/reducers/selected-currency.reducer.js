import { SELECTED_CURRENCY } from './../actions';
// import { initialState } from './currecy-list.reducer';
let defaultValue = JSON.parse(localStorage.getItem('defaultCurrency')) || { nameShort: 'error', rate: '', ID: '' };
const initialState = {
    state: 'INITIAL',
    currency: defaultValue
};
// Selected Currency Reducer
export function selectedCurrencyReducer(state = initialState, action) {
    switch (action.type) {
        case SELECTED_CURRENCY:
            return {
                ...state,
                state: 'Currency selected',
                currency: action.payload
            };
        default:
            return state;
    }
}
