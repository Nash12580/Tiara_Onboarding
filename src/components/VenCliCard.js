import React from 'react';
import { Box, Card, CardContent, Button, Typography, CardActionArea } from '@mui/material';
import vendorImage from '../vendor.png';
import customerImage from '../customer.png';
import { useNavigate } from 'react-router-dom';
const VenCliCard = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{display: 'flex', justifyContent: 'right', alignItems: 'center', width: '600px', height: '100vh', padding: 4}}>
            <Card sx={{width: '500px', height: '350px', borderRadius: 7, boxShadow: 10, display: 'flex', flexDirection: 'column',
                justifyContent: 'center', padding: 4}}>
                <CardContent sx={{textAlign: 'center', width: '100%', alignSelf: 'center'}}>
                    <Typography sx={{ color: '#443d44', fontSize: '35px' }}>
                        Start Planning Your Dream Events!
                    </Typography>
                    <Box sx={{display: 'flex', justifyContent: 'space-around',alignItems: 'center'}}>
                        <CardActionArea onClick={() => navigate("/signup/email")} sx={{ borderRadius: 7, width: '200px', height: '150px'}}>
                            <Card
                                sx={{backgroundColor: '#f8f7f8', borderRadius: 7, textAlign: 'center', padding: 1}}>
                                <CardContent>
                                    <img src={vendorImage} alt="Vendor" />
                                    <Typography>I am a Vendor</Typography>
                                </CardContent>
                            </Card>
                        </CardActionArea>

                        <CardActionArea onClick={() => navigate("/")} to="/" sx={{ borderRadius: 7, width: '200px', height: '150px' }}>
                            <Card sx={{backgroundColor: '#f8f7f8', borderRadius:7, textAlign: 'center', height: '150px'}}>
                                <CardContent sx={{mt: 2}}>
                                    <img src={customerImage} alt="Customer" />
                                    <Typography>I am a Customer</Typography>
                                </CardContent>
                            </Card>
                        </CardActionArea>
                    </Box>
                    <Box
                        sx={{display: 'flex', justifyContent: 'flex-end', mt: 4}}>
                        <Button variant="outlined" sx={{textTransform: 'none', borderRadius: '10px', borderColor: '#e19dc6', color: '#a44a81',}}>
                            Cancel
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default VenCliCard;
