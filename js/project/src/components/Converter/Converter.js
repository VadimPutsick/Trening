import './converter.css';
import React, { Component } from 'react';
import { ConverterForm } from '../ConverterForm/ConverterForm.js';



export class Converter extends Component {
    constructor(props) {
        super(props);
        this.default = (
            <div onClick={this.setConverter.bind(this)} className="pr-converter__default">
                Converter
        </div>
        );
        this.converter = (
            <div className="pr-converter-form-wrapper">
                <ConverterForm setDefault={this.setDefault.bind(this)} />
            </div>
        );
        
        this.state = {
            currency: (
                this.default
            )
        }
    }
    setDefault() {
        this.setState({
            currency: this.default
        });
    }
    setConverter() {
        this.setState({
            currency: (
                this.converter
            )
        });
    }
    render() {
        return (
            <div className="pr-converter">
                {this.state.currency}
            </div>
        );
    }
}
