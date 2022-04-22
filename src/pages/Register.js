import { useState } from 'react' 
//import axios from 'axios'
//import axios from '../config'
import {TextField, Button} from '@mui/material';
import { useNavigate  } from 'react-router';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import register from '../images/register.png';
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

    <Grid item md={6} xs={2}>
      
      <img className="imageTop image" src={register} />

    </Grid>

    <Grid className='bgGrey' item md = {6} xs={6}>
    <Typography className='loginTop top' variant="h2">Get Started</Typography>

    <Link className='link' to="/login" style={{ color: '#505F98', textDecoration: 'none' }}>Already have an account? Login!</Link>

    <div className='top'>
    <Button style={{borderRadius: 25}}><GoogleIcon sx={{ color: '#F3AD2E', fontSize: 40 }} /> Sign up with Google</Button>
    <Button style={{borderRadius: 25}}><FacebookIcon sx={{ color: '#092186', fontSize: 40 }}/> Sign up with Facebook</Button>
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
    }} variant="contained">Register</Button>
      </div>

    </Grid>

    
    </Grid>
      
   

    </Container>
  )
}

export default Login