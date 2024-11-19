import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from "next/app";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Navbar } from '@/components/Layout/Navbar';
import { Footer } from '@/components/Layout/Footer';
import Container from '@/components/Layout/Container';
import '../styles/gallery.css';

config.autoAddCss = false;

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <Navbar />
    <Container bgColor="white">
      <Component {...pageProps} />
    </Container>
    <Footer />
  </ChakraProvider>
);

export default App;
