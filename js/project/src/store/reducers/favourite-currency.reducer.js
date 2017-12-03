import { ADD_CURRENCY_TO_FAVOURITE, DELETE_CURRENCY_IN_FAVOURITE, CONFIRM_CURRENCY_IN_FAVOURITE } from './../actions';
import { currenciesFavouriteStorage, currenciesCounter } from './../../localStorage';

const initialState = {
    currencyCounter: currenciesCounter.value || 0,
    currencies: currenciesFavouriteStorage.value || {}
};

// Selected Currency Reducer
export function favouriteCurrenciesReducer(state = initialState, action) {
    let counter = state.currencyCounter;
    let newProperty = state.currencies;
    function changeAndAddTolocalStorage() {
        //add to locallstorage
        currenciesFavouriteStorage.value = newProperty;
        currenciesCounter.value = counter;
        return {
            ...state,
            currencyCounter: counter,
            currencies: newProperty
        };
    }

    switch (action.type) {
        case ADD_CURRENCY_TO_FAVOURITE:
            newProperty[action.payload.nameShort] ? counter : counter++;
            newProperty[action.payload.nameShort] = { ...action.payload, notification: false };
            return changeAndAddTolocalStorage();
        case CONFIRM_CURRENCY_IN_FAVOURITE:
            newProperty[action.payload].notification ? counter : counter--;
            newProperty[action.payload].notification = true;
            return changeAndAddTolocalStorage();
        case DELETE_CURRENCY_IN_FAVOURITE:
            newProperty[action.payload].notification ? counter : counter--;
            delete newProperty[action.payload];
            return changeAndAddTolocalStorage();
        default:
            return state;
    }

}