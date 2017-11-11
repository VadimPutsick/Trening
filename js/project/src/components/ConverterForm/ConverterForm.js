import './ConverterForm.css';
import React, { Component } from 'react';
import  { ConverterFormItem } from '../ConverterFormItem/ConverterFormItem.js';

export class ConverterForm extends Component {
    constructor(props) {
        super(props);
        this.inputElement;
    }
// getCourseVal(value){
// console.log(value);
// console.log(this.textInput);
// }
// currencyConver(){
//     //  newCur = cur*curVal/newCurVal;
// }

    render() {
        return (
            <div className="pr-converter-form">
                <div  onClick={()=>this.props.setDefault()}  
                className="pr-form__title">
                    Currency converter
                </div>
                <ConverterFormItem 
                /// getval={this.getCourseVal}
                label="Source" 
                input="Text input"
                    
                />
                <ConverterFormItem                 
                label="Destination" 
                input="Text"
               
                readonly             
                />



            </div>
        );
    }
}