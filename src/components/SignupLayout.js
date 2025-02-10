import {Outlet, useNavigate} from "react-router-dom";
import {Box, Button} from "@mui/material";

const SignupLayout = () =>{
    const navigate = useNavigate();

    return (
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Outlet /> {/* Only renders the signup pages without adding extra UI */}
            </Box>
          );
        };
export default SignupLayout