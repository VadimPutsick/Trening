import './date-picker.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedCurrencyDate } from './../../store/actions';
export let fromCurrencyDate = 'fromCurrencyDate';
export let endCurrencyDate = 'endCurrencyDate';
import { DateParcer } from './date-parcer';
class DatePicker extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // const defaultvalue = new DateParcer(this.props.defaultvalue).toString();
        return (
            <div className="pr-currencies-datepicker">
            <div className="pr-text"> {this.props.label}:</div>
            <div className="pr-datepicker">
                <input type="date" value={this.props.defaultvalue}
                    onChange={(e) => {
                        this.props.dispatch(selectedCurrencyDate(e.target.value, this.props.datetype));
                        // selectedCurrencyDate
                    }
                    }
                />
            </div>
        </div>
        );

    }
}

let output = connect()(DatePicker);
export { output as DatePicker };

