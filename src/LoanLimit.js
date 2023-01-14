import React,{useState,useEffect} from 'react'
import './CreditCalculation.css';
import { Button,TextField } from '@mui/material';
import {validation,score_} from './calculateModel/dist/calculationModel.dev';
import './LoanLimit.css';
import Img from './images/Logo_dark.png';
function LoanLimit() {

    useEffect(()=>{
        setShow(false);
        setfound(false);
    },[])
    const [show,setShow] = useState(false);
    const [BankName,setBankName] = useState('');
    const [search,setSearch] = useState(0);
    const [found,setfound] = useState(false);
    const [score,setscore] = useState(0);

    const validateUser = () =>{
       
       
       
     
        
          setfound(true);
          setscore(search);
          setBankName(BankName);
          setShow(true);
          
       
        
    
      
         
       
      
       
        
    }
    
  return (
    <div className='LoanLimit__Container'>
         <div className='credit__Title'>
                <h2 style = {{flex:2}}>Dashboard</h2>
                <Button variant="contained" style = {{backgroundColor:"#44B875",margin:0}} onClick = {()=>{window.location.assign('/interface/')}}>Go Back</Button>  
        </div>
            {!show && <div className='credit__Whose'> 
             
              <div className = "credit__Info" style = {{fontFamily:'Inter'}}>
                <div className = "credit__InfoIns">
                    <div className='searchBar' style = {{display:'flex',alignItems:'center',flex:1,marginRight:200}}>
                      <input className = "searchInput" placeholder='Score' onChange = {(data) =>setSearch(data.target.value)} style={{padding:10.5,borderRadius:5,width:200,margin:4}}></input>
                      <input className = "searchInput" placeholder='Bank' onChange = {(data) =>setBankName(data.target.value)} style={{padding:10.5,borderRadius:5,width:200,margin:4}}></input>

                      <Button variant = "contained" style = {{backgroundColor:"#44B875",marginLeft:5}} onClick = {validateUser}>Validate</Button>
                      <div className = "container_drop">
                       

                   </div>
    
                    </div>
                    <h4 style = {{color:'#EDECEC'}}>Please Enter the User's Full Name to generate the loan limits.</h4>
                    <h1 style = {{color:'#44B875'}}>Our system uses highly accurate mathematical model to determine the loan limits of users.</h1>
                </div>
                <div className = "credit__logo">
                  <img src = {Img}/>
                </div>
               
              </div>
        </div>
        
      }

      {show && <div className='loans__info'>
        
        {score < 450 && <h1>Seems like you have a poor score. Please contact {BankName} for any loan schemes available for your category.</h1>}
        {score >= 450 && score < 500 && <h1>Looks like your loan limit for {BankName} is Rs. 20,000</h1>}
        {score >= 500 && score < 750 && <h1>Looks like your loan limit for {BankName} is Rs. 3,00,000</h1>}
        {score >= 750 && score <= 850 && <h1>Looks like your loan limit for {BankName} is Rs. 8,00,000</h1>}
        </div>}
    </div>
  )
}

export default LoanLimit