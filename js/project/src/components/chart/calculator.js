import './Calculator.css';
import React, { Component } from 'react';

import data from "../../data/currency.json";
export class Calculator extends Component {
    render() {
        const Calculator = (
            <div className="pr-Calculator-form-wrapper">
                <CalculatorForm />
            </div>
        );
        const defaulth = (
            <div className="pr-Calculator__default">
                Calculator
            </div>
        );
        return (
            <div className="pr-Calculator" >
                {Calculator}
            </div>
        );

    }
}
class CalculatorForm extends Component {
    constructor(props) {
        super(props);
        this.source;
        this.destination;

    }
    validateFormItems(item, value, error) {
        let erTrue = `{ "${error}": true }`;
        erTrue = JSON.parse(erTrue);
        let erFalse = `{ "${error}": false }`;
        erFalse = JSON.parse(erFalse);

        if (isNaN(+item[value].value)) {
            item.setState(
                erTrue
            );
            return false;
        }
        else {
            item.setState(
                erFalse
            );
            return true;

        }

    }
    Convert() {
        let cur = this.source.currencyValue.value;
        let curRate = this.source.currencyRate.value;
        let newCurRate = this.destination.currencyRate.value;

        this.destination.currencyValue.value = cur * curRate / newCurRate;
    }
    getCourseVal() {
        let sourceInputValidate = this.validateFormItems(this.source, 'currencyValue', 'inputError');
        let sourceSelctValidate = this.validateFormItems(this.source, 'currencyRate', 'selectError');

        if (sourceSelctValidate && sourceInputValidate) {
            if (this.validateFormItems(this.destination, 'currencyRate', 'selectError'))
                this.Convert();
            return true;
        }

        else
            return false;

    }
    currencyConvert() {
        let DestinationSelctValidate = this.validateFormItems(this.destination, 'currencyRate', 'selectError');
        if (this.getCourseVal() && DestinationSelctValidate)
            this.Convert();
    }

    render() {
        return (
            <div className="pr-Calculator-form">
                <div className="pr-form__title">
                    Currency Calculator
                </div>
                <CalculatorFormItem
                    label="Source"
                    input="Text input"
                    ref={(component) => { this.source = component }}
                    getCourseVal={this.getCourseVal.bind(this)}
                />
                <CalculatorFormItem
                    label="Destination"
                    input="Text"
                    ref={(component) => { this.destination = component }}
                    getCourseVal={this.currencyConvert.bind(this)}
                    readonly
                />
            </div>
        );
    }
}
class CalculatorFormItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputError: false,
            selectError: false
        }
        this.dataCourse = data;
        this.currencyValue;
        this.currencyRate;

    }

    // }

    render() {
        return (
            <div className="pr-form-item">
                <div className="pr-form__label">
                    {this.props.label}
                </div>
                <div className="pr-form__input-wrapper">
                    <input
                        className="pr-form__input"
                        readOnly={this.props.readonly}
                        ref={(input) => { this.currencyValue = input }}
                        placeholder={this.props.input}
                    />
                    <div className="pr-form__error">
                        {this.state.inputError ? "Please input number!" : ""}
                    </div>

                </div>
                <div className="pr-form__select-wrapper">
                    <select
                        ref={(select) => { this.currencyRate = select }}
                        onChange={() => this.props.getCourseVal()}
                        className="pr-form__select"
                    >
                        <option>USD1</option>
                        {
                            this.dataCourse
                                .map(
                                (item, index) => {
                                    return (
                                        <option value={item['Cur_OfficialRate']} key={index}>{item['Cur_Abbreviation']}</option>
                                    );
                                })
                        }

                    </select>
                    <div className="pr-form__error">
                        {this.state.selectError ? "You peak USD1 in source field" : ""}
                    </div>
                </div>
            </div>

        );
    }
}
