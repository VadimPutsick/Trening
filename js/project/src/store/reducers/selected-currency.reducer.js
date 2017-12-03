import { SELECTED_CURRENCY, SELECTED_CURRENCY_DATE } from './../actions';
import { defaultSelectedCurrency } from './../../localStorage';
import { DateParce } from './../../service/entity';
// new DateParce().toStringMonthDay(false,-1)
const initialState = {
    state: 'INITIAL',
    currency: defaultSelectedCurrency.value || { nameShort: 'please select the currency', rate: '', ID: '' },
    fromCurrencyDate: new DateParce().toStringMonthDay(-1,0),
    endCurrencyDate:  new DateParce().toStringMonthDay(0,0)
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
