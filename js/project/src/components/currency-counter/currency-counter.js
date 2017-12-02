import './currency-counter.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
class CurrencyCounter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="pr-currency__counter" >
                {this.props.counter}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    let counter = state.favouriteCurrencies.currencyCounter;
    return { counter };
};

let output = connect(mapStateToProps)(CurrencyCounter);
export { output as CurrencyCounter };



