import './currencies.css';
import React, { Component } from 'react';
import { DatePicker } from './../date-picker';
import { CurrencyChart } from './../currency-chart';
import { connect } from 'react-redux';
import { addCurrencyToFavourite } from './../../store/actions';
class Currencies extends Component {
    render() {
        const selectedCurrency = {
            nameShort: this.props.nameShort,
            rate: this.props.rate,
            ID: this.props.ID
        };
        return (
            <div className="pr-currencies" >
                <div>
                    <div className="pr-currencies-add-favourite">
                        <button className="pr-add-favourite__button"
                            onClick={()=>this.props.addCurrency(selectedCurrency)}
                        >
                            To Favourite
                            </button>
                    </div>
                    <div className="pr-currencies-datepicker-wraper">
                        <DatePicker />
                        <DatePicker />
                    </div>
                    <div className="pr-currencies-chart-wraper">
                        <CurrencyChart />
                    </div>
                </div>
            </div>
        );

    }
}
const mapStateToProps = (state) => {
    const nameShort = state.selectedCurrency.nameShort;
    const rate = state.selectedCurrency.rate;
    const ID = state.selectedCurrency.ID;
    return { nameShort, rate, ID };
};

const mapDispatchToProps = (dispatch) => ({
    addCurrency: (value) => dispatch(addCurrencyToFavourite(value))
});
let output = connect(mapStateToProps, mapDispatchToProps)(Currencies);
export { output as Currencies };