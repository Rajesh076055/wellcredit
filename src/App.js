
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import HomePage from './HomePage';
import CreditCalculation from './CreditCalculation';
import SignUp from './Register';
import { SliderData } from './cards';
import CreditCardRecom from './CreditCardRecom';
import LoanLimit from './LoanLimit';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path = '/' element = {<Login/>}></Route>
        <Route path = '/login' element = {<Login/>}></Route>
        <Route path = '/register' element = {<SignUp/>}></Route>
        <Route path = '/interface' element = {<HomePage/>}></Route>
        <Route exact path = "/interface/creditscore" element = {<CreditCalculation/>}></Route>
        <Route exact path = "/interface/creditcards" element = {<CreditCardRecom slides = {SliderData}/>}></Route>
        <Route exact path = "/interface/loans" element = {<LoanLimit/>}></Route>

     
   
      </Routes>
      
    </div>
  );
}

export default App;
