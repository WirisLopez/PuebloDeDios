import { Image } from '@chakra-ui/react';
import Link from 'next/link';

interface LogoProps {
  width?: string;
}

export const Logo: React.FC<LogoProps> = ({ width = "100%" }) => {
  return (
    <Link href="/" passHref>
      <Image
        src="https://via.placeholder.com/300"
        alt="logo"
        w={width}
      />
    </Link>
  );
};
