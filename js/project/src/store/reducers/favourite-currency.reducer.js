import { ADD_CURRENCY_TO_FAVOURITE } from './../actions';
import { currenciesFavouriteStorage } from './../../localStorage';
// let defaultValue = JSON.parse( localStorage.getItem('defaultCurrency'))||{nameShort:'error',rate:'',ID:''};
const initialState = {
    state: 'INITIAL',
    currencyCounter: 0,
    currencies: currenciesFavouriteStorage.value||{}
};
// Selected Currency Reducer
export function favouriteCurrenciesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CURRENCY_TO_FAVOURITE:
            let counter = state.currencyCounter;
            let newProperty = state.currencies;
            newProperty[action.payload.nameShort] ? counter: counter++;
            newProperty[action.payload.nameShort] = action.payload;
            currenciesFavouriteStorage.value = newProperty;
            return {
                ...state,
                state: 'Currency add',
                currencyCounter: counter,
                currencies: newProperty
            };
        default:
            return state;
    }
}