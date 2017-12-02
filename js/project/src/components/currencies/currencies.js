import './currencies.css';
import React, { Component } from 'react';
import { DatePicker } from './../date-picker';
import { CurrencyChart } from './../currency-chart';
import { connect } from 'react-redux';
import { addCurrencyToFavourite } from './../../store/actions';
class Currencies extends Component {
    render() {
        return (
            <div className="pr-currencies" >
                <div>
                    <div className="pr-currencies-add-favourite">
                        <button className="pr-add-favourite__button"
                            onClick={()=>this.props.addCurrency(this.props.selectedCurrency)}
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
    const selectedCurrency = state.selectedCurrency.currency;
    return { selectedCurrency };
};

const mapDispatchToProps = (dispatch) => ({
    addCurrency: (value) => dispatch(addCurrencyToFavourite(value))
});
let output = connect(mapStateToProps, mapDispatchToProps)(Currencies);
export { output as Currencies };