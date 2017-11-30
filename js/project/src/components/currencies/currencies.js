import './currencies.css';
import React, { Component } from 'react';
import { DatePicker } from './../date-picker';
import { CurrencyChart } from './../currency-chart';

export class Currencies extends Component {
    render() {

        return (
            <div className="pr-currencies" >
                <div>
                    <div className="pr-currencies-add-favourite">
                        <button className="pr-add-favourite__button">To Favourite</button>
                    </div>
                    <div className="pr-currencies-datepicker-wraper">
                     <DatePicker/>
                     <DatePicker/>
                    </div>
                    <div className="pr-currencies-chart-wraper">
                    <CurrencyChart/>
                    </div>
                </div>
            </div>
        );

    }
}
