import './converter.css';
import React, { Component } from 'react';
import { ConverterForm } from '../converter-form';
export class Converter extends Component {
    render() {
        const converter = (
            <div className="pr-converter-form-wrapper">
                <ConverterForm/>
            </div>
        );
        const defaulth = (
            <div className="pr-converter__default">
                Converter
            </div>
        );
        return (
            <div className="pr-converter" >
                {converter}
            </div>
        );

    }
}