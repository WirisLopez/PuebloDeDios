import { Layout } from "@/components/Layout/Layout";
import { Accordion, AccordionButton, AccordionPanel, AccordionIcon, Box, Heading, SimpleGrid, AccordionItem, Divider, UnorderedList, ListItem, Image, Text, List } from "@chakra-ui/react";
import { Player, ControlBar } from 'video-react';
import 'video-react/dist/video-react.css';  // Asegúrate de importar el CS
import ReactPlayer from 'react-player';
import { useEffect, useRef } from "react";

const Index = () => {
  const playerRef = useRef<ReactPlayer | null>(null);
  
  useEffect(() => {
    const videoElement = playerRef.current?.getInternalPlayer(); // Usa el operador de encadenamiento opcional
    if (videoElement) {
      videoElement.setAttribute('controlsList', 'nodownload');
    }
  }, []);

  return (
    <Layout title={"Horarios"}>
      <Box mb={10}>
        <Heading as="h1" size="xl">Horarios</Heading>
        <Divider borderColor="red" borderWidth="1px" />
      </Box>

      <Box>
        <Heading fontWeight={"bold"} size={"lg"}>
          Domingos
        </Heading>
        <List>
          <Text>
            10:00 hrs. Escuela Dominical
          </Text>
          <Text>
            11:00 hrs. Culto matutino
          </Text>
          <Text>
            18:00 hrs. Culto vespertino
          </Text>
        </List>
      </Box>
    </Layout>
  );
};

export default Index;
