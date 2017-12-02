import { ADD_CURRENCY_TO_FAVOURITE } from './../actions';
// let defaultValue = JSON.parse( localStorage.getItem('defaultCurrency'))||{nameShort:'error',rate:'',ID:''};
const initialState = {
    state: 'INITIAL',
    currencyCounter:0,
    currencies:[]
};
// Selected Currency Reducer
export function favouriteCurrencyReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CURRENCY_TO_FAVOURITE:
        let counter = state.currencyCounter;
        counter++;
            return {
                ...state,
                state: 'Currency add',
                currencyCounter:counter,
                currencies:[...state.currencies,action.payload]
            };
        default:
            return state;
    }
}