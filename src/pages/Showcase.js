// import React from "react";
// import { Box, Card, CardContent, Typography, TextField, Button, Grid, IconButton} from "@mui/material";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import UploadFileIcon from "@mui/icons-material/UploadFile";
// import DeleteIcon from "@mui/icons-material/Delete";

// const Showcase = () =>{
//     const [files, setFiles] = useState([]);

//     const handleFileUpload = (e) => {
//         const UploadFiles = Array.from(e.target.files).map((file) => ({
//             name: file.name,
//             size: file.size,
//             status: "Uploading",
//             progress: 50,
//         }));
        
//         setFiles([...files, ...uploadedFiles]);
//     };
    
//     const handleRemoveFile = (filename) => {
//         setFiles(files.filter((file) => file.name !== fileName));
//     };

//     return(
//         <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", minHeight: "100vh", backgroundColor:"#f4f4f4", padding:2}}>
//             <Card sx={{maxWidth: 800, width: "100%", padding: 3, borderRadius: 4, boxShadow: 4, backgroundColor: "#fff"}}>
//                 <Box sx={{display:"flex", justifyContent:"space-between", mb:2}}>
//                     <IconButton sx={{color: "#C13E8F", "&hover":{boxShadow: "0 0 0 5px rgba(193,62,143, 0.2}", transform: "scale(1.05}"}}}>
//                         <ArrowBackIcon/>
//                     </IconButton>
//                 </Box>
//             </Card>
//         </Box>
//     )
// }

// export default Showcase;