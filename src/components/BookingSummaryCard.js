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

function BookingSummaryCard(props) {
  const { image, title, location, rating, fees } = props; 
  const total = fees[1].reduce((acc, price) => acc + price, 0);

  return (
    <Card sx={{ margin: 1, boxShadow: 3, borderRadius: 2, alignSelf: 'auto', width: '30%'}}>
      <CardMedia
        sx={{ paddingRight: 1, borderTopLeftRadius: 2, borderTopRightRadius: 2 }}
        component="img"
        height={"45%"}
        
        image={image}
        
      
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingX: 2, gap: 1 }}>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" color="#443D44" sx={{ flexGrow: 1 , fontSize: '180%', textAlign: 'center', fontWeight: 'bold'  } }>
            {title}
          </Typography>
         
        </Box>

        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 1 }}>
        

        <Typography variant="body2" color="#000000" sx={{fontSize : 'large'}}>
          {location}
        </Typography>
        <StyledRating>
            <StarIcon fontSize="small" sx={{ marginRight: 0.5, color: '#591C42' }} /> 
            <Typography variant="body2">{rating}</Typography>
        </StyledRating>

        </Box>

        <Box sx={{ paddingTop: 5, width: '100%', }}>
          <Typography variant="body1" color="#443D44" fontWeight="bold" fontSize={'large'}>
            Price details

          </Typography>
          {fees[0].map((fee, index) => (
            <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', paddingTop: 1, }}>
              <Typography variant="body1" color="#443D44" fontSize={'large'}>
                {fee}
              </Typography>
              <Typography variant="body1" color="#443D44" fontSize={'large'}>
                ${fees[1][index]}
              </Typography>
            </Box>
          ))}
          <Box sx={{ width: '100%', mt: 2, borderTop: 1, borderColor: 'divider' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', pt: 3 }}>
              <Typography variant="body1" color="#443D44" fontWeight="bold" fontSize={'120%'}>
                 Total (USD)
              </Typography>
              <Typography variant="body1" color="#932F6D" fontWeight="bold" fontSize={'140%'}>
                ${total.toLocaleString()}
              </Typography>
            </Box>
          </Box>
        </Box>

      </CardContent>
    </Card>
  );
}

export default BookingSummaryCard;
