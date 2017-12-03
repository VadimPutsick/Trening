import { SELECTED_CURRENCY, SELECTED_CURRENCY_DATE } from './../actions';
import { defaultSelectedCurrency } from './../../localStorage';
import { fromCurrencyDate, endCurrencyDate } from './../../components/date-picker';

const initialState = {
    state: 'INITIAL',
    currency: defaultSelectedCurrency.value || { nameShort: 'please select the currency', rate: '', ID: '' },
    fromCurrencyDate: '2017-11-3',
    endCurrencyDate: '2017-12-3'
};
// Selected Currency Reducer
export function selectedCurrencyReducer(state = initialState, action) {
    switch (action.type) {
        case SELECTED_CURRENCY:
            defaultSelectedCurrency.value = action.payload;
            return {
                ...state,
                state: 'Currency selected',
                currency: action.payload
            };
        case SELECTED_CURRENCY_DATE:
            state[action.datetype] = action.payload;
            return {
                ...state,
                state: 'Date selected'
            };
        default:
            return state;
    }
}
