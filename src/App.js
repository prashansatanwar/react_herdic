import React from 'react';
import './App.css';
import HomePage from './components/HomePage'
import SignupPage from './components/SignupPage';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="mt-5" id="app">

      <Switch>
        <Route path = "/" component = {HomePage} exact />
        <Route path = "/Signup" component = {SignupPage} />
      </Switch>
    </div>
  );
}

export default App;
