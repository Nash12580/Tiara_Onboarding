import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

function DetailsDescription() {
  const bulletPoints = [
    'First point from array',
    'Second point from array',
    'Third point from array',
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {/* Section 1 */}
      <Box sx={{ paddingBottom: 3 }}>
        <Typography variant="h3">Description</Typography>
        <Typography variant="body1">
          Mariachi San Luis is a vibrant mariachi band known for their energetic performances and colorful costumes,
           blending traditional Mexican folk music with modern pop influences. 
           Their lively shows, complete with intricate guitar solos and passionate vocal harmonies,
            have made them a favorite at festivals and celebrations across the globe.
        </Typography>
      </Box>

      {/* Section 2 (with bullet points) */}
      <Box sx={{ paddingBottom: 3 }}>
        <Typography variant="h3">Important Details</Typography>
        <List>
          {bulletPoints.map((point, index) => (
            <ListItem key={index} disablePadding>
              <ListItemText primary={point} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Section 3 */}
      <Box>
        <Typography variant="h3">Extra Details</Typography>
        <Typography variant="body1">This is the content for section 4.</Typography>
      </Box>
    </Box>
  );
};

export default DetailsDescription;