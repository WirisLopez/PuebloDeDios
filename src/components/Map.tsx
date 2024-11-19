import { Box, Divider, Heading } from '@chakra-ui/react';
import React from 'react';

const Map = () => {
  return (
    <>
      <Heading size="xl" mt={5}>Ubicación</Heading>
      <Divider borderColor="red" borderWidth="1px" mb={5} />
      <Box mb={10}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d936.5739616433589!2d-98.76908590566529!3d20.12170148837042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d10a0d2396d5f7%3A0x12cfd54bc3ffc7e1!2sIglesia%20Cristiana%20Bautista!5e0!3m2!1ses-419!2smx!4v1731980123855!5m2!1ses-419!2smx"
          loading="lazy"
          width={"100%"}
          height={"500px"} 
        />
      </Box>
    </>
  );
};

export default Map;
