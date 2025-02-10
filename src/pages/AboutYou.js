import React from "react";
import {Box, Card, CardContent, TextField, Button, Typography, LinearProgress, Checkbox, FormControlLabel, IconButton} from '@mui/material';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const AboutYou = () =>{
    const navigate = useNavigate();

    return(
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh',
            backgroundColor:'#f4f4f4'}}>
                <Card sx={{maxWidth: 600, padding:2, borderRadius: 7, boxShadow:10, height: '90vh',
                    '@media (max-width:600px)': {padding:2}}}>

                    <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', margin: '10px'}}>
                        <IconButton sx={{color: "#C13E8F", transition: "box-shadow 0.3s ease, transform 0.3s ease", "&:hover": {boxShadow: "0 0 0 10px rgba(193, 62, 143, 0.2)", transform: "scale(1)" }}}
                            onClick={() => navigate("/signup/password")}>
                            <ArrowBackIcon/>
                        </IconButton>

                        {/* <Box sx={{width:'100%'}}>
                            <LinearProgress variant="determinate" value={100} sx={{height:4, width: '60%', borderRadius:4, backgroundColor:'rgba(147, 47, 109, 0.6)', '& .MuiLinearProgress-bar':{backgroundColor: "transparent"}, 
                            "&::before":{content:'""', position: "absolute", top:0, right:0, height:"100%", width:"70%", backgroundColor:"#932F6D", borderRadius:"0 4px 4px 0"}}}/>
                        </Box> */}
                    </Box>

                    <CardContent sx={{textAlign:'center', marginBottom:'10px'}}>
                        <Typography fontSize={'24px'} fontWeight="bold" gutterBottom>About You</Typography>
                    </CardContent>

                    <Box sx={{marginBottom: 2,  paddingLeft:2, paddingRight:2}}>
                        <Box sx={{display:'flex', gap:2, marginBottom:2}}>
                            <TextField fullWidth label = {<span>Full name</span>} variant = "outlined"
                            sx={{'& label.Mui-focused': {color: '#591C42'}, '& .MuiOutlinedInput-root': {
                                    '& fieldset': {borderColor: '#591C42', borderWidth:2, borderRadius:'12px'},
                                    '&:hover fieldset': {borderColor: '#E09EC7'},
                                    '&.Mui-focused fieldset': {borderColor: '#932F6D'}}
                                }}/>
    
                            <TextField fullWidth label = {<span>Email address<span style={{color:'red'}}>*</span></span>} variant = "outlined"
                                sx={{'& label.Mui-focused': {color: '#591C42'}, '& .MuiOutlinedInput-root': {
                                    '& fieldset': {borderColor: '#591C42', borderWidth:2, borderRadius:'12px'},
                                    '&:hover fieldset': {borderColor: '#E09EC7'},
                                    '&.Mui-focused fieldset': {borderColor: '#932F6D'}}
                                }}/>
                        </Box>

                        <TextField fullWidth label= {<span>Phone Number<span style={{color:'red'}}>*</span></span>} variant="outlined"
                            sx={{marginBottom:2, '& label.Mui-focused': {color: '#591C42'}, '& .MuiOutlinedInput-root': {
                                    '& fieldset': {borderColor: '#591C42', borderWidth:2, borderRadius:'12px'},
                                    '&:hover fieldset': {borderColor: '#E09EC7'},
                                    '&.Mui-focused fieldset': {borderColor: '#932F6D'}}
                            }}
                        />

                        <TextField fullWidth label={<span>Username<span style={{color:'red'}}>*</span></span>} variant="outlined"
                            sx={{marginBottom:2, '& label.Mui-focused': {color: '#591C42'}, '& .MuiOutlinedInput-root': {
                                    '& fieldset': {borderColor: '#591C42', borderWidth:2, borderRadius:'12px'},
                                    '&:hover fieldset': {borderColor: '#E09EC7'},
                                    '&.Mui-focused fieldset': {borderColor: '#932F6D'}}
                            }}
                        />

                        <TextField fullWidth label={<span>Bio<span style={{color:'red'}}>*</span></span>} variant="outlined" multiline rows={3}
                            sx={{marginBottom:2, '& label.Mui-focused': {color: '#591C42'}, '& .MuiOutlinedInput-root': {
                                    '& fieldset': {borderColor: '#591C42', borderWidth:2, borderRadius:'12px'},
                                    '&:hover fieldset': {borderColor: '#E09EC7'},
                                    '&.Mui-focused fieldset': {borderColor: '#932F6D'}}
                            }}
                        />

                        <Box sx={{display:'flex', justifyContent:'flex-end', marginTop:'10px'}}>
                            <Button variant="contained" endIcon= {<ArrowForwardIcon/>} sx={{backgroundColor:'#932F6D', borderRadius:2, '&:hover':{backgroundColor: '#591C42'}}}
                            onClick={() => navigate("/signup/location")}>
                                Next
                            </Button>
                        </Box>
                     </Box>
                </Card>
            </Box>
    );
};
export default AboutYou;