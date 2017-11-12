import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import { Menu } from "./components/Menu/Menu.js";
import { SearchCourse } from "./components/SearchCourse/SearchCourse.js";
import { Select } from "./components/Select/Select.js";
import { Converter } from "./components/Converter/Converter.js";
import {MyRouter} from "./components/MyRouter/MyRouter.js";
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {

  render() {
    return (
     
        <div className="pr-app">
          <div className="pr-searchcourse-wrap">
            <SearchCourse />
          </div>
         < MyRouter/>
        </div>
     
    );
  }

}



ReactDOM.render(<App />, document.getElementById('root'));