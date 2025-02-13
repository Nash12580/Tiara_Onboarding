import React, { useState } from "react";
import {Box, Card, CardContent, TextField, Button, Typography, LinearProgress, Checkbox, FormControlLabel, IconButton} from '@mui/material';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {useNavigate} from 'react-router-dom';

const CreatePassword = () =>{
    const navigate = useNavigate();
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const validatePassword = (pwd) => {
        const strongPwdRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-za-z\d@$!%*?&]{8,}$/;
        return strongPwdRegex.test(pwd);
    };

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        setPasswordError(validatePassword(newPassword)? '' : 'Password must be at least 8 characters long and include a number.');
    };

    const handleConfirmPasswordChange = (event) => {
        const newConfirmPassword = event.target.value;
        setConfirmPassword(newConfirmPassword);
        setConfirmPasswordError(newConfirmPassword === password? '' : 'Passwords do not match.');
    };

    const isFormValid = password && confirmPassword && password === confirmPassword && isChecked && validatePassword(password);

    return(
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center',
            height: '100vh', backgroundColor: '#f4f4f4', position: 'relative'}}>
            <Card sx={{width: 600, height: 400, padding: 8, borderRadius: 7, boxShadow: 10, display:'flex', flexDirection:'column', justifyContent: 'center', position: 'relative'}}>
                <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'30px'}}>
                    <IconButton sx={{color: "#C13E8F", transition: "box-shadow 0.3s ease, transform 0.3s ease", "&:hover": {boxShadow: "0 0 0 10px rgba(193, 62, 143, 0.2)", transform: "scale(1)" }}}
                        onClick={() => navigate("/signup/email")}>
                        <ArrowBackIcon sx={{color:'#C13E8F', cursor:'pointer'}}/>
                    </IconButton>
                </Box>

                <CardContent sx={{textAlign:'center', width:'100%', alignSelf:'center'}}>
                    <Typography fontSize={'34px'} fontWeight="bold" gutterBottom>Create Password</Typography>
                </CardContent>

                <Box sx={{marginBottom: 2}}>
                    <TextField fullWidth label = "Password" type = "password" variant = "outlined" value={password} onChange={handlePasswordChange}
                        error={!!passwordError} helperText={passwordError}
                        sx={{marginBottom: 2,'& label.Mui-focused': {color: '#932F6D'}, '& .MuiOutlinedInput-root': {
                                '& fieldset': {borderColor: '#932F6D', borderRadius:"12px", borderWidth:2},
                                '&:hover fieldset': {borderColor: '#E09EC7'},
                                '&.Mui-focused fieldset': {borderColor: '#932F6D'}}
                            }}/>
                    <TextField fullWidth label = "Confirm Password" type="password" variant = "outlined" value={confirmPassword}
                        onChange={handleConfirmPasswordChange} error={!!confirmPasswordError} helperText={confirmPasswordError}
                        sx={{marginBottom: 2,  '& label.Mui-focused': {color: '#932F6D',}, '& .MuiOutlinedInput-root': {
                            '& fieldset': {borderColor: '#932F6D', borderRadius:"12px", borderWidth:2},
                            '&:hover fieldset': {borderColor: '#E09EC7'},
                            '&.Mui-focused fieldset': {borderColor: '#932F6D'}}
                        }}/>

                    <FormControlLabel control={<Checkbox checked={isChecked} 
                        onChange={(e) => setIsChecked(e.target.checked)} sx={{ color: '#932F6D', '&.Mui-checked':{color: '#932F6D'}}} />} label="I accept the Terms and Conditions" sx={{ marginBottom: 2}}/>
                    
                    <Button fullWidth variant="contained" color="primary" sx={{marginTop:2, borderRadius:2, textAlign:'center', display:'block', backgroundColor: '#932F6D', '&:hover':{backgroundColor: '#591C42'}}}
                        disabled={!isFormValid} onClick={() => navigate("/signup/about")}>
                        Sign In
                    </Button>
                </Box>

                
            </Card>
        </Box>
    )
};
export default CreatePassword;