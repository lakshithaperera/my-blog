import React from 'react';
import { Metadata } from 'next';
import Header from './Header';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });



const Layout = ({ children }) => (
  <>
  
      <Header />
      {children}

  </>
);

export default Layout;
