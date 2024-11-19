import { Layout } from "@/components/Layout/Layout";
import { Box, Divider, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { contacts } from "@/data/contacts";
import Map from "@/components/Map";

const Index = () => {
  return (
    <Layout title={"Contacto"}>
      {/* <Box mb={10}>
        <Heading as="h1" size="xl">Contacto</Heading>
        <Divider borderColor="red" borderWidth="1px" />
      </Box> */}

      <Heading size="lg" mt={10}>Llámanos</Heading>
      <Divider borderColor="red" borderWidth="1px" mb={5}/>
      <SimpleGrid columns={{ base: 1, md: 2}} spacing={10} mb={10}>
        {contacts
          .filter(contact => contact.type === 2)
          .map((contact, index) => (
            <Box
              key={index}
              as={"a"}
              href={contact.url} // Aquí se usa contact.url
              target={"_blank"}
              borderRadius={"lg"}
              boxShadow={"dark-lg"}
              p={5}
              color={"blue.800"}
            >
              <Heading as={"h2"} size={"lg"} textAlign={"center"}>
                {contact.icon} {contact.name} {/* Aquí se usa contact.icon y contact.name */}
              </Heading>

              <Text
                fontSize={"lg"}
                _hover={{
                  textDecoration: "underline",
                }}
                textAlign={"center"}
              >
                {contact.contact} {/* Aquí debería ser contact.details o lo que quieras mostrar */}
              </Text>
            </Box>
          ))}
      </SimpleGrid>

      <Heading size="lg">Síguenos en redes sociales</Heading>
      <Divider borderColor="red" borderWidth="1px" mb={5}/>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mb={10}>
        {contacts
          .filter(contact => contact.type === 1)
          .map((contact, index) => (
            <Box
              key={index}
              as={"a"}
              href={contact.url} // Aquí se usa contact.url
              target={"_blank"}
              borderRadius={"lg"}
              boxShadow={"dark-lg"}
              p={5}
              color={"blue.800"}
            >
              <Heading as={"h2"} size={"lg"} textAlign={"center"}>
                {contact.icon} {contact.name} {/* Aquí se usa contact.icon y contact.name */}
              </Heading>

              <Text
                fontSize={"lg"}
                _hover={{
                  textDecoration: "underline",
                }}
                textAlign={"center"}
              >
                {contact.contact} {/* Aquí debería ser contact.details o lo que quieras mostrar */}
              </Text>
            </Box>
          ))}
      </SimpleGrid>

      <Map/>
    </Layout>
  );
};

export default Index;
