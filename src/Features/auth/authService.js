import { Navigate } from 'react-router-dom';
import axios from 'C:/Users/na/Desktop/Extras/Designs/HackAWeek/well_credit/src/axios.js';

//Register User
const register = async (userData) => {
    const response = await axios.post('/user/login/',userData);
  

    if(response.data)
    {
        localStorage.setItem('token',response.data.token)
        localStorage.setItem('user',JSON.stringify(response.data));
       
    }

    return response.data;
}


const authService = {
    register,
  
}

export default authService