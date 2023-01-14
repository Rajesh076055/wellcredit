import React,{useState,useEffect} from 'react'
import { Button,TextField } from '@mui/material';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './CreditCalculation.css';

import { pink } from '@mui/material/colors';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import LineChart from './visualizationFiles/LineChart';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import BarChart from './visualizationFiles/BarChart';
import { validation } from './calculateModel/dist/calculationModel.dev';
import GaugeChart from './visualizationFiles/GaugeChart';
import Img from './images/Logo_dark.png';


function CreditCalculation() {
  const [BankName,setBankName] = useState('');
  const [search,setSearch] = useState('');
  const [arrayData,setarrayData] = useState({});
  const [found,setfound] = useState(true);
  const [score,setScore] = useState(0);
  const [valueChange,setValueChange] = useState(0);
  const [percentChange,setpercentChange] = useState(0);
  const [status,setStatus] = useState('');
  const [show,setShow] = useState(true);
 
  useEffect(()=>{
    setShow(false);
    
  },[]);

  const selectBank = (name)=>{
    setBankName(name);
  }

  const validateUser = ()=>{
 
  
    const data = validation(search,BankName);
    
    
    
    if(data)
    {
      setfound(true);
      setScore(data.score);
      setStatus(data.rating);
      setValueChange(data.prevscore);
      setpercentChange(data.percentchange);
      setShow(true);
      setarrayData(data.arrayScores);
   
    }

    else 
    {
      setfound(false);
      setShow(false);
    }
    
  }

  return (
    <div className = 'credit__Container'>
    
      {!show && <div className='credit__Whose'> 
              <div className='credit__Title'>
                <h2 style = {{flex:1}}>Dashboard</h2>
                <Button variant="contained" style = {{backgroundColor:"#44B875",margin:0}} onClick = {()=>{window.location.assign('/interface/')}}>Go Back</Button>
              </div>
              <div className = "credit__Info" style = {{fontFamily:'Inter'}}>
                <div className = "credit__InfoIns">
                    <div className='searchBar' style = {{display:'flex',alignItems:'center',flex:1,marginRight:200}}>
                      <input className = "searchInput" placeholder='Search' onChange = {(data) =>setSearch(data.target.value)} style={{padding:10.5,borderRadius:5,width:200,margin:4}}></input>
                      <input className = "searchInput" placeholder='Bank' onChange = {(data) =>setBankName(data.target.value)} style={{padding:10.5,borderRadius:5,width:200,margin:4}}></input>

                      <Button variant = "contained" style = {{backgroundColor:"#44B875",marginLeft:5}} onClick = {validateUser}>Validate</Button>
                      <div className = "container_drop">
                       

                   </div>
    
                    </div>
                    <h4 style = {{color:'#EDECEC'}}>Please Enter the User's Full Name to generate the credit report.</h4>
                    <h1 style = {{color:'#44B875'}}>Our system uses highly accurate mathematical model to determine the credit scores</h1>
                </div>
                <div className = "credit__logo">
                  <img src = {Img}/>
                </div>
               
              </div>
        </div>
        
      }  
      {!found && <div className='credit__NotFoundUser'>
          <div className = '_404Image'></div>
          <h1>Looks like the User doesnot exist.</h1>
          <h2>Please check the username and try again.</h2>
          <h2>If you believe there has been an error from our side, please contact us.</h2>
        
      </div>
      
      }
        
        
      {show && <div className='credit__Report'>
         
         <div className='credit__Title'>
             <h2 style = {{flex:1}}>Dashboard</h2>
             <h2 style = {{flex:1}}>{search}</h2>
            <Button variant="contained" style = {{backgroundColor:"#44B875",margin:0}} onClick = {()=>{window.location.assign('/interface/creditscore')}}>Go Back</Button>
          </div>

          <div className='credit__DataBox'>
            <div className='credit__DataBoxSegment'>
                  <h3 id = "box__title">Credit Score</h3>
                  <h1 id = "box__dataWhite">{score}</h1>
            </div>
            <div className='credit__DataBoxSegment'>
                  <h3 id = "box__title">Compared to previous month</h3>
                  <div style = {{display:"flex",justifyContent:'space-between',alignItems:'center',marginTop:-20}}>
                  <h1 id = "box__dataWhite">{valueChange}</h1>

                  {(valueChange< 0) && <ArrowDropDownIcon sx={{ color: pink[500],fontSize:70 }} fontSize='large'/>}
                  {(valueChange > 0) && <ArrowDropUpIcon color = "success" sx = {{fontSize:70}}/> }
                  </div>
                 
            </div>
            <div className='credit__DataBoxSegment'>
                  <h3 id = "box__title">Percent (%) Change</h3>
                  <div style = {{display:"flex",justifyContent:'space-between',alignItems:'center',marginTop:-20}}>
                      <h1 id = "box__dataWhite">{percentChange}%</h1>
                      {(valueChange< 0) && <ArrowDropDownIcon sx={{ color: pink[500],fontSize:70 }} fontSize='large'/>}
                       {(valueChange > 0) && <ArrowDropUpIcon color = "success"  sx = {{fontSize:70}}/> }
                  </div>
            </div>
            <div className='credit__DataBoxSegment'>
                  <h3 id = "box__title">Status</h3>
                  <h1 id = "box__data" >{status}</h1>
            </div>
          </div>
          <div className='credit__Graphs'>
              <div className = "credit__GraphsSegment1">
               
                 <LineChart DataToPlot={arrayData}/>
              </div>
              <div className = "credit__GraphsSegment2">
               <BarChart DataToPlot={arrayData}/>
              </div>
          </div>
          <div className='credit__Additional'>
            <div className = "credit__meter">
                 <h3 className="section-title" style = {{color:'#EDECEC',fontFamily:'Inter'}}>Credit Score Meter</h3>
                 <GaugeChart score = {score}/>
            </div>
            <div className = "credit__stuffs" style = {{color:'#DBECEC',fontFamily:'Inter',display:'flex',flexDirection:'column',alignItems:"center",justifyContent:"space-evenly",marginLeft:12}}>
              <h2 style = {{color:'#44B875'}}>This information was generated by Well Credit.</h2>
              <h3>Report requested by {BankName}.</h3>
              
            </div>
            
          </div>
        </div>}
   
    </div>
  )
}

export default CreditCalculation