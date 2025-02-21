import React, { useState } from 'react';
import {Grid, Box, TextField, IconButton, Typography, Stack} from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const DaytimeSet = ({day}) => {
    const [time, setTime] = useState({ start: "07:00 AM", end: "7:00 PM"});
    const handleTimeChange = (field, increment) => {
        let timeString = time[field];
        if(!timeString || !timeString.includes(":")) return;
        let [timePart, period] = timeString.split(" ");
        let[hours, minutes] = timePart.split(":").map(Number);

        if(increment){
            minutes += 15;
            if(minutes >= 60){
                minutes = 0;
                hours += 1;
            }
        } else{
            minutes -= 15;
            if(minutes < 0){
                minutes = 45;
                hours -= 1;
            }
        }
        
        if (hours === 12 && minutes === 0){
            period = period === "AM" ? "PM" : "AM";
        }else if (hours === 0){
            hours = 12;
        }else if (hours > 12){
            hours -= 12;
            period = period === "AM" ? "PM" : "AM";
        }
        const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")} ${period}`;
        setTime((prev) => ({ ...prev, [field]: formattedTime }));
    };

    return(
        <Grid container spacing={2} alignItems="center" sx={{mb:2, px: 1}}>
            <Grid item xs={3} sx = {{display: "flex", justifyContent: "center"}}>
                <Typography variant="body1">
                    {day}
                </Typography>
            </Grid>

            <Grid item xs={4} sx={{display : "flex", alignItems: "center", justifyContent: "center"}}>
                <TextField value ={time.start} inputProps={{readOnly: true}} sx={{"& .MuiOutlinedInput-root": {borderRadius: 2},
                    width: "150px", textAlign:"center"}}/>
                    <Stack direction="column" sx={{ml:1}}>
                        <IconButton onClick={() => handleTimeChange("start", false)} size="small">
                            <ArrowDropUpIcon/>
                        </IconButton>
                        <IconButton onClick={() => handleTimeChange("start", true)} size="small">
                            <ArrowDropDownIcon/>
                        </IconButton>
                    </Stack>
            </Grid>

            <Grid item xs={4} sx={{display : "flex", alignItems: "center", justifyContent: "center"}}>
            <TextField value ={time.end} inputProps={{readOnly: true}} sx={{"& .MuiOutlinedInput-root": {borderRadius: 2},
                    width: "100px", textAlign:"center"}}/>
                    <Stack direction="column" sx={{ml:1}}>
                        <IconButton onClick={() => handleTimeChange("end", false)} size="small">
                            <ArrowDropUpIcon/>
                        </IconButton>
                        <IconButton onClick={() => handleTimeChange("end", true)} size="small">
                                <ArrowDropDownIcon/>
                        </IconButton>
                    </Stack>
            </Grid>
        </Grid>
    )
};

export default DaytimeSet;