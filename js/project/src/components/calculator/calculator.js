import './calculator.css';
import React, { Component } from 'react';
import { CurrencyChart } from './../currency-chart';
import { Convertor } from './../converter';
import { connect } from 'react-redux';
import { selectedCurrency } from './../../store/actions';
import { DateParce } from './../../service/entity';
// import { DateParce } from './../../service/entity';
// fromCurrencyDate: new DateParce().toStringMonthDay(-1,0),
 class Calculator extends Component {
     render() {
        return (
            <div className="pr-calculator">
              <Convertor/>
                <div className="pr-chart">
                    <CurrencyChart
                        currencyID={this.props.currencyID}
                        fromCurrencyDate={this.props.fromDate}
                        endCurrencyDate={this.props.endDate}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const fromDate = state.selectedCurrency.fromCurrencyDate;
    const endDate = state.selectedCurrency.endCurrencyDate;
    const currencyID = state.selectedCurrency.currency.ID;
    return { fromDate, endDate, currencyID };
};

let output = connect(mapStateToProps)(Calculator);
export { output as Calculator };

