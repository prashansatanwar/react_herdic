import React from 'react';
import Visualizer from './Visualizer';
import { Container, Row } from 'reactstrap';


class VisualizePage extends React.Component{

    constructor(props){
        super(props)
        this.state={
            height: '',
            data:[
                {
                'date': '2019-02-13',
                
                'parameters': {
                        'CHOLESTEROL': {
                                    'value': 142.0,
                                    'low': 130.0,
                                    'high': 220.0,
                                    'unit': 'mg/dL'
                                },
                        'HDL': {
                                    'value': 53.0,
                                    'low': 35.0,
                                    'high': 65.0,
                                    'unit': 'mg/dL'
                            },
                        'TRIGLYCERIDES': {
                                    'value': 98.0,
                                    'low': 35.0,
                                    'high': 180.0,
                                    'unit': 'mg/dL'
                            },
                        'LDL':  {
                                    'value': 77.0,
                                    'low': 10.0,
                                    'high': 130.0,
                                    'unit': 'mg/dL'
                            },
                        'VLDL':	 {
                                    'value': 12.0,
                                    'low': 5.0,
                                    'high': 36.0,
                                    'unit': 'mg/dL'
                            }
                        }	
                },
                
                {
                'date': '2019-03-21',
                
                'parameters': {
                        'CHOLESTEROL': {
                                    'value': 168.0,
                                    'low': 130.0,
                                    'high': 220.0,
                                    'unit': 'mg/dL'
                                },
                        'HDL': {
                                    'value': 46.0,
                                    'low': 35.0,
                                    'high': 65.0,
                                    'unit': 'mg/dL'
                            },
                        'TRIGLYCERIDES': {
                                    'value': 140.0,
                                    'low': 35.0,
                                    'high': 180.0,
                                    'unit': 'mg/dL'
                            },
                        'LDL':  {
                                    'value': 94.0,
                                    'low': 10.0,
                                    'high': 130.0,
                                    'unit': 'mg/dL'
                            },
                        'VLDL':	 {
                                    'value': 23.0,
                                    'low': 5.0,
                                    'high': 36.0,
                                    'unit': 'mg/dL'
                            }
                        }	
                },
                
                {
                'date': '2019-07-03',
                
                'parameters': {
                        'CHOLESTEROL': {
                                    'value': 128.0,
                                    'low': 130.0,
                                    'high': 220.0,
                                    'unit': 'mg/dL'
                                },
                        'HDL': {
                                    'value': 28.0,
                                    'low': 35.0,
                                    'high': 65.0,
                                    'unit': 'mg/dL'
                            },
                        'TRIGLYCERIDES': {
                                    'value': 68.0,
                                    'low': 35.0,
                                    'high': 180.0,
                                    'unit': 'mg/dL'
                            },
                        'LDL':  {
                                    'value': 101.0,
                                    'low': 10.0,
                                    'high': 130.0,
                                    'unit': 'mg/dL'
                            },
                        'VLDL':	 {
                                    'value': 14.0,
                                    'low': 5.0,
                                    'high': 36.0,
                                    'unit': 'mg/dL'
                            }
                        }	
                },
                
                {
                'date': '2019-05-25',
                
                'parameters': {
                        'CHOLESTEROL': {
                                    'value': 158.0,
                                    'low': 130.0,
                                    'high': 220.0,
                                    'unit': 'mg/dL'
                                },
                        'HDL': {
                                    'value': 46.0,
                                    'low': 35.0,
                                    'high': 65.0,
                                    'unit': 'mg/dL'
                            },
                        'TRIGLYCERIDES': {
                                    'value': 140.0,
                                    'low': 35.0,
                                    'high': 180.0,
                                    'unit': 'mg/dL'
                            },
                        'LDL':  {
                                    'value': 141.0,
                                    'low': 10.0,
                                    'high': 130.0,
                                    'unit': 'mg/dL'
                            },
                        'VLDL':	 {
                                    'value': 29.0,
                                    'low': 5.0,
                                    'high': 36.0,
                                    'unit': 'mg/dL'
                            }
                        }	
                    }                
                
            ],
            sortedData:[]
        }

        this.processData()
    }


    processData= ()=>{
        let pd={}
        // console.log(data)
        let names= Object.keys(this.state.data[0].parameters)
        // console.log(names);


        for(let i=0;i<this.state.data.length;i++){
            // console.log(this.state.data[i]);
            let dd=this.state.data[i].date;
            Object.entries(this.state.data[i].parameters).forEach((entry)=>{
                if(pd[entry[0]]==null){
                    pd[entry[0]]=[[dd,entry[1]]]
                }
                else{
                    pd[entry[0]].push([dd,entry[1]]);
                }
            })
        }
        this.setState({sortedData:pd})

        console.log(pd)
    }

    getRow=(props)=>{
        console.log("ytfdigvreieriyi");
        return(
            <Row>
                ljfbfvbkrbkj
                <h2>{props.name}</h2>
                <Visualizer 
                    name={props.name}
                    max={props.max}
                    min={props.min}
                    data={props.data}
                
                />
            </Row>
        );  
    }

    build(){
        // console.log("apple")
        return(
            <div>
                jyjyfkkv
            
                    {Object.entries(this.state.sortedData).map((entry) => {
                        this.getRow({
                            name:entry[0],
                            min:entry[1][0][1].low,
                            max:entry[1][0][1].high,
                            data:{x: Date.parse(entry[1][0][0])
                                ,y: entry[1][0][1].value
                            }
                        })
                        
                        // console.log(entry);
                        console.log("row");
                    })}
                </div>
            )

    }

    componentDidMount(){
        window.addEventListener('resize', this.updateDimensions);
        var h=window.innerHeight-110;
        this.setState({height:h+'px'})
        this.processData(this.state.data);
    }

    updateDimensions = () =>{
        var h=window.innerHeight-110;
        this.setState({height:h+'px'})
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.updateDimensions);
    }
    
    render(){
        return(
            <div style={{
                height:this.state.height,
                // backgroundColor:'pink'
            }}>
                {/* <div className="bg-danger">
                    ljfjegiureiugf
                {this.build}
                </div> */}
                

            {/* <div>
                jyjyf
                {Object.entries(this.state.sortedData).forEach((entry)=>{
            
                    this.getRow({
                            name:entry[0],
                            min:entry[1][0][1].low,
                            max:entry[1][0][1].high,
                            data:{x: Date.parse(entry[1][0][0])
                                ,y: entry[1][0][1].value
                            }
                        })
                        
                        // console.log(entry);
                        console.log("row");
                })}
            </div> */}

            </div>
        );
    }

}

export default VisualizePage;