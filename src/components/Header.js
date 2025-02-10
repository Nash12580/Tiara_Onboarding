import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#932F6D',
}));

const Title = styled('div')(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
}));

const Logo = styled('img')(({ theme }) => ({
  marginRight: theme.spacing(2),
  height: '45px',
  width: 'auto',
  filter: 'grayscale(1) brightness(4)',
}));

const Buttons = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));


export default function Header() {

  const navigate = useNavigate();

  const loginClick = () => {
    navigate('/login');
  };

  return (
    <CustomAppBar position="static">
      <Toolbar>
        <Title>
        <Logo src="\Tiara_logo.png" alt="Mi Tiara Logo" />
        </Title>
        <Buttons>
          <IconButton edge="end" sx={{ color: '#fff', display: 'flex', alignItems: 'center'}} aria-label="login-signup"
            onClick={loginClick}>
            <AccountCircleIcon sx={{marginRight: 1}}/>
            <Typography variant="body1" fontSize={'13px'}>Login / Sign Up</Typography>
          </IconButton>
          <IconButton edge="end" sx={{color: '#fff', display: 'flex', alignItems: 'center', marginLeft: 4}} aria-label="list-business">
            <Typography variant="body1" fontSize={'13px'}>List Business</Typography>
          </IconButton>
          <IconButton edge="end" sx={{ color: '#fff', marginLeft:4 }} aria-label="shopping-bag">
            <ShoppingBagIcon />
          </IconButton>
        </Buttons>
      </Toolbar>
    </CustomAppBar>
  );
}
