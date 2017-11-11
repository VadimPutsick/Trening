import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import { Menu } from "./components/Menu/Menu.js";
import { SearchCourse } from "./components/SearchCourse/SearchCourse.js";
import { Select } from "./components/Select/Select.js";
import { Converter } from "./components/Converter/Converter.js";


class App extends Component {

  render() {
    return (
      <div className="pr-app">

        <div className="pr-searchcourse-wrap">
          <SearchCourse />
        </div>
        <div className="pr-menu-select-wrap">
          <div className="pr-menu-wrap">
            <Menu/>
          </div>
          <div className="pr-select-wrap">
            <Select table="Select any currency" />
          </div>
        </div>
        <div className="pr-converter-wrap">
          < Converter />
        </div>
      </div>
    );
  }

}



ReactDOM.render(<App/>, document.getElementById('root'));