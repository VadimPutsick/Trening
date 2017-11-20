import './converter-form.css';
import React, { Component } from 'react';
import { ConverterFormItem } from '../converter-form-item';

export class ConverterForm extends Component {
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

        if (sourceSelctValidate&&sourceInputValidate)
        {
            if (this.validateFormItems(this.destination, 'currencyRate', 'selectError'))
            this.Convert();
             return true;
        }
           
        else
            return false;

    }
    currencyConvert() {  
        let DestinationSelctValidate =this.validateFormItems(this.destination, 'currencyRate', 'selectError');       
        if (this.getCourseVal()&&DestinationSelctValidate)
            this.Convert();
    }

    render() {        
        return (
            <div className="pr-converter-form">
                <div className="pr-form__title">
                    Currency converter
                </div>
                <ConverterFormItem
                    label="Source"
                    input="Text input"
                    ref={(component) => { this.source = component }}
                    getCourseVal={this.getCourseVal.bind(this)}
                />
                <ConverterFormItem
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
