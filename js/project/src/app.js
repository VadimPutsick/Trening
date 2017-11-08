import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/app.css';
import { Menu } from "./components/Menu.js";
import {SearchCourse} from "./components/SearchCourse/SearchCourse.js";
import {Select} from "./components/Select/Select.js";


class App extends Component {
//   constructor() {    

//     this.state = {
//         textValue: 'wefe',
//         onChange: (newValue) => {
//             this.setState({
//                 textValue: newValue
//             });
//         }
//     };

// }

onClickCourseSelect(){
  alert("Erreb");
}

  render() {
    return (
      <div className="pr-app">
        <Menu/>                   
        <SearchCourse
         onClickCourseSelect="this"
        
         />   
       
        <Select table="Select any currency"/>       
      </div>
    );
  }

}


ReactDOM.render(<App />, document.getElementById('root'));