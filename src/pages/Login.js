import { useState } from 'react' 
//import axios from 'axios'
//import axios from '../config'
import {TextField, Button} from '@mui/material';
import { useNavigate  } from 'react-router';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import login from '../images/login.png';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';



const Login = props => {

  let navigate = useNavigate()

  const [form, setForm] = useState(false)

  const handleForm = e => {

    setForm(prevState => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))

    console.log(form)
  }
  


  return (
    <Container>
    
    <Grid container spacing={1}>

    <Grid className='bgGrey' item md = {6} xs={6}>
    <Typography className='loginTop top' variant="h2">Welcome Back</Typography>

    <Link className='link' to="/register" style={{ color: '#505F98', textDecoration: 'none' }}>New to the site? Register Now!</Link>

    <div className='top'>
    <GoogleIcon sx={{ color: '#F3AD2E', fontSize: 40 }} /> Login with Google
    <FacebookIcon sx={{ color: '#092186', fontSize: 40 }}/> Login with Facebook
    </div>

        <div className="form-group loginForm">
        <TextField label="Email" fullWidth sx={{ s: 1 }}  name= "email" onChange={handleForm} /> <br />
        </div>

        <div className="form-group loginForm">
        <TextField label="Password" fullWidth sx={{ s: 1 }}  type="password" name= "password" onChange={handleForm} />
        </div>

        


      <div class="content-spacing centertext">
      <Button style={{
        borderRadius: 35,
        backgroundColor: "#FFBA3E",
        padding: "18px 36px",
        contentAlign: "center",
        fontSize: "18px"
    }} variant="contained">Login</Button>
      </div>

    </Grid>

    <Grid item md={6} xs={4}>
      
        <img className="imageTop image" src={login} />
 
      </Grid>
    </Grid>
      
   

    </Container>
  )
}

export default Login