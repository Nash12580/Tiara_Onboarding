import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star'; 

const StyledRating = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: '#591C42',
  marginLeft: theme.spacing(0.5),
}));

function ListingCard(props) {
  const { image, title, location, rating, price } = props;

  return (
    <Card sx={{ margin: 1, boxShadow: 3, borderRadius: 2, alignSelf: 'auto'}}>
      <CardMedia
        component="img"
        height="250"
        image={image}
        alt={title}
        sx={{ borderTopLeftRadius: 2, borderTopRightRadius: 2 }}
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingX: 2, gap: 1 }}>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" color="#443D44" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <StyledRating>
            <StarIcon fontSize="small" sx={{ marginRight: 0.5, color: '#591C42' }} /> 
            <Typography variant="body2">{rating}</Typography>
          </StyledRating>
        </Box>
        <Typography variant="body2" color="#ADAAAD">
          {location}
        </Typography>
        <Typography variant="body1" color="#443D44" sx={{ alignSelf: 'start' }}>
          {price}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ListingCard;
