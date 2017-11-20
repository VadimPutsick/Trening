import './converter-form-item.css';
import React, { Component } from 'react';
import data from "../../data/currency.json";
export class ConverterFormItem extends Component {
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

    // checkedOnError(event) {
    //     if (isNaN(+event.target.value)) {
    //         this.setState(
    //             { inputError: true }
    //         );
    //     }
    //     else {
    //         this.cur = (+event.target.value);
    //         console.log(this.cur);
    //         this.setState(
    //             { inputError: false }
    //         );
    //     }

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
                        ref={(input)=>{this.currencyValue=input}}                         
                        placeholder={this.props.input}
                    />
                    <div className="pr-form__error">
                        {this.state.inputError ? "Please input number!" : ""}
                    </div>

                </div>
                <div className="pr-form__select-wrapper">                  
                    <select 
                    ref={(select)=>{this.currencyRate=select}}           
                    onChange={()=>this.props.getCourseVal() }
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