import './currencies.css';
import React, { Component } from 'react';
import { DatePicker, fromCurrencyDate, endCurrencyDate, DateParcer } from './../date-picker';
import { CurrencyChart } from './../currency-chart';
import { connect } from 'react-redux';
import { addCurrencyToFavourite } from './../../store/actions';
class Currencies extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="pr-currencies" >
                <div>
                    <div className="pr-currencies-add-favourite">
                        <button className="pr-add-favourite__button"
                            onClick={() => this.props.addCurrency(this.props.selectedCurrency)}
                        >
                            To Favourite
                            </button>
                    </div>
                    <div className="pr-currencies-datepicker-wraper">
                        <DatePicker
                            defaultvalue={this.props.fromDate}
                            datetype={fromCurrencyDate}
                            label="From Date" />
                        <DatePicker
                            defaultvalue={this.props.endDate}
                            datetype={endCurrencyDate}
                            label="End Date" />
                    </div>
                    <div className="pr-chart">
                        <CurrencyChart
                           currencyID ={this.props.currencyID}
                            fromCurrencyDate={this.props.fromDate}
                            endCurrencyDate={this.props.endDate}
                        />
                    </div>
                </div>
            </div>
        );

    }
}
const mapStateToProps = (state) => {
    const selectedCurrency = state.selectedCurrency.currency;
    const fromDate = state.selectedCurrency.fromCurrencyDate;
    const endDate = state.selectedCurrency.endCurrencyDate;
    const currencyID = state.selectedCurrency.currency.ID;
    return { selectedCurrency, fromDate, endDate, currencyID };
};

const mapDispatchToProps = (dispatch) => ({
    addCurrency: (value) => dispatch(addCurrencyToFavourite(value))
});
let output = connect(mapStateToProps, mapDispatchToProps)(Currencies);
export { output as Currencies };