import React, { useEffect, useState } from 'react';
import { SliderData } from './cards';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { Button,TextField } from '@mui/material';
import './CreditCardRecom.css';
import './CreditCalculation.css';
import {validation,score_} from './calculateModel/dist/calculationModel.dev';
import Img from './images/Logo_dark.png';
function CreditCardRecom({ slides }) {
  const [current, setCurrent] = useState(0);
  const [search,setSearch] = useState(0);
  const [score,setScore] = useState(0);
  const [show,setShow] = useState(false);
  var length = slides.length;  
  var images = [];


  useEffect(()=>{
    setShow(false);
  },[]);

  const nextSlide = () => {
   
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  

 

  const validateUser = () =>{
       
       
        
           
            setScore(search);
            slides.map((slide, index)=>{
                    if(score >= slide.min_score)
                    {
                        images.push(slide);
                    }
            })
            
          
            setShow(true);
            
        }
       
      
  




  return (
    <div className='slider'>
        <div className='credit__Title'>
                <h2 style = {{flex:2}}>Dashboard</h2>
                <Button variant="contained" style = {{backgroundColor:"#44B875",margin:0}} onClick = {()=>{window.location.assign('/interface/')}}>Go Back</Button>  
        </div>
        {!show &&  <div className = "credit__Info" style = {{fontFamily:'Inter'}}>
                <div className = "credit__InfoIns">
                    <div className='searchBar' style = {{display:'flex',alignItems:'center',flex:1,marginRight:200}}>
                      <input className = "searchInput" placeholder='Credit Score' onChange = {(data) =>setSearch(data.target.value)} style={{padding:10.5,borderRadius:5,width:400}}></input>
                      <Button variant = "contained" style = {{backgroundColor:"#44B875",marginLeft:10}} onClick = {validateUser}>Validate</Button>
                    </div>
                    <h4 style = {{color:'#EDECEC'}}>Please Enter credit score.</h4>
                    <h1 style = {{color:'#44B875'}}>Please note that it is not guaranteed that you will be approved.</h1>
                </div>
                <div className = "credit__logo">
                  <img src = {Img}/>
                </div>
               
              </div>}
        {show && <div className='card__contain'>
            <div className='cards__Info'>
                <h1 style = {{fontFamily:'Inter',color:'#EDECEC'}}>Best <span style = {{color:'#44B875'}}>Credit Cards</span> for You</h1>
            </div>
            <div className = 'card__contains'>
                        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
                    {slides.map((slide, index) => {
                        return (
                        <div
                            className={index === current ? 'slide active' : 'slide'}
                            key={index}
                        >
                            {index === current && score >= slide.min_score && (
                                <div className='card_Details'>
                                        <img src={slide.image} alt='travel image' className='image'/>
                                        <div className = 'card_info' style={{display:'flex',justifyContent:'space-around', fontFamily:'Inter',color:'#EDECEC',backgroundColor:'rgb(43, 42, 42)',padding:7,borderRadius:4}}>
                                            <div >
                                                <h4>{slide.issuedBy}</h4>
                                                <h3 style={{fontStyle:'italic',opacity:50}}>{slide.company}</h3>
                                            </div>
                                            <div>
                                            <h4 style={{justifyContent:'flex-end'}}>Min Score <span style = {{color:'#44B875'}}>{slide.min_score}</span></h4>
                                            <h4 style={{justifyContent:'flex-end'}}>Your Score <span style = {{color:'#44B875'}}>{score}</span></h4>

                                            </div>
                                            
                                        </div>
                                        
                                </div>
                            
                            
                            )}
                        </div>
                    );
                    })}
            </div>
                
        </div>}
     
    </div>
  );
}

export default CreditCardRecom;