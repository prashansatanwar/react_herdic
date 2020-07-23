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

class SignupPage extends Component{
    render(){
        return(
            <Container>
                <Jumbotron>
                    <Form>
                        <FormGroup>
                            <Row form>
                                <Col sm={6}>
                                    <Label for = "firstName">First Name</Label>
                                    <Input
                                        type = "text"
                                        name = "firstName"
                                        id = "firstName"
                                        placeholder = "First Name"
                                    />
                                </Col>
                                <Col sm={6}>
                                    <Label for = "lastName">Last Name</Label>
                                    <Input
                                        type = "text"
                                        name = "lastName"
                                        id = "lastName"
                                        placeholder = "Last Name"
                                    />
                                </Col>
                            </Row>
                        </FormGroup>

                        <FormGroup>
                        
                            <Row form>
                                <Col sm={6}>
                                    <Label for = "gender">Gender</Label>
                                    <Input
                                        type = "select"
                                        name = "select"
                                        id = "gender"

                                    >   
                                        <option disabled selected></option>
                                        <option>Female</option>
                                        <option>Male</option>
                                        <option>Prefer not to say</option>
                                    </Input>
                                </Col>
                                
                                <Col sm={6}>
                                    <Label for = "dob">Date of Birth</Label>
                                    <Input
                                        type = "date"
                                        name = "date"
                                        id = "dob"
                                        placeholder = "DD/MM/YYYY"
                                    />
                                </Col>
                                
                            </Row>

                        </FormGroup>

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
                            <Label for = "phno">Phone Number</Label>
                            <Input 
                                type = "text"
                                name = "text"
                                id = "phno"
                                placeholder = "+91xxxxx"
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for = "pwd">Password</Label>
                            <Input 
                                type = "text"
                                name = "text"
                                id = "pwd"
                                placeholder = "Password"
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for = "cpwd">Confirm Password</Label>
                            <Input 
                                type = "text"
                                name = "text"
                                id = "cpwd"
                                placeholder = "Password"
                            />
                        </FormGroup>

                        <Button>Sign Up</Button>

                    </Form>
                </Jumbotron>
            </Container>
        );
    }
}

export default SignupPage;