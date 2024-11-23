import { Center, Image } from '@chakra-ui/react';
import Link from 'next/link';

interface LogoProps {
  width?: string;
  heigth?: string;
}

export const Logo: React.FC<LogoProps> = ({ width = "100%", heigth = "100%" }) => {
  return (
    <Link href="/" passHref>
      <Center>
        <Image
          src="/assets/icons/logo.png"
          alt="logo"
          w={width}
          h={heigth}
        />
      </Center>
    </Link>
  );
};
