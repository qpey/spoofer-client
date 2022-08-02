import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { NavbarContainer } from '../components/Navbar';
import { FooterContainer } from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <NavbarContainer />
      <Component {...pageProps} />
      <FooterContainer />
    </ChakraProvider>
  );
}

export default MyApp;
