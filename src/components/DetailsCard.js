import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

function DetailsCard({ name, cityState, price, rating, imageUrl }){
  return (
    <Card>
      {/* Top half with text and rating */}
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {cityState}
          </Typography>
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
            {price}
          </Typography>
        </Box>
        {/* Star icon with rating */}
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
          <StarIcon sx={{ color: '#FFC107', mr: 0.5, fontSize: 30}}/>
          <Typography variant="body1" component="div" sx={{fontSize: 30}}>
            {rating}
          </Typography>
        </Box>
      </CardContent>

      {/* Bottom half with image */}
      <CardMedia
        component="img"
        sx={{
          objectFit: 'cover',
          height: 500,
        }}
        image={imageUrl}
        alt={name}
      />
    </Card>
  );
};

export default DetailsCard;