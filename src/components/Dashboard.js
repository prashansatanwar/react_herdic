import React,{Component} from 'react';
import './Dashboard.scss';
// import {withRouter} from 'react-router-dom';

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
            user: {},
        }
    }
    componentDidMount(){
        const u=localStorage.getItem('user');

        this.setState({user:JSON.parse(localStorage.getItem('user'))});
        
        console.log(this.state);
    };

    

    render(){
        return(
            <div className="dashboard">
                <h1>{this.state.user.name}</h1>
                <div className="dashboard-body">
                    <p> {this.state.user.email} </p>
                    <p> {this.state.user.phone_no} </p>
                    <p> {this.state.user.dob} </p>
                </div>

                <div className="ui positive floating message dashboard-body mr-5">
                    <p><b> Status:  </b> <br></br>Approved!</p>
                </div>


            </div>
        );
    }
}


export default Dashboard;