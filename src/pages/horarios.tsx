import { Layout } from "@/components/Layout/Layout";
import { Box, Heading, Text, List, Stack } from "@chakra-ui/react";
import 'video-react/dist/video-react.css';
import ReactPlayer from 'react-player';
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Index = () => {
  const playerRef = useRef<ReactPlayer | null>(null);

  useEffect(() => {
    const videoElement = playerRef.current?.getInternalPlayer();
    if (videoElement) {
      videoElement.setAttribute('controlsList', 'nodownload');
    }
  }, []);

  return (
    <Layout title={"Horarios"}>
      <Box mb={10}>
        <Heading as="h1" size="xl">¡Te invitamos a nuestras reuniones presenciales y en línea!</Heading>
      </Box>

      <Stack direction={{ base: "column", md: "row" }} spacing={10} mb={2}>
        <Box maxW={{ base: "100%", md: "50%" }} flex="1">
          <Box>
            <Heading fontWeight={"bold"} size={"md"}>
              Domingos
            </Heading>
            <List>
              <Text>
                <Text as={"span"} fontWeight={"semibold"}>11:00 horas:</Text> Escuela Bíblica Dominical.
              </Text>
              <Text>
                <Text as={"span"} fontWeight={"semibold"}>12:30 horas:</Text> Servicio de adoración.
              </Text>
              <Text>
                <Text as={"span"} fontWeight={"semibold"}>18:00 horas:</Text> Culto de capacitación.
              </Text>
            </List>
          </Box>

          <Box mt={5}>
            <Heading fontWeight={"bold"} size={"md"}>
              Miércoles
            </Heading>
            <List>
              <Text>
                18:00 horas: Reunión de oración (presencial y en línea).
              </Text>
            </List>
          </Box>

          <Box mt={5}>
            <Heading fontWeight={"bold"} size={"md"}>
              Jueves
            </Heading>
            <List>
              <Text>
                18:00 horas: Hogar Abierto (en línea). Tema: Paso a paso a través de la Biblia.
              </Text>
            </List>
          </Box>

          <Box mt={5}>
            <Heading fontWeight={"bold"} size={"md"}>
              Viernes
            </Heading>
            <List>
              <Text>
                20:30 horas: Hogar Abierto (en línea). Tema: El Evangelio según San Lucas.
              </Text>
            </List>
          </Box>
        </Box>

        <Box maxW={{ base: "100%", md: "50%" }} flex="1" display="flex" justifyContent="center" alignItems="center">
          <Box
            as={"a"}
            href={"tel:+55 1608 3959"}
            target={"_blank"}
            borderRadius={"lg"}
            boxShadow={"dark-lg"}
            p={5}
            color={"blue.800"}
            w={{ base: "100%", md: "80%" }}
            textAlign="center"
          >
            <Heading fontSize={"xl"} mb={2}>Informes</Heading>
            <Heading as={"h2"} size={"lg"} textAlign={"center"}>
              <FontAwesomeIcon icon={faWhatsapp} />
              <Text as={"span"} ml={3}>Pastor David Taboada García</Text>
            </Heading>

            <Text
              fontSize={"lg"}
              _hover={{
                textDecoration: "underline",
              }}
              textAlign={"center"}
            >
              +52 55 1608 3959
            </Text>
          </Box>
        </Box>
      </Stack>
    </Layout>
  );
};

export default Index;
