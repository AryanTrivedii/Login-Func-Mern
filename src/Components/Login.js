import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from './Redux/Authslice';
import {Container,Typography,Button,Checkbox,styled,TextField,FormControlLabel} from '@mui/material'
import { useNavigate} from 'react-router-dom';

const Boxc=styled(Container)`
margin-left:35%;
margin-top:15%;
border: 2px solid black;
width:25%;
height:15%;
`
const Para =styled(Typography)`
margin-top:10px;
`








function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
    const history = useNavigate()
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = () => {
    dispatch(loginUser(credentials)).then((response) => {
      if (response === 'lOGIN sUCESSFULL') {
        // Redirect to the home page upon successful login
        history.push('/home');
      }
    });
  };

  return (
    <>
    <Boxc>
      <h1>LOGIN</h1>
      <Para>Email adresss</Para>
      <TextField id="outlined-basic" 
      label="Email" variant="outlined"
        type="text"
        name="email"
        placeholder="Email"
        value={credentials.email}
        onChange={handleInputChange}
      />
      <Para>Password</Para>
      <TextField id="outlined-basic" label="Passsword" variant="outlined"
        type="password"
        name="password"
        
        value={credentials.password}
        onChange={handleInputChange}
      />
      
        <Container style={{display:"flex"}}>
        <FormControlLabel style={{marginRight:"10%"}}
              control={
                <Checkbox
                  name="rememberMe"
                  color="primary"
                />
              }
              label="Remember me"
            />


       <Typography style={{marginLeft:"40px"}}>Forgot Password?</Typography>
       </Container>
      <Button 
      style={{ backgroundColor: 'red', marginTop: '3%' ,marginLeft:"130px",width:"100px"}}
      onClick={handleLogin}>Login</Button>
      <Typography style={{marginLeft:"5%"}}>Not Registered
      <href style={{color:"Red"}}>
      Click Here</href>
      
      </Typography>

      </Boxc>
    </>
  );
}

export default Login;
