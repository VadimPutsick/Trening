import { ADD_CURRENCY_TO_FAVOURITE,DELETE_CURRENCY_IN_FAVOURITE,CONFIRM_CURRENCY_IN_FAVOURITE } from './action.types';
export function addCurrencyToFavourite(payload) {
    return {
        type: ADD_CURRENCY_TO_FAVOURITE,
        payload
    };
}
export function deleteCurrencyInFavourite(payload) {
    return {
        type: DELETE_CURRENCY_IN_FAVOURITE,
        payload
    };
}
export function confirmCurrencyInFavourite(payload) {
    return {
        type: CONFIRM_CURRENCY_IN_FAVOURITE,
        payload
    };
}

