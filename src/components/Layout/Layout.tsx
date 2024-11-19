import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { ReactNode } from 'react';
import Container from './Container';
import { Placeholder } from './Placeholder';

interface LayoutProps {
  title: string;
  children: ReactNode;
}

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/assets/icons/favicon.ico" />
        <meta property="og:title" content={`${title} - Global Media Investment`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.globalmediainvestment.com/" />
        <meta property="og:image" content="https://www.globalmediainvestment.com/assets/icons/logo.png" />
      </Head>
      <Flex direction="column" flex="1">
          <Flex as="main" role="main" direction="column" flex="1">
            <Placeholder minH="2xl" bg="bg-accent">
              {children}
            </Placeholder>
          </Flex>
      </Flex>
    </>
  );
};
