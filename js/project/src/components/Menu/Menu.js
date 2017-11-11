import './menu.css';
import React, { Component } from 'react';

 class MenuItem extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = { name: this.props.name };
    }

    render() {
       
        return (
            <div className="pr-menu__item">             
                {this.state.name}
            </div>
        );
    }

}

export class Menu extends Component {

    render() {
       
        return (
            <div className="pr-menu">             
               <MenuItem name="About"/>
               <hr/>
               <MenuItem name="Home"/>
               <hr/>
               <MenuItem name="Pricing"/>
               <hr/>
               <MenuItem name="Blog"/>
            </div>
        );
    }

}
