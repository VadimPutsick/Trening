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
    constructor(props) {
        super(props);
        this.state = {
            convertedCurrency: '',
            inputError: false,
            selectError: false
        };
        this.destCurrency;
        this.calculate = this.calculate.bind(this);
        this.validateInput = this.validateInput.bind(this);
        this.validateSelect = this.validateSelect.bind(this);
    }
    validateInput(value) {
        if (isNaN(value)) {
            this.setState(
                { inputError: true }
            );
            return false;
        } else {
            this.setState(
                { inputError: false }
            );
            return true;
        }
    }
    validateSelect(value) {
        if (this.props.nameRate[value]) {
            this.setState(
                { selectError: false }
            );
            return true;
        } else {
            this.setState(
                { selectError: true }
            );
            return false;
        }
    }
    calculate(value) {
        if (this.validateInput(value) && this.validateSelect(this.destCurrency)) {
            let currValue = value;
            let currRate = this.props.selectedCurrencyRate;
            let newCurrRate = this.props.nameRate[this.destCurrency];
            let newcurrValue = currValue * currRate / newCurrRate;
            this.setState(
                { convertedCurrency: newcurrValue.toFixed(4) }
            );
        }
    }
    render() {
        return (
            <div className="pr-calculator">
              <Convertor/>
                <div className="pr-chart">
                    <CurrencyChart
                        currencyID={this.props.currencyID}
                        fromCurrencyDate={new DateParce().toStringMonthDay(-1,0)}
                        endCurrencyDate={new DateParce().toStringMonthDay(0,0)}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const currencyID = state.selectedCurrency.currency.ID;
    return { currencyID };
};

let output = connect(mapStateToProps)(Calculator);
export { output as Calculator };

