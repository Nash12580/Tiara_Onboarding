import React, { useState } from "react";
import {Box, Card, CardContent, TextField, Button, Typography, LinearProgress, Checkbox, FormControlLabel, IconButton} from '@mui/material';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {useNavigate} from "react-router-dom";

const LocationCard = () =>{
    const navigate = useNavigate();

    const[address, setAddress] = useState('');
    const[address2, setAddress2] = useState('');
    const[city, setCity] = useState('');
    const[state, setState] = useState('');
    const[zip, setZip] = useState('');

    const[addressError, setAddressError] = useState(false);
    const[cityError, setCityError] = useState(false);
    const[stateError, setStateError] = useState(false);
    const[zipError, setZipError] = useState(false);

    const validateZip = (zipCode) => /^\d{5}$/.test(zipCode);
    const isFormValid = address && city && state && validateZip(zip);

    const handleNext = () => {
        setAddressError(address === '');
        setCityError(city === '');
        setStateError(state === '');
        setZipError(!validateZip(zip));
        if (isFormValid) {
            navigate("/signup/business-hrs");
        }
    }

    return(
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh',
            backgroundColor:'#f4f4f4'}}>
                <Card sx={{maxWidth:600, padding:2, borderRadius: 7, boxShadow:10, height:'600px'}}>
                    <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', marginLeft: '10px', marginTop: '5px'}}>
                        <IconButton sx={{color: "#C13E8F", transition: "box-shadow 0.3s ease, transform 0.3s ease", "&:hover": {boxShadow: "0 0 0 10px rgba(193, 62, 143, 0.2)", transform: "scale(1)" }}}
                            onClick={() => navigate("/signup/about")}>
                            <ArrowBackIcon/>
                        </IconButton>
                    </Box>

                    <CardContent sx={{textAlign:'center'}}>
                        <Typography fontSize={'24px'} fontWeight="bold" gutterBottom>Business Location</Typography>
                    </CardContent>

                    <Box sx={{marginBottom: 2,  paddingLeft:2, paddingRight:2}}>
                        <TextField fullWidth label= {<span>Address<span style={{color:'red'}}>*</span></span>} variant="outlined" value ={address}
                            onChange={(e) => setAddress(e.target.value)} error={addressError} helperText={addressError ? "Address is required." : ''}
                            sx={{marginBottom:2, '& label.Mui-focused': {color: '#591C42'}, '& .MuiOutlinedInput-root': {
                                    '& fieldset': {borderColor: '#591C42', borderWidth:2, borderRadius:'12px'},
                                    '&:hover fieldset': {borderColor: '#E09EC7'},
                                    '&.Mui-focused fieldset': {borderColor: '#932F6D'}}
                            }}
                        />

                        <TextField fullWidth label={<span>Address 2</span>} variant="outlined" value={address2} onChange={(e) => setAddress2(e.target.value)}
                            sx={{marginBottom:2, '& label.Mui-focused': {color: '#591C42'}, '& .MuiOutlinedInput-root': {
                                    '& fieldset': {borderColor: '#591C42', borderWidth:2, borderRadius:'12px'},
                                    '&:hover fieldset': {borderColor: '#E09EC7'},
                                    '&.Mui-focused fieldset': {borderColor: '#932F6D'}}
                            }}
                        />

                        <TextField fullWidth label={<span>City<span style={{color:'red'}}>*</span></span>} variant="outlined" value={city} 
                            onChange={(e) => setCity(e.target.value)} error={cityError} helperText={cityError ? "City is required." : ""}
                            sx={{marginBottom:2, '& label.Mui-focused': {color: '#591C42'}, '& .MuiOutlinedInput-root': {
                                    '& fieldset': {borderColor: '#591C42', borderWidth:2, borderRadius:'12px'},
                                    '&:hover fieldset': {borderColor: '#E09EC7'},
                                    '&.Mui-focused fieldset': {borderColor: '#932F6D'}}
                            }}
                        />

                        <TextField fullWidth label={<span>State<span style={{color:'red'}}>*</span></span>} variant="outlined" value={state}
                            onChange={(e) => setState(e.target.value)} error={stateError} helperText={stateError ? "State is required." : ""}
                            sx={{marginBottom:2, '& label.Mui-focused': {color: '#591C42'}, '& .MuiOutlinedInput-root': {
                                    '& fieldset': {borderColor: '#591C42', borderWidth:2, borderRadius:'12px'},
                                    '&:hover fieldset': {borderColor: '#E09EC7'},
                                    '&.Mui-focused fieldset': {borderColor: '#932F6D'}}
                            }}
                        />

                        <TextField fullWidth label={<span>Zip<span style={{color:'red'}}>*</span></span>} variant="outlined" value={zip}
                            onChange={(e) => setZip(e.target.value)} error={zipError} helperText={zipError ? "Enter a valid 5-digit zip code." : ""}
                            sx={{marginBottom:2, '& label.Mui-focused': {color: '#591C42'}, '& .MuiOutlinedInput-root': {
                                    '& fieldset': {borderColor: '#591C42', borderWidth:2, borderRadius:'12px'},
                                    '&:hover fieldset': {borderColor: '#E09EC7'},
                                    '&.Mui-focused fieldset': {borderColor: '#932F6D'}}
                            }}
                        />

                        <Box sx={{display:'flex', justifyContent:'flex-end', marginTop:'10px'}}>
                            <Button variant="contained" endIcon= {<ArrowForwardIcon/>} sx={{backgroundColor:'#932F6D', borderRadius:2, '&:hover':{backgroundColor: '#591C42'}}}
                            disabled={!isFormValid} onClick={handleNext}>
                                Next
                            </Button>
                        </Box>
                     </Box>
                </Card>
            </Box>
    );
};

export default LocationCard;