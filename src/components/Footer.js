import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, YouTube, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#932F6D', color: 'white', padding: '30px 20px', fontSize:'11px'}}>
      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'left' }, gap: 1 }}>
              <IconButton href="#" color="inherit" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton href="#" color="inherit" aria-label="YouTube">
                <YouTube />
              </IconButton>
              <IconButton href="#" color="inherit" aria-label="Instagram">
                <Instagram />
              </IconButton>
            </Box>
            <Typography variant="body1" sx={{ color: '#E09EC7', fontSize: '16px', fontWeight: 'bold'}}>
              Follow Us on Social Media
            </Typography>
          </Grid>

          <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 2, color: '#E09EC7'}}>
              Service
            </Typography>
            <Link href="#" color="inherit" underline="none">
              <Typography variant="body2" mb={2}>Music & Performance</Typography>
            </Link>
            <Link href="#" color="inherit" underline="none">
              <Typography variant="body2" mb={2}>Interactive Entertainment</Typography>
            </Link>
          </Grid>

          <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'center', md: 'left'} }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 2, color: '#E09EC7'}}>
              Customer Service
            </Typography>
            <Link href="#" color="inherit" underline="none">
              <Typography variant="body2" mb={2}>Terms Of Service</Typography>
            </Link>
            <Link href="#" color="inherit" underline="none">
              <Typography variant="body2" mb={2}>Privacy Policy</Typography>
            </Link>
          </Grid>

          <Grid item xs={12} md={2} sx={{ textAlign: { xs: 'center', md: 'left'} }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 2, color: '#E09EC7'}}>
              Are You A Vendor?
            </Typography>
            <Link href="#" color="inherit" underline="none">
              <Typography variant="body2" mb={2}>Accessibility</Typography>
            </Link>
            <Link href="#" color="inherit" underline="none">
              <Typography variant="body2" mb={2}>About Us</Typography>
            </Link>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'left', marginTop: '5px'}}>
          <Typography variant="body2" sx={{ fontSize: '13px', color: '#E09EC7'}}>
            &copy; 2024 MiTiara
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 