import { Box, Flex, Heading, SimpleGrid, Text, Image, Divider } from '@chakra-ui/react';
import { values } from '@/data/values';

const Valores = () => {
  return (
    <>
      <Box mb={10}>
        <Heading as="h1" size="lg">Valores</Heading>
        <Divider borderColor="black" borderWidth="1px" />
      </Box>
      <SimpleGrid
        columns={{ base: 1, md: 5 }}
        spacing={10}
        my={10}
      >
        {values.map(({ title, description, img }) => (
          <Box
            key={title}
            boxShadow="dark-lg"
            rounded="2xl"
            w={"100%"}
          >
            <Flex
              p={5}
              justifyContent="center"
              bg={"white"}
              roundedTop="2xl"
            >
              <Image
                src={img}
                alt="valores"
                width={150}
                height={150} 
              />
            </Flex>
            <Box
              p={2}
              roundedBottom="2xl"
            >
              <Heading
                as="h1"
                size="md"
                textAlign="center"
                p={2}
                borderTop={"1px"}
                borderBottom={"1px"}
                borderColor={"blue.300"}
              >
                {title}
              </Heading>
              <Text
                fontSize="lg"
                my={5}
                textAlign="justify"
              >
                {description}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </>
  )
};

export default Valores;
