import React, { Component } from 'react';
import {
    HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Menu } from "../Menu/Menu.js";
import { Select } from "../Select/Select.js";
import { Converter } from "../Converter/Converter.js";

export class MyRouter extends Component {

  render() {
    return (
      <Router>   
          <div className="pr-menu-select-wrap">
            <div className="pr-menu-wrap">
              <Menu />
            </div>
            <div className="pr-select-wrap">
              <Route path="/Home" component={Select} />
              <Route path="/Converter" component={Converter} />
            </div>
          </div>        
      </Router>
    );
  }

}
