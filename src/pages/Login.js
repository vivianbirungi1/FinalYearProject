import {TextField, Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import login from '../images/login.png';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';


// return function handles what is displayed on the page.
// originally planned to pass in props in this function to enable authentication with AWS but was not acheived.
// Grid spacing using to align image and forms side by side.
// display includes form with email and password entry. button underneath forms.
// buttons for option for user to sign in using external accounts
// image sourced from Dribbble and stored in images folder.
// link to register page available on this page.
const Login = props => {


  return (
    <Container>
    
    <Grid container spacing={1}>

    <Grid item md = {6} xs={6}>
    <Typography className='loginTop top' variant="h2">Welcome Back</Typography>

    <Link className='link' to="/register" style={{ color: '#505F98', textDecoration: 'none' }}>New to the site? Register Now!</Link>

    <div className='top'>
    <Button style={{borderRadius: 25}}><GoogleIcon sx={{ color: '#F3AD2E', fontSize: 40 }} /> Login with Google</Button>
    <Button style={{borderRadius: 25}}><FacebookIcon sx={{ color: '#092186', fontSize: 40 }}/> Login with Facebook</Button>
    </div>

        <div className="form-group loginForm">
        <TextField className='formDM' label="Email" fullWidth sx={{ s: 1 }}  name= "email"  /> <br />
        </div>

        <div className="form-group loginForm">
        <TextField className='formDM' label="Password" fullWidth sx={{ s: 1 }}  type="password" name= "password" />
        </div>

        


      <div class="content-spacing centertext">
      <Button style={{
        borderRadius: 35,
        backgroundColor: "#FFBA3E",
        padding: "18px 36px",
        color: '#000000',
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