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

class HomePage extends Component{

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
                                        autocomplete = "false"
                                        autofocus
                                        required
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
                                        autocomplete = "false"
                                        autofocus
                                        required
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
                                <button border-radius="15px" className="log-in-button">Sign In</button>
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