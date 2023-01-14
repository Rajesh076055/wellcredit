import React from 'react'
import { Line, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Chart } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  )


const data2 = 
{
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
     
      {
        label: 'Leads',
        data: [41, 79, 57, 47, 63, 71],
      // for Line chart
        backgroundColor: '#44B875',
        borderColor: '#44B875' // for Line chart
      }
    ]
  };

export default function LineChart({DataToPlot}) {

  var keys = [];
  var values = [];
  for(var key in DataToPlot) {
    if(DataToPlot.hasOwnProperty(key)) { //to be safe
      keys.push(key);
      values.push(DataToPlot[key]);
    }

    
  }

  

  const data = {
    labels:keys.reverse(),
    datasets: [
     
      {
        label: 'credit score',
        data: values.reverse(),
       
        backgroundColor: '#FB8833',
        borderColor: '#17A8F5' // for Line chart
      }
    ]
  };
  
  return (
    <div className="row" style = {{height:100,marginBottom:30}}>
      <div className="col-md-12">
        
      </div>

      <div className="section col-md-6">
        <h3 className="section-title" style = {{color:'#EDECEC'}}>Line Chart Visualization</h3>
        <div className="section-content" style = {{height:400}}>
          <Line data={data} options = {{animation:false}}/>
        </div>
      </div>

      

    </div>
  )
}
