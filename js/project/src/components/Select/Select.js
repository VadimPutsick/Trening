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
        // this.tableItems = [1,1,1,1,1,1,1];
        this.tableItems = new Array(30);
        for (var index = 0; index < this.tableItems.length; index++) {
            this.tableItems[index] = " ";
        }
    }

    render() {
        return (
            <div className="pr-select-scroll">
                <SelectItem date="Date" usd="USD Currency" />
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
                                )
                            }
                            )
                    }
                </div>
            </div>
        );
    }
}

export class Select extends Component {
    constructor(props) {
        super(props);
        this.state = { select: this.props.table }
    }
    onSelect() {
        this.setState(
            { select: <SelectTable /> }
        );
    }

    render() {
        return (
            <div className="pr-select" onClick={this.onSelect.bind(this)}>
                {this.state.select}
            </div>
        );
    }
}