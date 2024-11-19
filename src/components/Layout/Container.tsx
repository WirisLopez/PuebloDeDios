import { Box, BoxProps } from '@chakra-ui/react';

interface ContainerProps extends BoxProps {
  bgColor?: string; // Propiedad opcional para el color de fondo
}

const Container = ({ bgColor, ...props }: ContainerProps) => {
  return (
    <Box bgColor={bgColor || ""}>
      <Box
        maxW="1400px"
        mx="auto"
        {...props}
      />
    </Box>
  );
};

export default Container;
