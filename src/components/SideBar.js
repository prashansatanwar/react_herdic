import React from 'react';
import Dashboard from './Dashboard';
import UploadPage from './UploadPage';
import VisualizePage from './VisualizePage';
import {
  Grid,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import './SideBar.scss'
import {withRouter, NavLink} from 'react-router-dom';
import Visualizer from './Visualizer';

class SideBar extends React.Component {
    constructor(props){
        super(props)

        this.state={
            isThin:true,
            width:''
        }
    }

    componentDidMount(){
      const u=localStorage.getItem('user');
      if(u === null){
          this.props.history.push('/');
      }

      
      window.addEventListener('resize', this.updateDimensions);
      var h=window.innerWidth-120;
      this.setState({width:h+'px'})
    }

    updateDimensions = () =>{      
      var h=window.innerWidth-60;
      this.setState({width:h+'px'})
  }

  componentWillUnmount(){
      window.removeEventListener('resize', this.updateDimensions);
  }


    render(){

        const barStyle = (this.state.isThin)? { width:'very thin'}: {width:'thin'}

        return(
            <Grid columns={1} className=" m-0 p-0">
              <Grid.Column id="Content">
        
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
                      
                      
                  <NavLink to="/">
                    <Menu.Item  as='a' className='m-1 pb-4 pt-4'>
                        
                        <i className="user icon"></i>
                          {!this.state.isThin && 
                          'Dashboard'}
                    </Menu.Item>
                  </NavLink>
                  <NavLink to ='/upload'>
                    <Menu.Item as='a'className='m-1 pb-4 pt-4'>
                        <i className='upload icon' />
                        {!this.state.isThin && 
                        'Upload'}
                    </Menu.Item>
                  </NavLink>
                  <NavLink to = '/visualize'>
                    <Menu.Item as='a' className='m-1 pb-4 pt-4'>
                        <i className='chart line icon' />
                        {!this.state.isThin && 
                        'Data'}
                    </Menu.Item>
                  </NavLink>
                  <NavLink to ='/'>
                    <Menu.Item as='a'className='m-1 pb-4 pt-4'>
                        <i className='history icon' />
                        {!this.state.isThin && 
                        'History'}
                    </Menu.Item>
                  </NavLink>
                  <NavLink to ='/'>
                    <Menu.Item as='a' className='m-1 pb-4 pt-4'>
                        <i className="comment alternate icon" />
                        {!this.state.isThin && 
                        'Help'}
                    </Menu.Item>
                  </NavLink>
                  </Sidebar>
        
                  <Sidebar.Pusher>
                    <Segment basic style={{
                      width: this.state.width
                    }}>
                      {/* {window.location.pathname} */}
                      {Switcher({value:window.location.pathname})}
                    </Segment>
                  </Sidebar.Pusher>
                </Sidebar.Pushable>
        
              </Grid.Column>
            </Grid>
          );
    }
}
  
  const Switcher = (props) =>{
    console.log(props);
    if(props.value.toLowerCase() === '/dashboard') return <Dashboard />;
    if(props.value.toLowerCase() === '/upload') return <UploadPage />;
    if(props.value.toLowerCase() === '/visualize') return <VisualizePage />;
  }


  export default withRouter(SideBar);