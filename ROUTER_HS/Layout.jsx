import React from 'react';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import { Outlet } from 'react-router-dom'; // Correct import for Outlet

function Layout() {
  return (
    <>
      <Header />
      <Outlet /> {/* This renders the nested route components */}
      <Footer />
    </>
  );
}

export default Layout;
