import './date-picker.css';
import React, { Component } from 'react';


export class DatePicker extends Component {
    render() {
        return (
            <div className="pr-currencies-datepicker">
                <div className="pr-text">From date:</div>
                <div className="pr-datepicker">
                    <input type="date" />
                </div>
            </div>
        );
    }
}
