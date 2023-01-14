import React from 'react'
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    ArcElement,
    Legend,
  } from 'chart.js';
  import { Chart } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  )




export default function BarChart({DataToPlot}) {
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
       
        backgroundColor: '#17A8F5',
        borderColor: '#17A8F5' // for Line chart
      }
    ]
  };
  return (
    <div className="row">
      <div className="col-md-12">
        
      </div>

      <div className="section col-md-6">
        <h3 className="section-title" style = {{color:'#EDECEC'}}>Bar Chart Visualization</h3>
        <div className="section-content" style = {{height:400}}>
          <Bar data={data}/>
        </div>
      </div>

    </div>
  )
}
