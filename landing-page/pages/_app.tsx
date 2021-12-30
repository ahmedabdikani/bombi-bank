import '../styles/globals.css';

import React from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

import Layout from '../components/Layout';
import { DrawerProvider } from '../context/DrawerContext';
import Head from 'next/head';
const Drawer = dynamic(() => import('../components/Drawer'), {
  ssr: false,
});

const colors = {
  brand: {
    1: '#72D0CF',
    2: '#24325C',
    3: '#F4F6F9',
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
  },
});

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <DrawerProvider>
        <Layout>
          <Head>
            <title>Bombi Bank</title>
          </Head>
          <Drawer />
          <Component {...pageProps} />
        </Layout>
      </DrawerProvider>
    </ChakraProvider>
  );
};

export default MyApp;
