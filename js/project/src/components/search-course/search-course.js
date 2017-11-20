import React, { Component } from 'react';
import './search-course.css';
// import { url } from "../data/data.js";
// import { httpGet } from "../data/data.js";
import { Search } from "./search.js";
import { Course } from "../course";



export class SearchCourse extends Component {
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
                <Search onChange={this.state.onChange.bind(this)} />
                <Course filter={this.state.textValue} />

            </div>
        );
    }
}

