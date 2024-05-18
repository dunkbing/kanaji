import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import BottomNav from './BottomNav';
import { ThemeProvider } from './themeContext';

const Layout = () => {
  return (
    <>
      <BottomNav />
      <Header />
      <Content />
      <Footer />
    </>
  );
};
export default Layout;
