import React,{Component, useState} from 'react';
import {
    Container, 
    Row, Col, 
    Jumbotron, 
    Button,
    Form, 
    FormGroup,
    Label,
    Input,
    FormText
} from 'reactstrap'
import {NavLink} from 'react-router-dom';

class HomePage extends Component{

    render(){
    
            return (
            <Container>
                <Jumbotron>
                    <Form>
                        <FormGroup>
                            <Label for = "email">Email </Label>
                            <Input 
                                type = "email" 
                                name = "email"
                                id = "email"
                                placeholder = "abc@example.com"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for = "password">Password</Label>
                            <Input
                                type = "password"
                                name = "password"
                                id = "password"
                                placeholder = "password"
                            />
                            
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input
                                    type = "checkbox"
                                    id = "checkbox"
                                />
                                Remember me
                            </Label>
                        </FormGroup>

                        <FormGroup className="row pt-3">
                            <Button className="col-5 m-auto">Log In</Button>
                            <NavLink to="/Signup" className="text-white bg-primary col-5 m-auto p-0"><Button className="w-100">Sign Up</Button></NavLink>
                        </FormGroup>
                        
                    </Form>
                </Jumbotron>
            </Container>
        );
    }
}

export default HomePage;