import React, { useState } from 'react';
import { Box, Button, Typography, Modal } from '@mui/material';
import ImageModal from './ImageModal'; // Import the ImageModal component

function DetailsImages({images}) {
  const [open, setOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleOpen = (index) => {
    setSelectedImageIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {/* Image Row */}
      <Box sx={{ display: 'flex', flexGrow: 1, gap: 2, marginRight: 2 }}>
        {images.slice(0, 3).map((image, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              height: 175,
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              borderRadius: 2,
            }}
            onClick={() => handleOpen(index)}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Box with labels and button */}
      <Box
        sx={{
          border: '1px solid #ccc',
          height: 155,
          padding: 2,
          borderRadius: 3,
          width: '25%',
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center'
        }}
      >
        <Typography variant="h4">Price/Rate</Typography>
        <Typography variant="h5" color="text.secondary">Starting Price</Typography>
        <Button variant="contained" sx={{ mt: 1, borderRadius: 2 }}>
          Reserve
        </Button>
      </Box>

      {/* Modal for showing the image in detail */}
      <Modal
        open={open}
        onClose={handleClose} // Clicking outside should close the modal
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <ImageModal
          open={open}
          handleClose={handleClose}
          images={images}
          selectedImageIndex={selectedImageIndex}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      </Modal>
    </Box>
  );
}

export default DetailsImages;