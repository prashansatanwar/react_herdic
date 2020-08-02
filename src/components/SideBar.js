import React from 'react';
import Dashboard from './Dashboard';
import {
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
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
            <Grid columns={1} fluid>
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
                      
                      
                    <Menu.Item  as='a' className='bord m-1 pb-4 pt-4'>
                      <i className="home icon" />
                      {!this.state.isThin && 
                      'label'}
                    </Menu.Item>
                    <Menu.Item as='a'className='m-1 pb-4 pt-4'>
                      <i className='gamepad icon' />
                      {!this.state.isThin && 
                      'label'}
                    </Menu.Item>
                    <Menu.Item as='a' className='m-1 pb-4 pt-4'>
                      <i className='camera icon' />
                      {!this.state.isThin && 
                      'label'}
                    </Menu.Item>
                    <Menu.Item as='a' className='m-1 pb-4 pt-4'>
                      <i className="home icon" />
                      {!this.state.isThin && 
                      'label'}
                    </Menu.Item>
                    <Menu.Item as='a'className='m-1 pb-4 pt-4'>
                      <i className='gamepad icon' />
                      {!this.state.isThin && 
                      'label'}
                    </Menu.Item>
                  </Sidebar>
        
                  <Sidebar.Pusher>
                    <Segment basic >
                      {Switcher(this.props.switcher())}
                    </Segment>
                  </Sidebar.Pusher>
                </Sidebar.Pushable>
        
              </Grid.Column>
            </Grid>
          );
    }
}

// const SideBar= (props) =>{
//     let [visible, setVisible]= React.useState(false);
//     // visible = props.getVisibility();
  
//     React.useEffect(()=>{
//       console.log("changed");
//     },[props.getVisibility]);
  
//     return(
//       <Grid columns={1}>
  
//         <Grid.Column>
//           <Checkbox
//             checked={visible}
//             label={{ children: <code>visible</code> }}
//             onChange={(e, data) => {
//               setVisible(data.checked)
//               props.setVisiblity(data.checked);
//             }}
//           />
//         </Grid.Column>
//         <Grid.Column>
  
//           <Sidebar.Pushable as={Segment}>
//             <Sidebar
//               as={Menu}
//               animation='slide along'
//               icon='labeled'
//               inverted
//               onHide= {()=>{
//                 setVisible(false);
//                 props.setVisiblity(false);
//               }}
//               vertical
//               visible={visible}
//               width='thin'
//             >
//               <Menu.Item as='a'>
//                 <Icon name='home' />
//                 Home
//               </Menu.Item>
//               <Menu.Item as='a'>
//                 <Icon name='gamepad' />
//                 Games
//               </Menu.Item>
//               <Menu.Item as='a'>
//                 <Icon name='camera' />
//                 Channels
//               </Menu.Item>
//               {/* <Menu.Header>HEADER</Menu.Header> */}
//             </Sidebar>
  
//             <Sidebar.Pusher dimmed={visible}>
//               <Segment basic >
//                 {Switcher(props.switcher())}
//               </Segment>
//             </Sidebar.Pusher>
//           </Sidebar.Pushable>
  
//         </Grid.Column>
//       </Grid>
//     );
//   }
  
  const Switcher = (value) =>{
    if(value === 'Dashboard') return <Dashboard/>;
  
  }


  export default SideBar;