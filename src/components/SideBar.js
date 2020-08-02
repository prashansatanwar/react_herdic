import React from 'react';
import Dashboard from './Dashboard';
import {
  Grid,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import './SideBar.scss'


class SideBar extends React.Component {
    constructor(props){
        super(props)

        this.state={
            isThin:true,
        }
    }

    render(){

        const barStyle = (this.state.isThin)? { width:'very thin'}: {width:'thin'}

        return(
            <Grid columns={1}>
              <Grid.Column className="pt-2">
        
                <Sidebar.Pushable as={Segment}>
                  <Sidebar
                    onMouseEnter={()=>{
                        this.setState({isThin:false})
                    }}
                    onMouseLeave={()=>{
                        this.setState({isThin:true})
                    }}

                    as={Menu}
                    // icon='labeled'
                    transition = 'uncover'
                    inverted
                    vertical
                    visible
                    {...barStyle}
                    
                  >
                      
                      
                    <Menu.Item  as='a' className='m-1 pb-4 pt-4'>
                    <i className="user icon"></i>
                      {!this.state.isThin && 
                      'Dashboard'}
                    </Menu.Item>
                    <Menu.Item as='a'className='m-1 pb-4 pt-4'>
                      <i className='upload icon' />
                      {!this.state.isThin && 
                      'Upload'}
                    </Menu.Item>
                    <Menu.Item as='a' className='m-1 pb-4 pt-4'>
                      <i className='chart line icon' />
                      {!this.state.isThin && 
                      'Data'}
                    </Menu.Item>
                    <Menu.Item as='a'className='m-1 pb-4 pt-4'>
                      <i className='history icon' />
                      {!this.state.isThin && 
                      'History'}
                    </Menu.Item>
                    <Menu.Item as='a' className='m-1 pb-4 pt-4'>
                      <i className="comment alternate icon" />
                      {!this.state.isThin && 
                      'Help'}
                    </Menu.Item>
                  </Sidebar>
        
                  <Sidebar.Pusher>
                    <Segment basic >
                      {Switcher({value:this.props.switcher(),
                        getUser: this.props.getUser})}
                    </Segment>
                  </Sidebar.Pusher>
                </Sidebar.Pushable>
        
              </Grid.Column>
            </Grid>
          );
    }
}
  
  const Switcher = (props) =>{
    if(props.value === 'Dashboard') return <Dashboard  getUser={props.getUser} />;
  
  }


  export default SideBar;