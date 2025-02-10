import React from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';

function ImageModal ({ images, selectedImageIndex, handlePrev, handleNext }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        maxWidth: '80vw', // Adjust width of the modal
        maxHeight: '80vh',
        bgcolor: '#932F6D',
        borderRadius: 2,
        overflow: 'hidden', // Ensure content does not overflow
      }}
    >
      <IconButton
        sx={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'white',
          zIndex: 10, // Ensure button is above the image
        }}
        onClick={handlePrev}
      >
        <ArrowLeft />
      </IconButton>

      <img
        src={images[selectedImageIndex]}
        alt="Selected"
        style={{
          maxWidth: '100%',
          maxHeight: '80vh',
          objectFit: 'contain',
          display: 'block',
          margin: '0 auto', // Center image horizontally
        }}
      />

      <IconButton
        sx={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'white',
          zIndex: 10, // Ensure button is above the image
        }}
        onClick={handleNext}
      >
        <ArrowRight />
      </IconButton>
    </Box>
  );
};

export default ImageModal;