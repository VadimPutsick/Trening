import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import { CurrencyPanel, Calculator, Currencies, Favourite, About } from "./components";
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <Router>
        <div className="pr-app">
          <div className="pr-menu-wrap">
            <div className="pr-menu">
              {/* <NavLink to={`/Home`} ><div className="pr-menu__item" >Home</div></NavLink>
              <hr /> */}
              <NavLink to={`/`} ><div className="pr-menu__item" >Currencies</div></NavLink>
              <hr />
              <NavLink to={`/Calculator`} ><div className="pr-menu__item" >Calculator</div></NavLink>
              <hr />
              <NavLink to='/About' ><div className="pr-menu__item" >About</div></NavLink>
              <hr />
              <NavLink to={`/Favourite`} ><div className="pr-menu__item" >Favourite</div></NavLink>
            </div>
          </div>
          <Switch>
            <Route exact={true} path='/Favourite' component={Favourite} />
            <Route exact={true} path='/About' component={About} />
            <div className="pr-currency-panel-wrap">
              <CurrencyPanel /> <Route exact={true} path='/Calculator' component={Calculator} />
            </div>
          </Switch>

          <Switch>
            <Route exact={true} path='/' component={Currencies} />
            <Route exact={true} path='/Calculator' component={Calculator} />
          </Switch>
        </div>
      </Router>
    );
  }
}

import { Provider } from 'react-redux';
import appStore from './store';


ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById('root'));
