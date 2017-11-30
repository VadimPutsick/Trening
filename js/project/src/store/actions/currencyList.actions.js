import { GET_CURRENCY_LIST,CURRENCY_LIST_FILTERED } from './currencyList.types';

export function getCurrencyList(payload) {
    return {
        type: GET_CURRENCY_LIST,
        payload
    };
}

export function currencyListFiltered(payload) {
    return {
        type: CURRENCY_LIST_FILTERED,
        payload
    };
}

