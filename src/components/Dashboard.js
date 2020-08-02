import React,{Component} from 'react';
import axios from 'axios';
// import { Card } from 'reactstrap';
import './Dashboard.scss';
import { NavLink } from 'react-router-dom';

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
            user: {
                name:"Tanmay Jain",
                email:"tanmayj55@gmail.com",
                phno:"+91-9898989898",
            },
            store: []
        }
    }
    
    componentDidMount(){

        axios.get('http://ec2-13-234-74-240.ap-south-1.compute.amazonaws.com:8000/user/')
        .then(json => {
            console.log(json);
            // this.setState({ user:json.data[0]});
        })
        
        console.log("hi");
        // axios.get('https://randomuser.me/api/?results=2&inc=name,registered&nat=fr')
        // .then(json => json.data.results.map( result=> (
        //     {
        //         name: `${result.name.first} ${result.name.last}`,
        //         id: result.registered
        //     }
        // ) ) )
        // .then(newData => this.setState({users:newData, store:newData}));
    };

    

    render(){

        return(
            <div className="dashboard">
                <h1>{this.state.user.name}</h1>
                <div className="dashboard-body">
                    <p> {this.state.user.email} <NavLink to="/signUp">edit</NavLink> </p>
                    <p> {this.state.user.phno} <NavLink to="/signUp">edit</NavLink> </p>
                </div>
            </div>
        );
    }
}


export default Dashboard;