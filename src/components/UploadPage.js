import React from 'react';
import './Dashboard.scss'
import { Jumbotron, Input, Button } from 'reactstrap';
import { Card } from 'semantic-ui-react';

class UploadPage extends  React.Component{

    constructor(props){
        super(props)
        this.state={
            height: '',
            selectedFile:null
        }
    }

    componentDidMount(){
        window.addEventListener('resize', this.updateDimensions);
        var h=window.innerHeight-110;
        this.setState({height:h+'px'})
    }

    updateDimensions = () =>{
        var h=window.innerHeight-110;
        this.setState({height:h+'px'})
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.updateDimensions);
    }

    onFileChange = event => { 
        this.setState({ selectedFile: event.target.files[0] });    
    }; 

    onFileUpload = () => { 
        if(this.state.selectedFile==null){
            return
        }
     
        const formData = new FormData(); 
        
        formData.append( 
            this.state.selectedFile, 
            this.state.selectedFile.name 
        ); 

        console.log(this.state.selectedFile); 

        // axios.post("api/uploadfile", formData); 
    }; 
     
    fileData = () => { 
     
        if (this.state.selectedFile) { 
            
          return ( 
            <Card  className="pt-3 pb-3 pl-4 pr-4"> 
              <h2>File Details:</h2> 
              <p>File Name: {this.state.selectedFile.name}</p> 
              {/* <p>File Type: {this.state.selectedFile.type}</p>  */}
              <p> 
                Last Modified:{" "} 
                {this.state.selectedFile.lastModifiedDate.toDateString()} 
              </p> 
            </Card> 
          ); 
        } else { 
          return ( 
            <Card className="pt-3 pb-3 pl-4 pr-4">  
              <h4>Choose before Pressing the Upload button</h4> 
            </Card> 
          ); 
        } 
    } 
       

    render(){
        console.log(this.state.height);
        return(
            <div
                style={{
                    height:this.state.height,
                }}>
                <Jumbotron className="m-auto">    
                    <h1> 
                        Report Upload! 
                    </h1> 
                    <div> 
                        <Input type="file" onChange={this.onFileChange} /> 
                        <Button 
                            className="mt-3"
                            onClick={this.onFileUpload}> 
                            Upload! 
                        </Button> 
                    </div> 
                    {this.fileData()} 
                </Jumbotron>
            </div>
        );
    }
}

export default UploadPage;