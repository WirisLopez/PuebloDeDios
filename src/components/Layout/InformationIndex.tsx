import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

export const InformationIndex = () => {
  return (
    <Flex 
      color={"black"} 
      direction={{ base: "column", md: "row" }} // Column layout on small screens, row on medium and up
    >
      {/* Sección de texto ocupando el 75% */}
      <Box flexBasis="75%" p={4} textAlign={"center"}>
        <Heading>
          Iglesia Cristiana Bautista
        </Heading>
        <Heading fontSize={"30"}>
          Pueblo de Dios
        </Heading>
        <Heading fontSize={"24"} fontStyle={"italic"} fontWeight={"semibold"}>
          "...un mismo sentir"
        </Heading>
        <Text mt={5}>
          “Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar"
        </Text>
        <Text>
          Mateo 11:28
        </Text>
      </Box>
      {/* Sección de la imagen ocupando el 25% */}
      <Box flexBasis="25%">
        <Image 
          src="https://via.placeholder.com/200" // Reemplaza con la URL de tu imagen
          alt="Descripción de la imagen"
          objectFit="cover"
          width="100%" 
          height="100%"
        />
      </Box>
    </Flex>
  );
};
