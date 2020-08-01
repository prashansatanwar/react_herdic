import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage'
import SignupPage from './components/SignupPage';
import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation'


class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      token: null,
    }
  }


  setToken(token){
    this.setState({
      token: token,
    })
    console.log(this.state);
  }

  getToken(){
    return this.state.token;
  }

  render(){
    return (
      <div id="app">
        <Navigation setToken={this.setToken.bind(this)} getToken={this.getToken.bind(this)} />
        {this.state.token}
        <Switch>
          <Route path = "/" component = {()=> {return( <HomePage setToken ={this.setToken.bind(this)} />)}} exact /> 
          <Route path = "/Signup" component = {SignupPage} />
          <Route path ="/Dashboard" component = {Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
