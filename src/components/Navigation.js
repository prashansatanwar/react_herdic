import React,{Component} from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem }  from 'reactstrap';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

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

    render(){
        return(
            <Navbar id="navigationBar" expand="md">
                <NavbarBrand className="text-white">Herdic</NavbarBrand>
                <NavbarToggler onClick={this.toggleNav} className="ml-auto"> Menu</NavbarToggler>
                <Collapse isOpen={this.state.navOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="pr-3">
                            <NavLink className="text-white" to="/">Log in</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-white" to="/signUp">Sign Up</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Navigation;