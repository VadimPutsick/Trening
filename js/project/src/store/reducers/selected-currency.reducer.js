import { SELECTED_CURRENCY } from './../actions';
// import { initialState } from './currecy-list.reducer';
let defaultValue = JSON.parse( localStorage.getItem('defaultCurrency'))||{nameShort:'error',rate:'',ID:''};
const initialState = {
    state: 'INITIAL',
    nameShort: defaultValue.nameShort,
    rate: defaultValue.rate,
    ID: defaultValue.ID
};
// Selected Currency Reducer
export function selectedCurrencyReducer(state = initialState, action) {
    switch (action.type) {
        case SELECTED_CURRENCY:
            return {
                ...state,
                state: 'Currency selected',
                nameShort: action.payload.nameShort,
                rate: action.payload.rate,
                ID: action.payload.ID
            };
        default:
            return state;
    }
}