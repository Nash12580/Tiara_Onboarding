import React from "react";
import { useNavigate } from "react-router-dom";
import {Box, Card, CardContent, TextField, Button, Typography, LinearProgress, Switch, IconButton, Grid} from '@mui/material';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DaytimeSet from "../components/DaytimeSet";
const BusinessHrs = () =>{
    const navigate = useNavigate();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];

    return(
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', backgroundColor:'#f4f4f4', padding: 2}}>
                <Card sx={{maxWidth:600, width: "100%", padding:3, borderRadius: 4, boxShadow:4, backgroundColor: "#FFF", margin:"auto"}}>
                    <Box sx={{display:'flex', justifyContent:'space-between', mb:2}}>
                        <IconButton sx={{color: "#C13E8F",  "&:hover": {boxShadow: "0 0 0 5px rgba(193, 62, 143, 0.2)", transform: "scale(1.05)" }}} 
                            onClick={() => navigate("/signup/location")}>
                            <ArrowBackIcon/>
                        </IconButton>                       
                    </Box>

                    <CardContent sx={{textAlign:'center', mb:2}}>
                        <Typography fontSize='24px' fontWeight='bold'>Business Hours</Typography>
                    </CardContent>

                    <Box>
                        <Grid container sx={{mb:2, borderBottom: "2px solid #D3d3d3"}}>
                            <Grid item xs={3}>
                                <Typography variant = "subtitle2" fontWeight={"bold"} align="center">
                                    Day
                                </Typography>
                            </Grid>
                                   
                            <Grid item xs={4}>
                                <Typography variant = "subtitle2" fontWeight={"bold"} align="center">
                                    Start Time
                                </Typography>
                            </Grid>

                            <Grid item xs={4}>
                                <Typography variant = "subtitle2" fontWeight={"bold"} align="center">
                                    End Time
                                </Typography>
                            </Grid>
                        </Grid>

                        {days.map((day) => (
                            <DaytimeSet key = {day} day={day}/>
                        ))} 
                        

                        <Box sx={{display:'flex', justifyContent:"flex-end", mt:4}}>
                            <Button variant="contained" endIcon= {<ArrowForwardIcon/>} sx={{backgroundColor:'#932F6D', borderRadius:2, paddingX:3, '&:hover':{backgroundColor: '#591C42'}}}
                                onClick={() => navigate("/signup/product-services")}>
                                Next
                            </Button>
                        </Box>
                    </Box>
                </Card>
            </Box>
    );
};
export default BusinessHrs;