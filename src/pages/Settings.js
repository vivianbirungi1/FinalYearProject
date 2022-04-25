import * as React from 'react';
import { useState } from 'react' 
//import axios from 'axios'
//import axios from '../config'
import {TextField, Button} from '@mui/material';
import { useNavigate  } from 'react-router';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MicIcon from '@mui/icons-material/Mic';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
import { ThemeContext, themes } from '../components/contextTheme';
import ToggleDark from '../components/toggleDark';

const Settings = props => {

    const {
        handleToggleDarkMode
 } = props

    const [highlight, setHighlight] = React.useState('');
    const [size, setSize] = React.useState('');
    const [font, setFont] = React.useState('');

  const handleChange = (event) => {
    setHighlight(event.target.value);
    setSize(event.target.value);
    setFont(event.target.value);
  };

  const [darkMode, setDarkMode] = React.useState(true);


  return (
    <Container>

<div class="content-spacing top">
      <Link to="/" style={{textDecoration: 'none'}}><Button style={{
        borderRadius: 35,
        backgroundColor: "#000000",
        color: "#ffffff",
        padding: "6px 22px",
        contentAlign: "center",
        fontSize: "18px"
    }} variant="contained"><ArrowBackIcon sx={{color: '#ffffff'}} />Return to Home</Button></Link>
      </div>

<div>
    <Typography className='top3 centertext' variant="h4">Settings</Typography>
    </div>
    <hr/>

    <div>
    <Typography className=' top3 centertext' variant="h6"> <MicIcon/>Voice</Typography>
<div className='settings settingsTop'>
    <div className="top">
              <div>
                <Typography variant="h6" component="div" htmlFor="rate">Rate: </Typography>
              </div>
              <input
              style={{width: 500}}
                type="range"
                min="0.5"
                max="2"
                defaultValue="1"
                step="0.1"
                id="rate"
              />
            </div>


            <div className="top">
              <div>
                <Typography variant="h6" component="div" htmlFor="rate">Speed </Typography>
              </div>
              <input
              style={{width: 500}}
                type="range"
                min="0.5"
                max="2"
                defaultValue="1"
                step="0.1"
                id="rate"
              />
            </div>
            </div>
    </div>

    <hr/>

    <div>
    <Typography className='loginTop top centertext' variant="h6"><FormatColorTextIcon/>Text</Typography>

    <div className='settings settingsTop'>

    {/* <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="highlight1">Highlight</InputLabel>
        <Select
          value={highlight}
          onChange={handleChange}
          
          label="Highlight"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem style={{backgroundColor: '#2EE7F3'}} value={10}>Blue</MenuItem>
          <MenuItem style={{backgroundColor: '#FFE03E'}} value={11}>Yellow</MenuItem>
          <MenuItem style={{backgroundColor: '#E85CFF'}} value={12}>Pink</MenuItem>
        </Select>
      </FormControl> */}

      <select
              className="top"
           
              label="Highlight"
            >
              <option style={{backgroundColor: '#2EE7F3'}}>Blue</option>
              <option style={{backgroundColor: '#FFE03E'}}>Yellow</option>
              <option style={{backgroundColor: '#E85CFF'}}>Purple</option>
            </select>

      <select
              className="top"
           
              label="Font Weight"
            >
              <option>Regular</option>
              <option style={{fontWeight: 'bold'}}>Bold</option>
              <option style={{fontWeight: 'italic'}}>Italic</option>
            </select>


      <select
              className="top"
              placeholder="Default"
           
              label="Font Size"
            >
              <option>12</option>
              <option>14</option>
              <option>16</option>
            </select>


      <select
              className="top"
           
              label="Font"
            >
              <option>Arial</option>
              <option>Helvetica</option>
              <option>Calibri</option>
            </select>


            
            </div>
    </div>

    <hr/>

    <div>
    <Typography className='loginTop top centertext' variant="h6"><LightbulbCircleIcon/>Theme</Typography>
    <div className="settings settingsTop">


   <ThemeContext.Consumer>
   {({ changeTheme }) => (
      <Button 
      onClick={()=> {
        setDarkMode(darkMode);
        changeTheme(darkMode);
      }}
      style={{
        borderRadius: 35,
        backgroundColor: "#2D95EC",
        padding: "15px 100px",
        contentAlign: "center",
        fontSize: "18px"
    }} variant="contained"><LightModeIcon />Light Mode</Button>
    )}
   </ThemeContext.Consumer>

     
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
      <Button
      onClick={()=> {
        setDarkMode(!darkMode);
        changeTheme(themes.light );
      }}
       style={{
        borderRadius: 35,
        backgroundColor: "#FFBA3E",
        color: "#000000",
        padding: "15px 100px",
        contentAlign: "center",
        fontSize: "18px"
    }} variant="contained"><DarkModeIcon sx={{color: '#000000'}} />Dark Mode</Button>
      
      )}
     
      </ThemeContext.Consumer>


    </div>
    </div>
    
    
      
   

    </Container>
  )
}

export default Settings