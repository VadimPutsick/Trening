import { SELECTED_CURRENCY,SELECTED_CURRENCY_DATE } from './action.types';

export function selectedCurrency(payload) {
    return {
        type: SELECTED_CURRENCY,
        payload
    };
}
export function selectedCurrencyDate(payload,datetype) {
    return {
        type: SELECTED_CURRENCY_DATE,
        payload,
        datetype
    };
}


