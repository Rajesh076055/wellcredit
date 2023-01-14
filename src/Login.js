import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {useNavigate} from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './Login.css';
import {useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {register,reset} from './Features/auth/authSlice';

function Copyright(props) {





  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function Login() {
 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {user,isLoading, isError, isSuccess, message} = useSelector(
    (state) => state.auth)

  useEffect(()=>{

  
    if((isSuccess || user)) {
      navigate('/interface/')
    }
    else
    {
     navigate('/'); 
    }
    dispatch(reset())
    
  },[user, isError, isSuccess, message, navigate, dispatch]);
  



  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email_ = data.get('email');
    const password_ = data.get('password');
    
    const getMeLogIn = {
      Email:email_,
      password:password_
    };

    
    try {
        
    
      dispatch(register(getMeLogIn));

     
      
     

      
    } catch (error) {
     console.log(error.response);
    }
   
 
   
  };

  return (
        <div className='Login__Container'>
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
               
                display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ mt: 8, mb:2, bgcolor: '#44B875' }}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5" style = {{color:'white'}}>
            SIGN IN
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1,}}>
           <TextField 
        
              margin="normal"
              required
              fullWidth
             
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              className='Login__Inputs' 
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              className='Login__Inputs'
            />
            <FormControlLabel
              control={<Checkbox value="remember" color='primary' className='CheckBox' />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,backgroundColor:'#232222'}}
              className = "Button__Signin"
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" sx = {{color:'#fff'}}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" sx = {{color:'#fff'}} >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
   
        </div>
      
  );
}

