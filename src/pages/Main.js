import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {styled} from '@mui/material/styles';
import { Outlet } from "react-router-dom";


const PageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',  
});

const ContentWrapper = styled('div')({
  flexGrow: 1,  
});

export default function Main() {
  return (
    <PageContainer>
      <Header/>
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <Footer/>
    </PageContainer>
  );
}