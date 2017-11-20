import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import { SearchCourse, MyRouter } from "./components";
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
        < MyRouter />
      </div>

    );
  }

}



ReactDOM.render(<App />, document.getElementById('root'));