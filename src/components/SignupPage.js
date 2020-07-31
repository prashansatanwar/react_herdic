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
} from 'reactstrap';

import './SignupPage.scss';

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

class SignupPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: null,
            password: null,
            firstName: null,
            lastName:null,
            phno:null,
            cpwd:null,
            errors: {
                email: 'init',
                password: 'init',
                firstName: 'init',
                lastName: 'init',
                phno: 'init',
                cpwd: 'init'
            }
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        const{ name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'email':
                if(value===""){
                    errors.email="Required";
                }
                else{
                    errors.email = validEmailRegex.test(value)?'':'Email is not valid!';
                }
                break;
            case 'password':
                if(value===""){
                    errors.password="Required";
                }
                else{
                    errors.password = value.length<8?'Password must be at least 8 characters long':'';
                }
                break;
            case 'firstName':
                if(value===""){
                    errors.firstName="Required";
                }
                else{
                    errors.firstName = value.match(/^[A-Za-z]+$/)?'':'Name must not contain numbers';
                }
                break;
            case 'lastName':
                if(value===""){
                    errors.lastName="Required";
                }
                else{
                    errors.lastName = value.match(/^[A-Za-z]+$/)?'':'Name must not contain numbers';
                }
                break;
            case 'phno':
                if(value===""){
                    errors.phno="Required";
                }
                else{
                    errors.phno = value.length<11?'':'Phone number is not valid!';
                }
                break;
            case 'cpwd':
                if(value===""){
                    errors.cpwd="Required";
                }
                else{
                    errors.cpwd=(value===this.state.password)?"": "The passwords you entered do not match."
                }
                break;
        }

        this.setState({errors, [name]: value});
    }


    render(){
        const email_valid={
            ['valid']:(this.state.errors.email!=='init' && this.state.errors.email==''),
            ['invalid']:(this.state.errors.email!=='init' && this.state.errors.email!=='')};
        const password_valid={
            ['valid']:(this.state.errors.password!=='init' && this.state.errors.password==''),
            ['invalid']:(this.state.errors.password!=='init' && this.state.errors.password!=='')};
        const firstName_valid={
            ['valid']:(this.state.errors.firstName!=='init' && this.state.errors.firstName==''),
            ['invalid']:(this.state.errors.firstName!=='init' && this.state.errors.firstName!=='')};
        const lastName_valid={
            ['valid']:(this.state.errors.lastName!=='init' && this.state.errors.lastName==''),
            ['invalid']:(this.state.errors.lastName!=='init' && this.state.errors.lastName!=='')};
        const phno_valid={
            ['valid']:(this.state.errors.phno!=='init' && this.state.errors.phno==''),
            ['invalid']:(this.state.errors.phno!=='init' && this.state.errors.phno!=='')};
        const cpwd_valid={
            ['valid']:(this.state.errors.cpwd!=='init' && this.state.errors.cpwd==''),
            ['invalid']:(this.state.errors.cpwd!=='init' && this.state.errors.cpwd!=='')};
            

        return(
            <Container>
                <div className="signup-card">
                    <h1>Sign up here.</h1>
                    <Form>
                        <FormGroup>
                            <Row form>
                                <Col xs={12} md={6} className="floating-form-group">
                                    <Label for = "firstName">First Name</Label>
                                    <Input
                                        type = "text"
                                        name = "firstName"
                                        id = "firstName"
                                        placeholder = "First Name"
                                        {...firstName_valid}
                                        onChange={this.handleChange}
                                        noValidate
                                    />
                                    {firstName_valid.invalid && 
                                    <span className='invalid-feedback'>{this.state.errors.firstName}</span>}
                                </Col>
                                <Col xs={12} md={6} className="floating-form-group">
                                    <Label for = "lastName">Last Name</Label>
                                    <Input
                                        type = "text"
                                        name = "lastName"
                                        id = "lastName"
                                        placeholder = "Last Name"
                                        {...lastName_valid}
                                        onChange={this.handleChange}
                                        noValidate
                                    />
                                    {lastName_valid.invalid && 
                                    <span className='invalid-feedback'>{this.state.errors.lastName}</span>}
                                </Col>
                            </Row>
                        </FormGroup>

                        <FormGroup>
                        
                            <Row form>
                                <Col xs={12} md={6} className="floating-form-group">
                                    <Label for = "gender">Gender</Label>
                                    <Input
                                        type = "select"
                                        name = "select"
                                        id = "gender"

                                    >   
                                        <option disabled selected>Select</option>
                                        <option>Female</option>
                                        <option>Male</option>
                                        <option>Prefer not to say</option>
                                    </Input>
                                </Col>
                                
                                <Col xs={12} md={6} className="floating-form-group">
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



                        <FormGroup className="floating-form-group"> 
                            <Label for = "email">Email</Label>
                            <Input 
                                type = "email"
                                name = "email"
                                id = "email"
                                placeholder = "name@example.com"
                                {...email_valid}
                                onChange={this.handleChange}
                                noValidate
                            />
                            {email_valid.invalid && 
                            <span className='invalid-feedback'>{this.state.errors.email}</span>}
                        </FormGroup>

                        <FormGroup className="floating-form-group">
                            <Label for = "phno">Phone Number</Label>
                            <Input 
                                type = "number"
                                name = "number"
                                id = "phno"
                                placeholder = "+91 (Phone number)"
                                {...phno_valid}
                                onChange={this.handleChange}
                                noValidate
                            />

                            {phno_valid.invalid && 
                            <span className='invalid-feedback'>{this.state.errors.phno}</span>}
                        </FormGroup>

                        <FormGroup className="floating-form-group">
                            <Label for = "password">Password</Label>
                            <Input 
                                type = "password"
                                name = "password"
                                id = "password"
                                placeholder = "Password"
                                {...password_valid}
                                onChange={this.handleChange}
                                noValidate
                            />
                            {password_valid.invalid && 
                            <span className='invalid-feedback'>{this.state.errors.password}</span>}
                        </FormGroup>

                        <FormGroup className="floating-form-group">
                            <Label for = "cpwd">Confirm Password</Label>
                            <Input 
                                type = "password"
                                name = "cpwd"
                                id = "cpwd"
                                placeholder = "Confirm Password"
                                {...cpwd_valid}
                                onChange={this.handleChange}
                                noValidate
                            />
                            {cpwd_valid.invalid && 
                            <span className='invalid-feedback'>{this.state.errors.cpwd}</span>}
                        </FormGroup>

                        <button className="signup-button">Sign Up</button>

                    </Form>
                </div>
            </Container>
        );
    }
}

export default SignupPage;