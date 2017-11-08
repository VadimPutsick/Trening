import React, { Component } from 'react';


export class Search extends Component {

    onInputChange(event) {
        if (this.props.onChange) {
            this.props.onChange(event.target.value);
        }
    }

    render() {
        return (
            <div className="pr-search">
                <input className="pr-search-item pr-search-item_input" type="text" placeholder="Search input" onChange={this.onInputChange.bind(this)} />
                <button className="pr-search-item pr-search-item_button">Search</button>
            </div>
        );
    }
}