import './currency-panel.css';
import React, { Component } from 'react';

import { EntityService } from '../../service';
import { Currency } from '../currency';

import { connect } from 'react-redux';
import { getCurrencyList, currencyListFiltered, selectedCurrency } from './../../store/actions';
class CurrencyPanel extends Component {
    constructor(props) {
        super(props);
        this.currencyFiltere = '';
    }
    componentWillMount() {
        let ent = new EntityService();
        this.props.getCurrency(ent.getCurrencyList());
    }
    render() {
        return (
            <div className="pr-search-course">
                <div className="pr-search">
                    <input
                        className="pr-search-item pr-search-item_input"
                        type="text"
                        placeholder="Search input"
                        onChange={(event) => {
                            this.props.currencyFiltere(event.target.value);
                        }}
                    />
                    <button className="pr-search-item pr-search-item_button"
                        onClick={
                            () => {
                                console.log(this.props);
                                console.log(this.props.currencyList[0]);
                            }
                        }
                    >Search</button>
                </div>
                <div className="pr-scroll">
                    {
                        this.props.currencyList.map(
                            (item, index) => {
                                return (
                                    <Currency
                                        key={index}
                                        value={item}
                                        nameShort={item.nameShort}
                                        rate={String(item.rate).slice(0, 4)}
                                        currencyChange={item.currencyChange}
                                        currency={item}

                                    />
                                );
                            })
                    }
                    <div className="pr-error">
                    {this.props.error}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const currencyList = state.currecyList.filteredItems;
    const error = state.currecyList.error;
    return { currencyList, error };
};

const mapDispatchToProps = (dispatch) => ({
    getCurrency: (value) => dispatch(getCurrencyList(value)),
    currencyFiltere: (value) => dispatch(currencyListFiltered(value))
});
let output = connect(mapStateToProps, mapDispatchToProps)(CurrencyPanel);
export { output as CurrencyPanel };
