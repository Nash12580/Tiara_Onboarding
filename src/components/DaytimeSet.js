import React, { useState } from 'react';
import {Grid, Box, TextField, IconButton, Typography} from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const DaytimeSet = ({day}) => {
    const [time, setTime] = useState({ start: "07:00 AM", end: "5:00 PM"});
    const handleTimeChange = (field, increment) => {
        let[timePart, period] = time[field].split(" ");
        let[hours, minutes] = timePart.split(":").map(Number);

        if(increment){
            minutes += 15;
            if(minutes >= 60){
                minutes = 0;
                hours += 1;
                if(hours == 12) period = period === "AM" ? "PM" : "AM";
                if(hours > 12) hours = 1;
            }
        } else{
            minutes -= 15;
            if(minutes < 0){
                minutes = 45;
                hours -= 1;
                if(hours === 0){
                    hours = 12;
                    period = period === "AM" ? "PM" : "AM";
                }
            }
        }
        
        const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}${period}`;
        setTime((prev) => ({...prev, [field]: formattedTime}));
    };

    return(
        <Grid container spacing={2} alignItems="center" sx={{mb:2, px: 1}}>
            <Grid item xs={3} sx = {{display: "flex", alignItems:"center"}}>
                <Typography variant="body1" sx={{display:"flex", alignItems:"center"}}>
                    {day}
                </Typography>
            </Grid>

            <Grid item xs={4}>
                <Box sx={{display:"flex", alignItems:"center"}}>
                    <IconButton onClick={() => handleTimeChange("start", false)}>
                        <ArrowDropUpIcon/>
                    </IconButton>
                    <TextField value={time.start} inputProps={{readOnly: true}} 
                        sx={{"& .MuiOutlinedInput-root": {borderRadius: 2}, width: "110px", textAlign: "center"}}/>
                        <IconButton onClick={() => handleTimeChange("start", true)}>
                            <ArrowDropDownIcon/>
                        </IconButton>
                </Box>
            </Grid>

            <Grid item xs={4}>
                <Box sx={{display:"flex", alignItems:"center"}}>
                    <IconButton onClick={() => handleTimeChange("end", false)}>
                        <ArrowDropUpIcon/>
                    </IconButton>
                    <TextField value={time.end} inputProps={{readOnly: true}} 
                        sx={{"& .MuiOutlinedInput-root": {boderRadius: 2}, width: "110px", textAlign: "center"}}/>
                        <IconButton onClick={() => handleTimeChange("end", true)}>
                            <ArrowDropDownIcon/>
                        </IconButton>
                </Box>
            </Grid>
        </Grid>
    )
};

export default DaytimeSet;