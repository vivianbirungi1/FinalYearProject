import { useState } from 'react' 
//import axios from 'axios'
//import axios from '../config'
import {TextField, Button} from '@mui/material';
import { useNavigate  } from 'react-router';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Link} from 'react-router-dom'



//check if auth is true
//creating component for login form

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
    
    <div class="header-text">
        <Typography variant="h2">Login</Typography>
      </div>

      <div class="short-top">
        <img src="https://cdn.dribbble.com/users/1090020/screenshots/13813353/media/01ddddf5649e5a5cb569c2478881092d.png?compress=1&resize=1150x350"></img>
        
      </div>

      <div className="form-group form-top">
        <TextField label="Name" fullWidth sx={{ s: 1 }} variant="standard" name= "name" onChange={handleForm} /> <br />
        </div>

        <div className="form-group form-top">
        <TextField label="Email" fullWidth sx={{ s: 1 }} variant="standard" name= "email" onChange={handleForm} /> <br />
        </div>

        <div className="form-group form-top">
        <TextField label="Password" fullWidth sx={{ s: 1 }} variant="standard" type="password" name= "password" onChange={handleForm} />
        </div>

        <div class="short-top">
        <Typography variant="p">
          <Link to="/register" >New to the site? Register Now!</Link>
        </Typography>
        </div>


      <div class="content-spacing centertext">
      <Button color="warning" variant="contained">Submit</Button>
      </div>


    </Container>
  )
}

export default Login