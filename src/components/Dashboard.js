import React,{Component} from 'react';
import axios from 'axios';
import { Card } from 'reactstrap'

function CardGen(props) {
    const user=props.value;
    return(
        <li key={props.key}>
            <Card className="m-5">
                <h6>{user.name}</h6>
                <p>{user.id.date}</p>
            </Card>
        </li>
    )
};

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
            users: [],
            store: []
        }
    }
    
    componentDidMount(){
        axios.get('https://randomuser.me/api/?results=2&inc=name,registered&nat=fr')
        .then(json => json.data.results.map( result=> (
            {
                name: `${result.name.first} ${result.name.last}`,
                id: result.registered
            }
        ) ) )
        .then(newData => this.setState({users:newData, store:newData}));
    };

    

    render(){
        const userList = this.state.store.map((user,index)=> <CardGen key={index} value={user} />)

        return(
            <div>
                <ul>
                    {userList}
                </ul>
            </div>
        );
    }
}

export default Dashboard;