import { ADD_CURRENCY_TO_FAVOURITE } from './action.types';

export function addCurrencyToFavourite(payload) {
    return {
        type: ADD_CURRENCY_TO_FAVOURITE,
        payload
    };
}

