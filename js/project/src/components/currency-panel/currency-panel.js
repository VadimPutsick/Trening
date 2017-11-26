import React, { Component } from 'react';
import './currency-panel.css';
import data from "../../data/currency.json";

import { EntityService } from "../../service";
import { Currency } from '../currency';
class Search extends Component {

    onInputChange(event) {
        if (this.props.onChange) {
            this.props.onChange(event.target.value);
        }
    }
    render() {
        return (
            <div className="pr-search">
                <input
                    className="pr-search-item pr-search-item_input"
                    type="text"
                    placeholder="Search input"
                    onChange={this.onInputChange.bind(this)}
                />
                <button className="pr-search-item pr-search-item_button">Search</button>
            </div>
        );
    }
}

export class CurrencyPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: '',
            onChange: (newValue) => {
                this.setState({
                    textValue: newValue
                });
            }
        };
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
                {/* <Search onChange={this.state.onChange.bind(this)} /> */}
                <Course filter={this.state.textValue} />

            </div>
        );
    }
}



const AppData = (dataCur) => (
    dataCur
        // .filter(
        //     (item) => {
        //         return String(item.Cur_Abbreviation).indexOf(String(this.props.filter).toUpperCase()) !== -1;//nameShort
        //     }
        // )
        .map(
        (item, index) => {
            return (
                <Currency
                    key={index}
                    value={item}
                    abbreviation={item.nameShort} //Cur_Abbreviation
                    rate={String(item.rate).slice(0, 4)}//rate Cur_OfficialRate
                />
            );
        })
);

class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataCourse: 'Waiting data'
        };
        // this.dataCourse = data;
    }
    componentWillMount() {
        let ent = new EntityService();
        ent.getEntities().then(
            (val) => {
                this.setState(
                    {
                        dataCourse: AppData(val)
                    }
                );
            }

        );
    }

    render() {
        return (
            <div className="pr-scroll">
                {this.state.dataCourse}
            </div>
        );
    }
}