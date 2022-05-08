import {Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';


const Landing = () => {

// return function handles what is displayed on the page.
// display of image within a card component from Material UI.
// image sourced from Dribbble. overlaying the image is text welcoming user to page.
// and buttons leading user to main pages being Text to Speech and Speech to Text pages.
// various Material UI components used such as Cards, Links, Box, CardMedia, Buttona and Typography.
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