import React, { Component } from 'react';
import './currency-panel.css';
// import data from '../../data/currency.json';
import { EntityService } from '../../service';
import { Currency } from '../currency';

import { connect } from 'react-redux';
import { getCurrencyList } from './../../store/actions';
 // .filter(
    //     (item) => {
    //         return String(item.Cur_Abbreviation).indexOf(String(this.props.filter).toUpperCase()) !== -1;//nameShort
    //     }
    // )
class CurrencyPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataCourse: [],
            error:props.errror
        };
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
                    />
                    <button className="pr-search-item pr-search-item_button">Search</button>
                </div>
                <div className="pr-scroll">
                    {
                        this.props.currencyList.map(
                            (item, index) => {
                                return (
                                    <Currency
                                        key={index}
                                        value={item}
                                        abbreviation={item.nameShort}
                                        rate={String(item.rate).slice(0, 4)}
                                        currencyChange={item.currencyChange}
                                    />
                                );
                            })
                    }
                   {this.props.error}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const currencyList = state.currecyList.items;
    const error = state.currecyList.error;
    return { currencyList,error };
};

const mapDispatchToProps = (dispatch) => ({
    getCurrency: (todo) => dispatch(getCurrencyList(todo))
});
let output = connect(mapStateToProps, mapDispatchToProps)(CurrencyPanel);
export { output as CurrencyPanel };
