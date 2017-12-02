import { combineReducers } from 'redux';
import { currecyListReducer } from './currecy-list.reducer';
import { selectedCurrencyReducer } from './selected-currency.reducer';
import { favouriteCurrencyReducer } from './favourite-currency.reducer';
export const appReducers = combineReducers({
    currecyList: currecyListReducer,
    selectedCurrency: selectedCurrencyReducer,
    favouriteCurrencies:favouriteCurrencyReducer
});
