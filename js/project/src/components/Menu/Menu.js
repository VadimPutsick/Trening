import './menu.css';
import React, { Component } from 'react';
import {
    HashRouter as Router,   
    NavLink
  } from 'react-router-dom'
class MenuItem extends Component {
    constructor(props) {
        super(props);               
    }

    render() {
const name = this.props.name;
        return (          
        <Router>
        <NavLink         
        to={`/${name}`} 
        activeClassName="pr-menu__item"
        > {name}
        </NavLink>       
        </Router> 
         
        );
    }
}
export class Menu extends Component {
    render() {
        return (
            <div className="pr-menu">               
                <MenuItem name="Home" />
                <hr />
                <MenuItem name="Converter"/>               
            </div>
        );
    }
}
