import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage'
import SignupPage from './components/SignupPage';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="mt-5" id="app">

      <Switch>
        <Route path = "/" component = {HomePage} exact />
        <Route path = "/Signup" component = {SignupPage} />
        <Route path ="/Dashboard" component = {Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
