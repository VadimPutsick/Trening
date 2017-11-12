import React, { Component } from 'react';
import data from "../../data/currency.json";

class CourseItem extends Component {
    constructor(props) {
        super(props);
    }   
    render() {
        return (
            <div className="pr-course-item">
                <div className="pr-course__abbreviation">{this.props.abbreviation}</div>
                <div className="pr-course__rate">{this.props.rate}</div>
                <div className="pr-course__changes pr-course__changes_green">+0.00019</div>
            </div>
        );
    }
}

export class Course extends Component {
    constructor(props) {
        super(props);
        this.dataCourse = data;

    }
    render() {
        return (
            <div className="pr-scroll">
                {this.dataCourse
                    .filter(
                    (item) => {
                        return String(item['Cur_Abbreviation']).indexOf(String(this.props.filter).toUpperCase()) !== -1;
                    }
                    )
                    .map(
                    (item, index) => {
                        return (
                            <CourseItem
                                key={index}
                                abbreviation={item['Cur_Abbreviation']}
                                rate={String(item['Cur_OfficialRate']).slice(0, 4)}
                            />
                        );
                    })
                }
            </div>
        );
    }
}