import React, { useState } from "react";
import {Box, Card, CardContent, TextField, Button, Typography, LinearProgress, Checkbox, FormControlLabel, IconButton, useScrollTrigger} from '@mui/material';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const AboutYou = () =>{
    const navigate = useNavigate();

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');

    const [fullNameError, setFullNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [bioError, setBioError] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const validatePhone = (phone) => {
        const phoneRegex = /^\d{10,}$/;
        return phoneRegex.test(phone);
    }

    const isFormValid = fullName && validateEmail(email) && validatePhone(phone) && username && bio;
    const handleNext = () => {
        setFullNameError(fullName === '');
        setEmailError(!validateEmail(email));
        setPhoneError(!validatePhone(phone));
        setUsernameError(username === '');
        setBioError(bio === '');

        if (isFormValid){
            navigate("/signup/location");
        }
    }

    return(
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh',
            backgroundColor:'#f4f4f4'}}>
                <Card sx={{maxWidth: 600, padding:2, borderRadius: 7, boxShadow:10, height: '600px',
                    '@media (max-width:600px)': {padding:2}}}>

                    <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', margin: '10px'}}>
                        <IconButton sx={{color: "#C13E8F", transition: "box-shadow 0.3s ease, transform 0.3s ease", "&:hover": {boxShadow: "0 0 0 10px rgba(193, 62, 143, 0.2)", transform: "scale(1)" }}}
                            onClick={() => navigate("/signup/password")}>
                            <ArrowBackIcon/>
                        </IconButton>
                    </Box>

                    <CardContent sx={{textAlign:'center', marginBottom:'10px'}}>
                        <Typography fontSize={'24px'} fontWeight="bold" gutterBottom>About You</Typography>
                    </CardContent>

                    <Box sx={{marginBottom: 2,  paddingLeft:2, paddingRight:2}}>
                        <Box sx={{display:'flex', gap:2, marginBottom:2}}>
                            <TextField fullWidth label = {<span>Full name</span>} variant = "outlined" value={fullName} 
                            onChange={(e) => setFullName(e.target.value)} error={fullNameError} helperText={fullNameError ? "Full Name is required." : ""}
                            sx={{'& label.Mui-focused': {color: '#591C42'}, '& .MuiOutlinedInput-root': {
                                    '& fieldset': {borderColor: '#591C42', borderWidth:2, borderRadius:'12px'},
                                    '&:hover fieldset': {borderColor: '#E09EC7'},
                                    '&.Mui-focused fieldset': {borderColor: '#932F6D'}}
                                }}/>
    
                            <TextField fullWidth label = {<span>Email address<span style={{color:'red'}}>*</span></span>} variant = "outlined"
                                value={email} onChange={(e) => setEmail(e.target.value)} error={emailError} helperText={emailError ? "Enter a valid email address." : ""}
                                sx={{'& label.Mui-focused': {color: '#591C42'}, '& .MuiOutlinedInput-root': {
                                    '& fieldset': {borderColor: '#591C42', borderWidth:2, borderRadius:'12px'},
                                    '&:hover fieldset': {borderColor: '#E09EC7'},
                                    '&.Mui-focused fieldset': {borderColor: '#932F6D'}}
                                }}/>
                        </Box>

                        <TextField fullWidth label= {<span>Phone Number<span style={{color:'red'}}>*</span></span>} variant="outlined"
                            value={phone} onChange={(e) => setPhone(e.target.value)} error={phoneError} helperText={phoneError ? "Enter a valid phone number." : ""}
                            sx={{marginBottom:2, '& label.Mui-focused': {color: '#591C42'}, '& .MuiOutlinedInput-root': {
                                    '& fieldset': {borderColor: '#591C42', borderWidth:2, borderRadius:'12px'},
                                    '&:hover fieldset': {borderColor: '#E09EC7'},
                                    '&.Mui-focused fieldset': {borderColor: '#932F6D'}}
                            }}
                        />

                        <TextField fullWidth label={<span>Username<span style={{color:'red'}}>*</span></span>} variant="outlined"
                            value={username} onChange={(e) => setUsername(e.target.value)} error={usernameError} helperText={usernameError ? "Username is required." : ""}
                            sx={{marginBottom:2, '& label.Mui-focused': {color: '#591C42'}, '& .MuiOutlinedInput-root': {
                                    '& fieldset': {borderColor: '#591C42', borderWidth:2, borderRadius:'12px'},
                                    '&:hover fieldset': {borderColor: '#E09EC7'},
                                    '&.Mui-focused fieldset': {borderColor: '#932F6D'}}
                            }}
                        />

                        <TextField fullWidth label={<span>Bio<span style={{color:'red'}}>*</span></span>} variant="outlined" multiline rows={3}
                            value={bio} onChange={(e) => setBio(e.target.value)} error={bioError} helperText={bioError ? "Bio is required." : ""}
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
export default AboutYou;