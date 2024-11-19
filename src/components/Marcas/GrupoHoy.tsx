import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link';
import 'animate.css/animate.min.css';
import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';

const grupoHoy = [
  { img: "/assets/marcas/grupoHoy/hidalgo.png", url: "https://www.hidalgohoy.com/", title: "Hidalgo" },
  { img: "/assets/marcas/grupoHoy/mexico.png", url: "https://www.mexicohoy.mx/", title: "México" },
  { img: "/assets/marcas/grupoHoy/puebla.png", url: "https://www.pueblahoy.com.mx/", title: "Puebla" },
  { img: "/assets/marcas/grupoHoy/tlaxcala.png", url: "https://www.tlaxcalahoy.com/", title: "Tlaxcala" },
  { img: "/assets/marcas/grupoHoy/veracruz.png", url: "https://www.veracruzhoy.com.mx/", title: "Veracruz" },
];

const alcance = [
  { img: "/assets/marcas/mundoEjecutivo/nacional.jpg", title: "Nacional" },
  { img: "/assets/marcas/mundoEjecutivo/internacional.jpg", title: "Internacional" }
];

const GrupoHoy: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const openModal = (image: string) => {
    setModalImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalImage(null);
  };

  return (
    <Stack direction={{ base: "column", md: "row" }}>
      <Flex maxW={{ base: "100%", md: "20%" }}>
        <div className='slider-container'>
          <Carousel 
            autoPlay 
            infiniteLoop 
            interval={5000} 
            showStatus={false} 
            showArrows={true} 
            showThumbs={false}
            showIndicators={false}
            autoFocus={true}
            onChange={handleSlideChange}
          >
            {grupoHoy.map((slide, index) => (
              <Link href={slide.url} key={index} target='_blank'>
                <Box key={index}>
                  <Image 
                    src={slide.img || ""} 
                    alt={slide.title} 
                    className={`carousel-img ${currentSlide === index ? 'current-slide' : ''}`}
                  />
                </Box>
              </Link>
            ))}
          </Carousel>
        </div>
      </Flex>

      <Flex maxW={{base: "100%", md: "80%"}}>
        <Box>
          <Text mb={2} textAlign={"justify"}>
            <Text as="span" fontWeight="bold">Grupo Hoy</Text> es parte de una empresa periodística con una trayectoria intachable, sustentada en el 
            conocimiento sólido y la experiencia de nuestros directivos. Nuestro equipo de reporteros, tanto de 
            campo como digitales, se compromete con los más altos estándares de calidad en la difusión de noticias.
          </Text>
          <Text mb={2} textAlign={"justify"}>
            Nos define el respeto a los derechos humanos de quienes hoy son protagonistas de la información 
            y nos caracteriza una perspectiva plural en comentarios, opiniones y críticas constructivas, siempre 
            orientadas al progreso y desarrollo de México.
          </Text>
        </Box>
      </Flex>
    </Stack>
  );
};

export default GrupoHoy;
