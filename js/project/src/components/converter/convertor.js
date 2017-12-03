import './convertor.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedCurrency } from './../../store/actions';


class Convertor extends Component {
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
            <div className="pr-calculator-form">
                <div className="pr-form-item">
                    <div className="pr-form__label" onClick={
                        () => {
                            console.log("dest = " + this.destCurrency);
                        }
                    }>
                        Value
                    </div>
                    <div className="pr-form__input-wrapper">
                        <input className="pr-form__input" onChange={(event) => this.calculate(event.target.value)} />
                        <div className="pr-error">
                            {this.state.inputError ? 'Please, input number' : ''}
                        </div>
                    </div>
                    <div className="pr-form__select-wrapper">
                        {this.props.selectedCurrencyNameShort}
                    </div>
                </div>
                <div className="pr-form-item">
                    <div className="pr-form__label">
                        Destination
                    </div>
                    <div className="pr-form__input-wrapper">
                        <input className="pr-form__input pr-form__input_readonly"
                            value={this.state.convertedCurrency} readOnly />
                    </div>
                    <div className="pr-form__select-wrapper">
                        <input className="pr-form__select" list="character"
                            onChange={(event) => this.destCurrency = event.target.value} />
                        <datalist id="character">
                            {
                                this.props.currencyList.map(
                                    (item, index) => {
                                        return (
                                            <option key={index} >{item.nameShort}</option>
                                        );
                                    })
                            }
                        </datalist>
                        <div className="pr-error">
                            {this.state.selectError ? `Could not find ${String(this.destCurrency).toUpperCase()}` : ''}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const selectedCurrencyNameShort = state.selectedCurrency.currency.nameShort;
    const selectedCurrencyRate = state.selectedCurrency.currency.rate;
    const currencyList = state.currecyList.items;
    const nameRate = state.currecyList.nameRate;
    const currencyID = state.selectedCurrency.currency.ID;
    return { selectedCurrencyNameShort, selectedCurrencyRate, currencyList, nameRate, currencyID };
};

const mapDispatchToProps = (dispatch) => ({
    selectedCurrency: (todo) => dispatch(selectedCurrency(todo))
});
let output = connect(mapStateToProps, mapDispatchToProps)(Convertor);
export { output as Convertor };

