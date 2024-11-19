import { Layout } from "@/components/Layout/Layout";
import { clients } from "@/data/clients";
import { Box, Divider, Heading, SimpleGrid, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Layout title={"Clientes"}>
      <Box mb={10}>
        <Heading size="xl">Clientes</Heading>
        <Divider borderColor="black" borderWidth="1px" mb={5} />
        
        <Heading size="lg" color={"gray.600"}>Marcas</Heading>
        <Divider borderColor="gray" borderWidth="1px" />
        <SimpleGrid columns={{ base: 2, md: 4, lg: 6 }} spacing={10} my={10} alignItems={"center"}>
        {clients.filter(client => client.type === 1).map((client, index) => (
          <Image
            key={index}
            src={client.src}
            alt={client.alt}
            p={client.padding}
            objectFit="contain"
          />
        ))}
        </SimpleGrid>
        
        <Heading size="lg" color={"gray.600"}>Gobierno</Heading>
        <Divider borderColor="gray" borderWidth="1px" />
        <SimpleGrid columns={{ base: 2, md: 4, lg: 6 }} spacing={10} my={10} alignItems={"center"}>
        {clients.filter(client => client.type === 2).map((client, index) => (
          <Image
            key={index}
            src={client.src}
            alt={client.alt}
            p={client.padding}
            objectFit="contain"
          />
        ))}
        </SimpleGrid>

        <Heading size="lg" color={"gray.600"}>Turismo</Heading>
        <Divider borderColor="gray" borderWidth="1px" />
        <SimpleGrid columns={{ base: 2, md: 4, lg: 6 }} spacing={10} my={10} alignItems={"center"}>
        {clients.filter(client => client.type === 3).map((client, index) => (
          <Image
            key={index}
            src={client.src}
            alt={client.alt}
            p={client.padding}
            objectFit="contain"
          />
        ))}
        </SimpleGrid>

        <Heading size="lg" color={"gray.600"}>Educación</Heading>
        <Divider borderColor="gray" borderWidth="1px" />
        <SimpleGrid columns={{ base: 2, md: 4, lg: 6 }} spacing={10} my={10} alignItems={"center"}>
        {clients.filter(client => client.type === 4).map((client, index) => (
          <Image
            key={index}
            src={client.src}
            alt={client.alt}
            p={client.padding}
            objectFit="contain"
          />
        ))}
        </SimpleGrid>

      </Box>
    </Layout>
  );
};

export default Index;
