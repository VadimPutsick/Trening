import './select.css';
import React, { Component } from 'react';

class SelectItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pr-select-item">
                <div className="pr-select-item-wrap">
                    <div className="pr-select-item__date">{this.props.date}</div>
                </div>
                <div className="pr-select-item-wrap">
                    <div className="pr-select-item__usd">{this.props.usd}</div>
                </div>
            </div>
        );
    }
}
class SelectTable extends Component {
    constructor(props) {
        super(props);

        this.tableItems = new Array(30);
        for (var index = 0; index < this.tableItems.length; index++) {
            this.tableItems[index] = '';
        }
    }

    render() {
        return (
            <div className="pr-select-scroll">
                <div className="pr-select-item_first">
                    <SelectItem date="Date" usd="USD Currency" />
                </div>
                <div className="pr-scroll">
                    {
                        this.tableItems
                            .map(
                            (item, index) => {

                                return (
                                    <SelectItem
                                        date=""
                                        usd=""
                                        key={index}
                                    />
                                );
                            }
                            )
                    }
                </div>
            </div>
        );
    }
}

export class Select extends Component {
      render() {
        return (
            <div className="pr-select" >
               <SelectTable />
            </div>
        );
    }
}