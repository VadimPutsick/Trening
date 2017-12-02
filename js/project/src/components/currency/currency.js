import './currency.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedCurrency } from './../../store/actions';
class Currency extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="pr-course-item" onClick={
                () => {
                    this.props.dispatch(selectedCurrency(this.props.currency));
                }
            }>
                <div className="pr-course__abbreviation">{this.props.nameShort}</div>
                <div className="pr-course__rate">{this.props.rate}</div>
                {
                    this.props.currencyChange > 0 ?
                        <div className="pr-course__changes pr-course__changes_green">
                            +{this.props.currencyChange}
                        </div> :
                        <div className="pr-course__changes pr-course__changes_red">
                            {this.props.currencyChange}
                        </div>
                }

            </div>
        );
    }
}

let output = connect()(Currency);
export { output as Currency };



