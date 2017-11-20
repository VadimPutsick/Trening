import React, { Component } from 'react';
import './course.css';
import data from "../../data/currency.json";
import axios from 'axios';
import { EntityService } from "../../service";

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
                <CourseItem
                    key={index}
                    abbreviation={item.nameShort} //Cur_Abbreviation
                    rate={String(item.rate).slice(0, 4)}//rate Cur_OfficialRate
                />
            );
        })
);

export class Course extends Component {
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