import React from "react";
import { Box, Card, CardContent, Typography, TextField, Button, Grid, IconButton} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const ProductServices = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{display: "flex", justifyContent:"center", alignItems:"center", minHeight:"100vh", 
            backgroundColor:"#f4f4f4", padding:2}}>
            <Card sx={{maxWidth: 900, width: "100%", padding: 3, borderRadius: 4, boxShadow: 4, backgroundColor: "#FFF"}}>
                <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', mb:2}}>
                            <IconButton sx={{color: "#C13E8F",  "&:hover": {boxShadow: "0 0 0 5px rgba(193, 62, 143, 0.2)", transform: "scale(1.05)" }}}
                                onClick={() => navigate("/signup/business-hrs")}>
                                <ArrowBackIcon/>
                            </IconButton>
                </Box>

                <CardContent sx={{textAlign:'center', mb:2}}>
                    <Typography fontSize={'24px'} fontWeight="bold">Products & Services</Typography>
                    <Typography fontSize={'14px'}>List out all your products and services for customers to see!</Typography>
                </CardContent>

                <Grid container spacing={2} sx={{mb:2, borderBottom: "2px solid #D3D3D3", pb:1}}>
                    <Grid item xs={4}>
                        <Typography variant = "subtitle2" fontWeight={"bold"} align="center">
                            Product Name
                        </Typography>
                            </Grid>
                    
                     <Grid item xs={4}>
                         <Typography variant = "subtitle2" fontWeight={"bold"} align="center">
                            Minimum-Maximum Booking Hours
                        </Typography>
                    </Grid>

                    <Grid item xs={4}>
                        <Typography variant = "subtitle2" fontWeight={"bold"} align="center">
                            Price/Rate
                        </Typography>
                    </Grid>
                </Grid>

                {[...Array(5)].map((_, index) => (
                    <Grid container spacing={2} alignItems="center" sx={{mb:2}} key={index}>
                        <Grid item xs={4}>
                            <TextField placeholder="All Night DJ Set" variant="outlined" size="small" fullWidth/>
                        </Grid>

                         <Grid item xs={4}>
                            <TextField placeholder="3-7 hours" variant="outlined" size="small" fullWidth/>
                        </Grid>

                        <Grid item xs={4}>
                            <TextField placeholder="$200" variant="outlined" size="small" fullWidth/>
                        </Grid>
                    </Grid>
                ))}

                <Box sx={{display:"flex", justifyContent:"space-between", mt:4}}>
                    <Button variant = "outlined" startIcon={<AddIcon/>} sx={{color:"#932F6D", "&hover":{backgroundColor: "rgba(147, 47, 109, 0.1)", borderColor: "#932F6D"}}}>
                        Add
                    </Button>

                    <Button variant="contained" endIcon={<ArrowForwardIcon/>} sx={{backgroundColor:"#932F6D", color:"#FFF", "&hover":{backgroundColor: "#591C42"}}}
                        onClick={() => navigate("/ErrorPage")}>
                        Next
                    </Button>
                </Box>
            </Card>
        </Box>
    )
}

export default ProductServices;