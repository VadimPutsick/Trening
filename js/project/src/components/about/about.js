import './about.css';
import React, { Component } from 'react';

export class About extends Component {
    render() {
        return (
            <div className="pr-about" >
               <div className="pr-text">This site was designed and developed by: Putsick Vadim</div>
               <div className="pr-text">GitHub URL: <a href='https://github.com/VadimPutsick/Trening/tree/master/js/project'>https://github.com/VadimPutsick/Trening/tree/master/js/project</a></div>
               <div className="pr-text">GitHub pages:<a href='https://vadimputsickreact.github.io/#/'>https://vadimputsickreact.github.io/</a></div>
               <div className="pr-text">Design:currency.pdf</div>
            </div>
        );

    }
}
