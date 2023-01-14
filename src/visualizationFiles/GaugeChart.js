import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { Doughnut} from 'react-chartjs-2';
import './gaugeChart.css';
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
import { margin } from '@mui/system';
  
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



export default function LineChart({score}) {

 

  
  return (
    <div className="row" style = {{height:100,marginBottom:60,marginLeft:30}}>
      <div className="col-md-12">
        
      </div>

      <div className="section col-md-6">
        
        <div className="section-content" style = {{width:300,fontFamily:'Inter'}}>
         <CircularProgressbar

            value = {score}
            text = {score}
            minValue = {300}
            maxValue = {850}
            circleRatio = {0.5}
            ra
            styles = {{
                trail:{
                    strokeLinecap:'butt',
                    transform:"rotate(-90deg)",
                    transformOrigin: 'center center',
                    stroke:"#232222"
                   
                },
                path:{
                    strokeLinecap:'butt',
                    transform:"rotate(-90deg)",
                    transformOrigin: 'center center',
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    stroke:"#44B875"
                },
                text:{
                    fill:"#17A8F5",
                    transformOrigin: 'center center',
                    
                    
                }
            }}
            strokeWidth = {7}
         
         
         
         />
        </div>
      </div>

      

    </div>
  )
}
