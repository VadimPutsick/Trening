import { SELECTED_CURRENCY } from './action.types';

export function selectedCurrency(payload) {
    return {
        type: SELECTED_CURRENCY,
        payload
    };
}

