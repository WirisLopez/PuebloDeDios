import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

export const InformationIndex = () => {
  return (
    <Flex 
      color={"black"} 
      direction={{ base: "column", md: "row" }} // Column layout on small screens, row on medium and up
    >
      {/* Sección de texto ocupando el 75% */}
      <Box flexBasis="75%" p={4}>
        <Heading>
          Lorem ipsum
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est consectetur culpa voluptatem exercitationem! Doloribus voluptates vitae placeat non soluta laboriosam facilis quos, libero magnam, nobis nihil alias, saepe sit ullam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ab qui nostrum tempore earum soluta autem repellat vitae odit et deserunt voluptatum, voluptates exercitationem adipisci ea similique corporis velit facere.
        </Text>
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae eos alias temporibus cumque perferendis accusamus earum sed nemo laudantium! Cupiditate, fuga. Corporis tempora accusantium consequatur totam, autem in deleniti quos!
        </Text>
      </Box>
      {/* Sección de la imagen ocupando el 25% */}
      <Box flexBasis="25%">
        <Image 
          src="https://via.placeholder.com/300" // Reemplaza con la URL de tu imagen
          alt="Descripción de la imagen"
          objectFit="cover"
          width="100%" 
          height="100%"
        />
      </Box>
    </Flex>
  );
};
