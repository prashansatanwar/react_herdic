import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage'
import SignupPage from './components/SignupPage';
import SideBar from "./components/SideBar"
import Navigation from './components/Navigation'
import Visualizer from './components/Visualizer';


class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      token: null,
      current:'Dashboard',
      user: null
    }
  }

  getUser(){
    return this.state.user;
  }

  setUser(value){
    this.setState({user: value});
    console.log(this.state.user);
    console.log("in set state user")
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

  getCurrent(){
    return this.state.current;
  }

  componentDidMount(){
    this.setState({token: localStorage.getItem('token')});
  }

  render(){
    return (
      <div id="app">


        <Navigation 
          setToken={this.setToken.bind(this)} 
          getToken={this.getToken.bind(this)}
        />


        <Switch>


    <Route path ='/visualizer' component ={Visualizer}></Route>


          <Route path = "/" component = {()=> {
            return( <HomePage 
              setToken ={this.setToken.bind(this)} 
              getUser = {this.getUser.bind(this)}
              setUser = {this.setUser.bind(this)}
              
              />)}} exact /> 
          
          
          <Route path = "/Signup" component = {SignupPage} />
          <Route path ="/Dashboard" component = {() => {
            return( <SideBar 
              switcher = {this.getCurrent.bind(this)} 
              getUser = {this.getUser.bind(this)}
              setUser = {this.setUser.bind(this)}
            /> 
            )}} />
        </Switch>
      </div>
    );
  }
}





export default App;
