import {Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import landing from '../images/landing.png';
import wave from '../images/wave.gif';
import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


const Landing = () => {


    return(
      
            <Card maxWidth="100%">
  <Box sx={{ position: 'relative' }}>
    <CardMedia
      component="img"
      height="875"
      image="https://cdn.dribbble.com/users/77121/screenshots/15402129/media/fd4784204641d8a2279d2476950ccbda.gif"
    />
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        center: 0,
        width: '100%',
        bgcolor: 'rgba(0, 0, 0, 0.54)',
        color: 'white',
        padding: '350px',
      }}
    >
      <Typography className="moveContent" variant="h1">Welcome to Speechverse</Typography>
      <Typography className="moveContent"  variant="h5">Note taking just got easier. Get started for free today!</Typography>

     <Link to="/textspeech" style={{textDecoration: 'none'}}> <Button style={{
        borderRadius: 35,
        backgroundColor: "#FFBA3E",
        color: '#000000',
        padding: "18px 36px",
        fontSize: "18px"
    }} className='moveContent'>Text to Speech</Button></Link>
               <Link to="/speechrec" style={{textDecoration: 'none'}}> <Button style={{
        borderRadius: 35,
        backgroundColor: "#2D95EC",
        color: '#000000',
        padding: "18px 36px",
        fontSize: "18px"
    }} className='moveContent'>
                    Speech Recognition
                    </Button></Link>
      
    </Box>

    

  </Box>
</Card>

     
         
    )
}

export default Landing