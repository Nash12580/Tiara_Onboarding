import React from "react";
import {Box, Card, CardContent, TextField, Button, Typography, LinearProgress, Checkbox, FormControlLabel, IconButton} from '@mui/material';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {useNavigate} from 'react-router-dom';

const CreatePassword = () =>{
    const navigate = useNavigate();

    return(
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center',
            height: '100vh', backgroundColor: '#f4f4f4', position: 'relative'}}>
            <Card sx={{width: 600, height: 400, padding: 8, borderRadius: 7, boxShadow: 10, display:'flex', flexDirection:'column', justifyContent: 'center', position: 'relative'}}>
                <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'30px'}}>
                    <IconButton sx={{color: "#C13E8F", transition: "box-shadow 0.3s ease, transform 0.3s ease", "&:hover": {boxShadow: "0 0 0 10px rgba(193, 62, 143, 0.2)", transform: "scale(1)" }}}
                        onClick={() => navigate("/signup/email")}>
                        <ArrowBackIcon sx={{color:'#C13E8F', cursor:'pointer'}}/>
                    </IconButton>
                    <Box sx={{width: '200px', marginRight:'200px'}}>
                        <LinearProgress variant="determinate" value={30} sx={{height:4, borderRadius: 4, backgroundColor:'rgba(147, 47, 109, 0.6)', '& .MuiLinearProgress-bar':{backgroundColor: '#932F6D'}}}/>
                    </Box>
                </Box>

                <CardContent sx={{textAlign:'center', width:'100%', alignSelf:'center'}}>
                    <Typography fontSize={'34px'} fontWeight="bold" gutterBottom>Create Password</Typography>
                </CardContent>

                <Box sx={{marginBottom: 2}}>
                    <TextField fullWidth label = "Password" type = "password" variant = "outlined"
                        sx={{marginBottom: 2,'& label.Mui-focused': {color: '#932F6D'}, '& .MuiOutlinedInput-root': {
                                '& fieldset': {borderColor: '#932F6D', borderRadius:"12px", borderWidth:2},
                                '&:hover fieldset': {borderColor: '#E09EC7'},
                                '&.Mui-focused fieldset': {borderColor: '#932F6D'}}
                            }}/>
                    <TextField fullWidth label = "Confirm Password" type="password" variant = "outlined"
                        sx={{marginBottom: 2,  '& label.Mui-focused': {color: '#932F6D',}, '& .MuiOutlinedInput-root': {
                            '& fieldset': {borderColor: '#932F6D', borderRadius:"12px", borderWidth:2},
                            '&:hover fieldset': {borderColor: '#E09EC7'},
                            '&.Mui-focused fieldset': {borderColor: '#932F6D'}}
                        }}/>
                    
                    <Button fullWidth variant="contained" color="primary" sx={{marginTop:2, borderRadius:2, textAlign:'center', display:'block', backgroundColor: '#932F6D', '&:hover':{backgroundColor: '#591C42'}}}
                        onClick={() => navigate("/signup/about")}>
                        Sign In
                    </Button>
                </Box>

                <FormControlLabel control={<Checkbox sx={{ color: '#932F6D', '&.Mui-checked':{color: '#932F6D'}}} />} label="I accept the Terms and Conditions" sx={{ marginBottom: 3 }}/>
            </Card>
        </Box>
    )
};
export default CreatePassword;