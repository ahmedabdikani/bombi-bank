import React from 'react';
import { Box } from '@chakra-ui/react';

import Footer from './shared/Footer';
import Header from './shared/Header';
import fixSrcWithBasePath from '../utils/fixSrcWithBasePath';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </Box>
  );
};
export default Layout;
