import './favourite-currencies.css';
import React, { Component } from 'react';
import { CurrencyChart } from './../currency-chart';
import { connect } from 'react-redux';
import { selectedCurrency, deleteCurrencyInFavourite, confirmCurrencyInFavourite } from './../../store/actions';
import { fromCurrencyDate, endCurrencyDate ,DatePicker} from './../date-picker';
class FavouriteCurrencies extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.favouriteActive = this.favouriteActive.bind(this);
        this.deleteFavourite = this.deleteFavourite.bind(this);
        this.previous;
        this.counter = 0;
    }
    favouriteActive(event, item) {
        if (this.counter > 0) {
            this.previous.classList.remove('pr-favourite-header__item_active');
        }
        event.target.classList.add('pr-favourite-header__item_active');
        this.previous = event.target;
        this.counter++;
        this.props.selectedCurrency(this.props.currencies[item]);
        this.props.confirmCurrency(item);
        console.log(this.props.currencies);
    }
    deleteFavourite(item) {
        this.props.deleteCurrency(item);
    }
    render() {
        const mas = Object.keys(this.props.currencies);
        return (
            <div className="pr-favourite" >
                <div className="pr-favourite-header" >
                    {
                        this.props.currenciesIndex.map(
                            (item, index) => {
                                return (
                                    <div key={index} className="pr-favourite-header__item">
                                        <div className="pr-favourite-header-control">
                                            <div className="pr-favourite-header__confirm-wrapper">
                                                {this.props.currencies[item].notification ?
                                                    '' :
                                                    <div className="pr-favourite-header__confirm"></div>}
                                            </div>
                                            <div className="pr-favourite-header__close" onClick={() => {
                                                this.deleteFavourite(item)
                                            }}>
                                                X
                                        </div>
                                        </div>
                                        <div className="pr-favourite-header__value" onClick={(event) => {
                                            this.favouriteActive(event, item);
                                        }}>
                                            {item}
                                        </div>
                                    </div>
                                );
                            })
                    }
                </div>    
                <div className="pr-favourite-item" >
                    <div className="pr-text">Currency Name: {this.props.currency.name}</div>
                    <div className="pr-text">Currency Abbreviation: {this.props.currency.nameShort}</div>
                    <div className="pr-text">Start date: {this.props.currency.dateStart}</div>
                    <div className="pr-text">End date: {this.props.currency.dateEnd}</div>
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
                            currencyID={this.props.currencyID}
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
    const currencies = state.favouriteCurrencies.currencies;
    const currency = state.selectedCurrency.currency;
    const currenciesIndex = Object.keys(state.favouriteCurrencies.currencies);
    const fromDate = state.selectedCurrency.fromCurrencyDate;
    const endDate = state.selectedCurrency.endCurrencyDate;
    const currencyID = state.selectedCurrency.currency.ID;
    return { currencies, currency, currenciesIndex, fromDate, endDate, currencyID };
};

const mapDispatchToProps = (dispatch) => ({
    selectedCurrency: (value) => dispatch(selectedCurrency(value)),
    deleteCurrency: (value) => dispatch(deleteCurrencyInFavourite(value)),
    confirmCurrency: (value) => dispatch(confirmCurrencyInFavourite(value))
});
let output = connect(mapStateToProps, mapDispatchToProps)(FavouriteCurrencies);
export { output as FavouriteCurrencies };