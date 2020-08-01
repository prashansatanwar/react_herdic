import React,{Component} from 'react';
import {
    Container, 
    Row,
    Form, 
    FormGroup,
    Label,
    Input
} from 'reactstrap'
import {NavLink} from 'react-router-dom';
import "./Homepage.scss";
import Axios from 'axios';

class HomePage extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: null,
            password: null,
        }
    }



    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        Axios.post('http://localhost:8000/login/',{
            email: this.state.email,
            password: this.state.password,
        })
        .then(json =>{
            if(json.status===201){
                console.log("Login Successful");
                console.log(json); 
                this.props.setToken(json.data.Token);
            }
            else{
                console.log("Login Unsuccessful");
            }
        })
    }

    render(){
    
            return (
            <Container fluid id="login-background">
                <Row className="pt-5">
                    <div className="login-card">
                        <Form>
                            <h1 className="mb-5">Please sign in.</h1>
                            <FormGroup>
                                <div className = "floating-label-group">
                                    <Input 
                                        className = "form-control"
                                        type = "email" 
                                        name = "email"
                                        id = "email"
                                        autoComplete = "false"
                                        autoFocus
                                        required

                                        onChange = {(event)=>{this.setState({email: event.target.value});}}
                                    />
                                    <Label for = "email" className = "floating-label">Email </Label>
                                </div>
                                
                            </FormGroup>
                            <FormGroup>
                                <div className = "floating-label-group">
                                    <Input
                                        type = "password"
                                        name = "password"
                                        id = "password"
                                        autoComplete = "false"
                                        autoFocus
                                        required
                                        onChange = {(event)=>{this.setState({password: event.target.value});}}
                                    />
                                    <Label for = "password" className = "floating-label">Password</Label>
                                </div>
                                
                            </FormGroup>
                            <FormGroup className="check">
                                <div className="check-group">
                                    <Label className="check">
                                        <Input
                                            type = "checkbox"
                                            id = "checkbox"
                                        />
                                        Remember me
                                    </Label>
                                </div>
                            </FormGroup>

                            <FormGroup className="row pt-3">
                                <button border-radius="15px" className="log-in-button" onClick={this.handleSubmit}>Sign In</button>
                                <NavLink to="/Signup" className="ml-3 mt-1"><u>Don't have an account? Sign up</u></NavLink>
                                {/* <NavLink to="/Signup" className="text-white bg-primary col-5 m-auto p-0"><Button className="w-100">Sign Up</Button></NavLink> */}
                            </FormGroup>
                            
                        </Form>
                    </div>
                </Row>
            </Container>
        );
    }
}

export default HomePage;