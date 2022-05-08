import * as React from 'react';
import { Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Link} from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MicIcon from '@mui/icons-material/Mic';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
import { ThemeContext, themes } from '../components/contextTheme';

const Settings = props => {

    const {
        handleToggleDarkMode
 } = props

//  originally planned to highlight text and increase and decrease font size and change font family in the application.
// was not implemented but would implement in future development of the application.
    const [highlight, setHighlight] = React.useState('');
    const [size, setSize] = React.useState('');
    const [font, setFont] = React.useState('');

  const handleChange = (event) => {
    setHighlight(event.target.value);
    setSize(event.target.value);
    setFont(event.target.value);
  };

  // dark mode passed as boolean to listen to whether darkmode is true or not.
  const [darkMode, setDarkMode] = React.useState(true);

// currently forms are for display except for dark mode and light mode buttons.
  // forms for highlighting text, changing font size and font family 
  // form for changing pitch and speed
  // buttons for changing between light mode and dark mode
  // Button stored insdie theme context wrapper to listen out for change in theme.
// if light mode button is clicked then the function listens out for if dark mode is set to true, if so then it is changed to false and site is changed to light mode.
// if dark mode button is clicked then the function listens out for if dark mode is set to false, if so then it is changed to true and site is changed to dark mode.

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