import './favourite-currencies.css';
import React, { Component } from 'react';
import { CurrencyChart } from './../currency-chart';
import { connect } from 'react-redux';
import { selectedCurrency } from './../../store/actions';
class FavouriteCurrencies extends Component {
    constructor(props) {
        super(props);
        this.favouriteActive = this.favouriteActive.bind(this);
        this.previous;
        this.counter = 0;
    }
    favouriteActive(event,item) {
        if (this.counter > 0) {
            this.previous.classList.remove('pr-favourite-header__item_active');
        }
        event.target.classList.add('pr-favourite-header__item_active');
        this.previous = event.target;
        this.counter++;
        this.props.selectedCurrency(this.props.currencies[item]);
    }
    render() {
        return (
            <div className="pr-favourite" >
                <div className="pr-favourite-header" >
                    {
                        Object.keys(this.props.currencies).map(
                            (item, index) => {
                                return (
                                    <div key={index} className="pr-favourite-header__item"
                                        onClick={(event) => {
                                            this.favouriteActive(event,item);
                                        }
                                        }>
                                        {item}
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
                    <CurrencyChart />
                </div>
            </div>
        );

    }
}

const mapStateToProps = (state) => {
    const currencies = state.favouriteCurrencies.currencies;
    const currency = state.selectedCurrency.currency;
    return { currencies, currency};
};

const mapDispatchToProps = (dispatch) => ({
    selectedCurrency: (value) => dispatch(selectedCurrency(value))
});
let output = connect(mapStateToProps, mapDispatchToProps)(FavouriteCurrencies);
export { output as FavouriteCurrencies };