import { Link, useNavigate } from 'react-router-dom';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';



// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.black, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.black, 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'black',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));



export default function SearchAppBar() {

  let navigate = useNavigate()

const register = () => {
  //props.onAuthenticated(false)
  navigate('/register')
}

const pages = [<Link className='link' to="/" style={{ color: '#505F98', textDecoration: 'none' }}>Home</Link>, <Link className='link' to="/speechrec" style={{ color: '#505F98', textDecoration: 'none' }}>Speech Recognition</Link>, <Link className='link' to="/settings" style={{ color: '#505F98', textDecoration: 'none' }}> Settings</Link>];
  const settings = [<Link className='link' to="/login" style={{ color: '#505F98', textDecoration: 'none' }}>Login</Link>, <Link className='link' to="register" style={{ color: '#505F98', textDecoration: 'none' }}>Register</Link>];


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: '#ffffff'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ color: '#505F98', mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

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
            Speechverse
          </Typography>
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
          
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

          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
