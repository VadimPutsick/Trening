import './favourite.css';
import React, { Component } from 'react';
import { CurrencyChart } from './../currency-chart';

export class Favourite extends Component {
    render() {

        return (
            <div className="pr-favourite" >
               <div className="pr-favourite-item" >
              <div className="pr-text">Currency Name: American Dollar</div>
              <div className="pr-text">Currency Abbreviation: USD</div>
              <div className="pr-text">Start date Tue Jan 01 1991</div>
              <div className="pr-text">End date: Tue Jan 01 2050</div>
              <CurrencyChart/>
              </div>
            </div>
        );

    }
}
