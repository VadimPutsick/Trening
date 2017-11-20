import React, { Component } from 'react';
import {
    HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Menu } from '../menu';
import { Select } from '../select';
import { Converter } from '../converter';

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
