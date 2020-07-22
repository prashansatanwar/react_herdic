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

class HomePage extends Component{
    render(){
        return (
            <Container className="p-2">
                <Jumbotron className="row m-auto">
                    <Form>
                        <FormGroup>
                            <Label for = "email">Email</Label>
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
                        <Button className="m-auto">Log In</Button>
                        <Button className="m-auto">Sign Up</Button>
                    </Form>
                </Jumbotron>
            </Container>
        );
    }
}

export default HomePage;