import './currency.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedCurrency } from './../../store/actions';
class Currency extends Component {
    constructor(props) {
        super(props);
        this.currency = {
            nameShort: this.props.nameShort,
            rate: this.props.rate,
            ID:this.props.ID
        };
    }
    render() {
        return (
            <div className="pr-course-item" onClick={
                () => {
                    this.props.selectedCurrency(this.currency);
                    console.log(this.currency);
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

const mapStateToProps = (state) => {
    // const values = state.todo.values;
    // const todoState = state.todo.state;

    return { };
};

const mapDispatchToProps = (dispatch) => ({
    selectedCurrency: (value) => dispatch(selectedCurrency(value))
});
let output = connect(mapStateToProps, mapDispatchToProps)(Currency);
export { output as Currency };



