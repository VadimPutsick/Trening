import './ConverterFormItem.css';
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
        this.cur;
        this.curVal;
        this.newCurVal;
        this.getCourseVal = this.getCourseVal.bind(this);
        this.checkedOnError = this.checkedOnError.bind(this);
        //  newCur = cur*curVal/newCurVal;
    }
    getCourseVal() {
        // if (this.props.label === "Source") {
        //     this.curVal = event.target.value;
        // }
        // else {
        //     this.newCurVal = event.target.value;
        //     console.log(this.cur);
        //     console.log(this.curVal);
        //     console.log(this.newCurVal);
        // }
       console.log(this.props.label);

    }

    currencyConver() {
        //  newCur = cur*curVal/newCurVal;
    }

    checkedOnError(event) {
        if (isNaN(+event.target.value)) {
            this.setState(
                { inputError: true }
            );
        }
        else {
            this.cur = (+event.target.value);
            console.log(this.cur);
            this.setState(
                { inputError: false }
            );
        }

    }

    render() {
        return (
            <div className="pr-form-item">
                <div className="pr-form__label">
                    {this.props.label}
                </div>
                <div className="pr-form__input-wrapper">
                    <input                       
                        readOnly={this.props.readonly}
                        onChange={this.checkedOnError}
                        className="pr-form__input"
                        placeholder={this.props.input}
                    />
                    <div className="pr-form__error">
                        {this.state.inputError ? "Please input number!" : ""}
                    </div>

                </div>
                <div className="pr-form__select-wrapper">
                    {/* onChange={this.props.getval(event.target.value)} */}
                    {/* <select onChange={(event) => this.props.getval({value:event.target.value, field:this.props.label})} */}
                    <select onChange={this.getCourseVal}
                        className="pr-form__select">
                        <option>USD1</option>
                        {
                            this.dataCourse
                                .map(
                                (item, index) => {
                                    return (
                                        <option value={item['Cur_OfficialRate']} key={index}>{item['Cur_Abbreviation']}</option>
                                    )
                                })
                        }

                    </select>
                    <div className="pr-form__error">
                        {this.state.inputError ? "You peak USD1 in source field" : ""}
                    </div>
                </div>
            </div>

        );
    }
}