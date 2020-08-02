import React from 'react';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    MarkSeries,
    LineMarkSeries,
    Hint,
    AreaSeries,
    GradientDefs} from 'react-vis';

class Visualizer extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            data:[{x: 0,y: 0},{x: 1, y: 11}, {x: 1.5, y: 29}, {x: 3, y: 7}],
            min:5,
            max:20,
            datapoint:null,
            primaryColor:'#CBB8A9',
            secondaryColor: '#32746D',
            yLabel:'Cholestrol'
        }
    }

    outliers(){
        var outliersData= this.state.data.filter(({x,y})=>{
            return y>this.state.max || y<this.state.min;
        });
        return outliersData;
    }

    render() {
        return (
            <XYPlot width={300} height={300} 
                onMouseLeave ={()=>this.setState({datapoint:null})}>
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <LineMarkSeries
                className="linemark-series-example-2"
                curve={'curveMonotoneX'}
                color={this.state.primaryColor}
                
                color={this.state.primaryColor}
                data={this.state.data}
                onNearestX={(datapoint, event)=>{
                    this.setState({datapoint:datapoint});
                }}
                
              />
              
              <MarkSeries
                className="linemark-series-example-2"
                // curve={'curveMonotoneX'}
                color={this.state.secondaryColor}
                data={this.outliers()}
                
              />
              {this.state.datapoint!=null &&
              <Hint value={this.state.datapoint} style={{fontSize: 14}}>
                  <div  style={{
                      background:'black',
                      borderRadius: '4px',
                      padding: '7px',
                      color: 'white',
                      fontSize: '11px'
                      }}>
                      <p>{this.state.yLabel} : {this.state.datapoint.y}</p>
                  </div>
                </Hint>
                }

                        
                        
            </XYPlot>
          );
            }
}

export default Visualizer;