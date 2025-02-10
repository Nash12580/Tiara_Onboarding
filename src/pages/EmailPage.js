import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Card, CardContent, TextField, Button, Typography, Link, LinearProgress} from '@mui/material';
import {styled} from '@mui/system';
import LanguageIcon from '@mui/icons-material/Language';


const LanguageSelector = styled(Box)(({theme}) => ({
    position: 'absolute',
    bottom: theme.spacing(8),
    right: theme.spacing(9),
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    color: '#932F6D',
}));

const EmailPage = () =>{
    const navigate = useNavigate();

    return(
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center',
            height: '100vh', backgroundColor: '#f4f4f4', position: 'relative'}}>
                <Card sx={{width: 600, height: 400, padding: 8, borderRadius: 7, boxShadow: 10, display:'flex', flexDirection:'column', justifyContent: 'center', position: 'relative'}}>
                    <Box sx={{width: '200px', alignSelf: 'center', marginBottom: '30px'}}>
                        <LinearProgress variant="determinate" value={30} sx={{height:4, borderRadius: 4, backgroundColor:'rgba(147, 47, 109, 0.6)', '& .MuiLinearProgress-bar':{backgroundColor: '#932F6D'}}}/>
                    </Box>
                    <CardContent sx={{textAlign:'center', width:'100%', alignSelf:'center'}}>
                        <Typography fontSize={'34px'} fontWeight="bold" gutterBottom>Continue with email</Typography>
                        <TextField fullWidth label="Email address" variant="outlined" margin="normal" sx={{'& .MuiOutlinedInput-root': {'& fieldset':{borderColor: '#591C42', borderWidth:2, borderRadius:"12px"}, 
                            '&:hover fieldset':{borderColor: '#E09EC7'}, 
                            '&.Mui-focused fieldset':{borderColor: '#E09EC7'},}, 
                            '& .MuiInputLabel-root':{color:'#591C42'}, 
                            '& .MuiInputLabel-root.Mui-focused':{color: '#E09EC7'}}}/>
                        <Typography variant="body2" color="textSecondary" gutterBottom sx={{ textAlign: 'left', marginTop: 2 }}>
                            By continuing, you agree that we create an account for you (unless already created),
                            and accept our <Link href="#" color="#28202899">Terms and Conditions</Link> and <Link href="#" color="#28202899">Privacy Policy</Link>.
                        </Typography>
                        <Button width="100px" variant="contained" color="primary" sx={{marginTop:2, backgroundColor: '#932F6D', borderRadius: 2, textAlign:'left', display:'block', marginTop: 2, '&:hover': {
                                backgroundColor: '#591C42'}}} onClick={() => navigate("/signup/password")}>
                            Continue
                        </Button>
                    </CardContent>

                    <LanguageSelector>
                            <LanguageIcon sx={{marginRight: 1}}/>
                            <Typography variant ="body2" fontSize={'18px'}>
                                Language
                            </Typography>
                    </LanguageSelector>
                </Card>
        </Box>
    );
};

export default EmailPage;