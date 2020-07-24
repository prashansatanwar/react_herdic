import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage'
import SignupPage from './components/SignupPage';
import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation'


function App() {
  return (
    <div id="app">
      <Navigation   />
      <Switch>
        <Route path = "/" component = {HomePage} exact />
        <Route path = "/Signup" component = {SignupPage} />
        <Route path ="/Dashboard" component = {Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
