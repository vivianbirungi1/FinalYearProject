import { Link, useNavigate } from 'react-router-dom';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import {Button} from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {useEffect, useState} from 'react';
import { ThemeContext, themes } from './contextTheme';
//import ToggleDark from './toggleDark';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

// passing in a prop to handle toggling the light mode and dark mode
export default function SearchAppBar({handleToggleDarkMode}) {

  // creating the navigate function and assigning it to useNavigate.
  let navigate = useNavigate()

  const [darkMode, setDarkMode] = React.useState(true);

  // separating the pages and 'settings'. pages handle to navigation of the main pages of the application. 
  // settings handles the login and register navigation.
const pages = [<Link className='link' to="/" style={{ color: '#505F98', textDecoration: 'none' }}>Home</Link>, <Link className='link' to="/textspeech" style={{ color: '#505F98', textDecoration: 'none' }}>Text to Speech</Link>, <Link className='link' to="/speechrec" style={{ color: '#505F98', textDecoration: 'none' }}>Speech Recognition</Link>, <Link className='link' to="/settings" style={{ color: '#505F98', textDecoration: 'none' }}> Settings</Link>];
  const settings = [<Link className='link' to="/login" style={{ color: '#505F98', textDecoration: 'none' }}>Login</Link>, <Link className='link' to="register" style={{ color: '#505F98', textDecoration: 'none' }}>Register</Link>];

// returns navbar at the top of the page. navbar is responsive to page sizing.
// navbar links displayed, hyperlink styling removed.
// navbar colour set to white.
// logo displayed as well as name of application.
// light and dark mode toggle button displayed. when toggled, button triggers the theme change from light to dark mode
// icons used sourced from Material UI icons
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: '#ffffff'}}>
        <Toolbar>
          <RecordVoiceOverIcon sx={{ color: '#505F98', mr: 2 }} />

          {pages.map((page) => (
          <MenuItem key={page}>
          <Typography
            variant="h7"
            noWrap
            component="div"
            sx={{ color: '#505F98', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {page}
          </Typography>
          </MenuItem>
          ))}

          
          <Typography
            variant="h6"
            noWrap
            textAlign="center"
            component="div"
            sx={{color: '#505F98', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link to="/" style={{ color: '#505F98', textDecoration: 'none'}}>
            Speechverse
            </Link>
          </Typography>
         
         
          
          {settings.map((setting) => ( 
          <MenuItem key={setting}>
          <Typography
            variant="h7"
            noWrap
            component="div"
            sx={{ color: '#505F98', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {setting}
          </Typography>
          </MenuItem>
          ))}

            <ThemeContext.Consumer>
              {({ changeTheme }) => (
                <Button
                onClick={()=> {
                  setDarkMode(!darkMode);
                  changeTheme(darkMode ? themes.light : themes.dark);
                }}>
                 
                <DarkModeIcon /> / <LightModeIcon />
              </Button>
              )}
          </ThemeContext.Consumer>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
