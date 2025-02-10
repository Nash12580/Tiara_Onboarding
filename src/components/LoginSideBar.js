import { Typography } from "@mui/material";

function LoginSideBar() {
  return (
    <div
      style={{
        backgroundColor: "#952d6d",
        width: "33.75%",
        height: "100vh",
        float: "left",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ color: "#ffffff", width: "85%" }}>
        <img
          src="\Tiara_logo.png"
          alt="logo_MiTiara"
          style={{ filter: "brightness(0) invert(1)", width: "60%" }}
        />
        <Typography fontSize={'45px'}>
          Transforming Your Plans into Celebrations!
        </Typography>
      </div>
    </div>
  );
}

export default LoginSideBar;
