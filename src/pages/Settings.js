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

const Settings = props => {

    const [highlight, setHighlight] = React.useState('');
    const [size, setSize] = React.useState('');
    const [font, setFont] = React.useState('');

  const handleChange = (event) => {
    setHighlight(event.target.value);
    setSize(event.target.value);
    setFont(event.target.value);
  };



  return (
    <Container>

<div class="content-spacing top">
      <Link to="/"><Button style={{
        borderRadius: 35,
        backgroundColor: "#ffffff",
        color: "#000000",
        padding: "10px 26px",
        contentAlign: "center",
        fontSize: "18px"
    }} variant="contained"><ArrowBackIcon sx={{color: '#000000'}} />Home</Button></Link>
      </div>

<div>
    <Typography className='top2 centertext' variant="h4">Settings</Typography>
    </div>

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

    <div>
    <Typography className='loginTop top centertext' variant="h6"><FormatColorTextIcon/>Text</Typography>

    <div className='settings settingsTop'>
    <FormControl sx={{ m: 1, minWidth: 300 }}>
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
          <MenuItem style={{backgroundColor: '#FFE03E'}} value={21}>Yellow</MenuItem>
          <MenuItem style={{backgroundColor: '#E85CFF'}} value={22}>Pink</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="size1">Size</InputLabel>
        <Select
          value={size}
          onChange={handleChange}
          autoWidth
          label="Size"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Regular 12</MenuItem>
          <MenuItem value={21}>Bold 12</MenuItem>
          <MenuItem value={22}>Italic 12</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="font1">Font</InputLabel>
        <Select
          value={font}
          onChange={handleChange}
          autoWidth
          label="Font"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Arial</MenuItem>
          <MenuItem value={21}>Helvetica</MenuItem>
          <MenuItem value={22}>Calibri</MenuItem>
        </Select>
      </FormControl>


            
            </div>
    </div>

    <div>
    <Typography className='loginTop top centertext' variant="h6"><LightbulbCircleIcon/>Theme</Typography>
    <div className="settings settingsTop">

    <div class="content-spacing centertext">
      <Button style={{
        borderRadius: 35,
        backgroundColor: "#2D95EC",
        padding: "18px 106px",
        contentAlign: "center",
        fontSize: "18px"
    }} variant="contained"><LightModeIcon />Light Mode</Button>
      </div>

      <div class="content-spacing centertext">
      <Button style={{
        borderRadius: 35,
        backgroundColor: "#FFBA3E",
        color: "#000000",
        padding: "18px 106px",
        contentAlign: "center",
        fontSize: "18px"
    }} variant="contained"><DarkModeIcon sx={{color: '#000000'}} />Dark Mode</Button>
      </div>


    </div>
    </div>
    
    
      
   

    </Container>
  )
}

export default Settings