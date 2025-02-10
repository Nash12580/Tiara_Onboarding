import React, {useState} from "react";
import {Box, Card, CardContent, Button, Typography, LinearProgress, Checkbox, IconButton, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio,} from '@mui/material';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const BookingPreference = () =>{

    const [eventSize, setEventSize] = useState({
        small: false,
        medium: false,
        large: false,
        extraLarge: false,
    });
    
    const handleCheckboxChange = (event) => {
        setEventSize({
          ...eventSize,
          [event.target.name]: event.target.checked,
        });
    };

    return(
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'100vh',
                backgroundColor:'#f4f4f4', padding: 2, overflowY:'auto'}}>
                <Card sx={{width:600, padding:4, borderRadius: 7, boxShadow:10}}>
                    <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'20px'}}>
                        <IconButton sx={{color: "#C13E8F", transition: "box-shadow 0.3s ease, transform 0.3s ease", "&:hover": {boxShadow: "0 0 0 10px rgba(193, 62, 143, 0.2)", transform: "scale(1)" }}}>
                            <ArrowBackIcon/>
                        </IconButton>

                        <Box sx={{width:'200px', marginRight:'200px'}}>
                        <LinearProgress variant="determinate" value={100} sx={{height:4, borderRadius:4, backgroundColor:'rgba(147, 47, 109, 0.6)', '& .MuiLinearProgress-bar':{backgroundColor: "transparent"}, 
                            "&::before":{content:'""', position: "absolute", top:0, right:50, height:"100%", width:"50%", backgroundColor:"#932F6D", borderRadius:"0 4px 4px 0"}}}/>
                        </Box>
                    </Box>

                    <CardContent sx={{textAlign:'center', marginBottom:'20px'}}>
                        <Typography fontSize={'24px'} fontWeight="bold" gutterBottom>Booking Preference</Typography>
                    </CardContent>

                    <FormControl component="fieldset" margin="normal">
                        <FormLabel component="legend" sx={{fontSize:"24px", fontWeight:"bold", marginBottom:"8px", color:"#282028 !important"}}>How Far Are You Willing to Travel?</FormLabel>
                        <RadioGroup name="travel-distance">
                            <FormControlLabel value="0-15" control={<Radio sx={{color:"#932F6D", '&.Mui-checked':{color:"#932F6D"}}}/>} label="0-15 miles"/>
                            <FormControlLabel value="15-30" control={<Radio sx={{color:"#932F6D", '&.Mui-checked':{color:"#932F6D"}}}/>} label="15-30 miles"/>
                            <FormControlLabel value="30-45" control={<Radio sx={{color:"#932F6D", '&.Mui-checked':{color:"#932F6D"}}}/>} label="30-45 miles"/>
                            <FormControlLabel value="45-60" control={<Radio sx={{color:"#932F6D", '&.Mui-checked':{color:"#932F6D"}}}/>} label="45-60 miles"/>
                            <FormControlLabel value="60+" control={<Radio sx={{color:"#932F6D", '&.Mui-checked':{color:"#932F6D"}}}/>} label="60+ miles"/>
                        </RadioGroup>
                    </FormControl>

                    <FormControl component="fieldset" margin="normal">
                        <FormLabel component="legend" sx={{fontSize:"24px", fontWeight:"bold", marginBottom:"8px", color:"#282028 !important"}}>Booking Timing?</FormLabel>
                        <RadioGroup name="booking-timing">
                            <FormControlLabel value="1-week" control={<Radio sx={{color:"#932F6D", '&.Mui-checked':{color:"#932F6D"}}}/>} label="1 week"/>
                            <FormControlLabel value="2-weeks" control={<Radio sx={{color:"#932F6D", '&.Mui-checked':{color:"#932F6D"}}}/>} label="2 weeks"/>
                            <FormControlLabel value="1-month" control={<Radio sx={{color:"#932F6D", '&.Mui-checked':{color:"#932F6D"}}}/>} label="1 month"/>
                            <FormControlLabel value="3-months" control={<Radio sx={{color:"#932F6D", '&.Mui-checked':{color:"#932F6D"}}}/>} label="3 months"/>
                        </RadioGroup>
                        <FormControlLabel control={<Checkbox sx={{color:"#932F6D", '&.Mui-checked':{color:"#932F6D"}}}/>} label ="Accept Last Minute Bookings"/>
                    </FormControl> 

                    <FormControl component="fieldset" margin="normal">
                        <FormLabel component="legend" sx={{fontSize:"24px", fontWeight:"bold", marginBottom:"8px", color:"#282028 !important"}}>What Event Size Do You Serve?</FormLabel>
                        <FormControlLabel control={<Checkbox sx={{color:"#932F6D", '&.Mui-checked':{color:"#932F6D"}}} checked ={eventSize.small} onChange={handleCheckboxChange} name= "small"/>} label="Small(1-50 guests)"
                        sx={{ marginLeft: 0, "& .MuiFormControlLabel-label": { marginLeft: 1 } }}/>
                        <FormControlLabel control={<Checkbox sx={{color:"#932F6D", '&.Mui-checked':{color:"#932F6D"}}} checked ={eventSize.medium} onChange={handleCheckboxChange} name= "medium"/>} label="Medium(51-150 guests)"
                        sx={{ marginLeft: 0, "& .MuiFormControlLabel-label": { marginLeft: 1 } }}/>
                        <FormControlLabel control={<Checkbox sx={{color:"#932F6D", '&.Mui-checked':{color:"#932F6D"}}} checked ={eventSize.large} onChange={handleCheckboxChange} name= "large"/>} label="Large(151-300 guests)"
                        sx={{ marginLeft: 0, "& .MuiFormControlLabel-label": { marginLeft: 1 } }}/>
                        <FormControlLabel control={<Checkbox sx={{color:"#932F6D", '&.Mui-checked':{color:"#932F6D"}}} checked ={eventSize.extraLarge} onChange={handleCheckboxChange} name= "extraLarge"/>} label="Extra Large (301+ guests)"
                        sx={{ marginLeft: 0, "& .MuiFormControlLabel-label": { marginLeft: 1 } }}/>
                    </FormControl>

                
                    <Box sx={{display:'flex', justifyContent:'flex-end', marginTop:'20px'}}>
                        <Button variant="contained" endIcon= {<ArrowForwardIcon/>} sx={{backgroundColor:'#932F6D', borderRadius:2, '&:hover':{backgroundColor: '#591C42'}}}>
                            Next
                        </Button>
                    </Box>
                </Card>
            </Box>
    )
};

export default BookingPreference