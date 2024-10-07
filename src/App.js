import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import './App.css';

function App() {
  const [coinSide, setCoinSide] = useState('');
  const [altText, setAltText] = useState('');
  const headsImages = ['https://iconicimages.net/app/uploads/2017/01/AS001.jpg']; // Replace with actual paths
  const tailsImages = ['https://i.pinimg.com/originals/3c/d4/98/3cd498b5ca6969a58d33345e1d2a3a5c.jpg']; // Replace with actual paths

  const flipCoin = () => {
    const result = Math.random() < 0.5 ? 'heads' : 'tails';
    let selectedImage;
    let altText;

    const headsFolder = 'heads/';
    const tailsFolder = 'tails/';

    if (result === 'heads') {
      selectedImage = headsImages[Math.floor(Math.random() * headsImages.length)];
      //altText = 'Heads of the coin';
    } else {
      selectedImage = tailsImages[Math.floor(Math.random() * tailsImages.length)];
      //altText = 'Tails of the coin';
    }

    console.log(selectedImage)

    setCoinSide(selectedImage);
    setAltText(altText);
  };

  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Button
        onClick={flipCoin}
        sx={{
          width: 300,
          height: 300,
          borderRadius: '50%',
          backgroundColor: '#FFD700',
          '&:hover': {
            backgroundColor: '#FFC300',
          },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: 3,
        }}
      >
        {coinSide ? (
          <img src={coinSide} alt={altText} style={{ width: '80%', height: '80%', objectFit: 'contain', borderRadius: '50%' }} />
        ) : (
          <Typography variant="h5" color="white">Click to Flip</Typography>
        )}
      </Button>
      <Typography variant="h6" sx={{ mt: 2 }}>
      </Typography>
    </Box>
  );
}

export default App;
