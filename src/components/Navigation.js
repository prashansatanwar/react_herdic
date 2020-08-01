import React,{Component} from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem }  from 'reactstrap';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

class Navigation extends Component{

    constructor(props){
        super(props);
        this.state={
            navOpen:false
        };
    }

    toggleNav = () => {
        this.setState({navOpen:!this.state.navOpen});
        console.log(this.state);
    };

    logout = () => {
        Axios.post('http://localhost:8000/logout/', {Token: this.props.getToken()});
        this.props.setToken(null);
    }
    getButtons=()=>{
        if(this.props.getToken()==null){
            return(
                <Nav className="ml-auto" navbar>    
                    <NavItem className="pr-3">
                        <NavLink className="text-white" to="/">Log in</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white" to="/signUp">Sign Up</NavLink>
                    </NavItem>
                </Nav>
            );
        }
        else{
            return(
                <Nav className="ml-auto" navbar>        
                    <NavItem className="text-white" onClick = {this.logout}>Logout</NavItem>
                </Nav>
            );
        }
    }

    render(){
        return(
            <Navbar id="navigationBar" expand="md">
                <NavbarBrand className="text-white">Herdic</NavbarBrand>
                <NavbarToggler onClick={this.toggleNav} className="ml-auto"> Menu</NavbarToggler>
                <Collapse isOpen={this.state.navOpen} navbar>
                        {this.getButtons()}
                </Collapse>
            </Navbar>
        );
    }
}

export default Navigation;