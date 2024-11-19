import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link';
import 'animate.css/animate.min.css';
import { Box, Flex, Image, Stack, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalFooter, Text } from '@chakra-ui/react';

const mundoEjecutivo = [
  { img: "/assets/marcas/mundoEjecutivo/cdmx.png", url: "https://www.mundoejecutivocdmx.com/", title: "CDMX" },
  { img: "/assets/marcas/mundoEjecutivo/hidalgo.png", url: "https://www.mundoejecutivohidalgo.com/", title: "Hidalgo" },
  { img: "/assets/marcas/mundoEjecutivo/veracruz.png", url: "https://www.mundoejecutivoveracruz.com/", title: "Veracruz" },
  { img: "/assets/marcas/mundoEjecutivo/monterrey.png", url: "https://www.mundoejecutivomonterrey.com/", title: "Monterrey" },
  { img: "/assets/marcas/mundoEjecutivo/guadalajara.png", url: "https://www.mundoejecutivoguadalajara.com/", title: "Guadalajara" },
  { img: "/assets/marcas/mundoEjecutivo/chiapas.png", url: "https://www.mundoejecutivochiapas.com/", title: "Chiapas" },
  { img: "/assets/marcas/mundoEjecutivo/oaxaca.png", url: "https://www.mundoejecutivooaxaca.com.mx/", title: "Oaxaca" },
  { img: "/assets/marcas/mundoEjecutivo/queretaro.png", url: "https://www.mundoejecutivoqueretaro.com/", title: "Querétaro" },
  { img: "/assets/marcas/mundoEjecutivo/miami.png", url: "https://www.mundoejecutivomiami.com/", title: "Miami" },
  { img: "/assets/marcas/mundoEjecutivo/texas.png", url: "https://www.mundoejecutivo-texas.com/", title: "Texas" },
  { img: "/assets/marcas/mundoEjecutivo/new-york.png", url: "https://www.mundoejecutivonewyork.com/", title: "New York" },
];

const alcance = [
  { img: "/assets/marcas/mundoEjecutivo/nacional.jpg", title: "Nacional" },
  { img: "/assets/marcas/mundoEjecutivo/internacional.jpg", title: "Internacional" }
];

const MundoEjecutivo: React.FC = () => {
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
            {mundoEjecutivo.map((slide, index) => (
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

      <Flex maxW={{base: "100%", md: "50%"}} pr={2}>
        <Box>
          <Text mb={2} textAlign={"justify"}>
            Elegir <Text as="span" fontWeight="bold">Mundo Ejecutivo</Text> es optar por el respaldo de 50 años de experiencia como líderes en el sector empresarial; 
            garantizamos su visibilidad ante un público que encabeza la toma de decisiones, líderes, empresarios y audiencias 
            clave para impulsar su presencia y posicionamiento a través de una plataforma impresa, digital y visual con sólida 
            trayectoria y alto alcance con distribución en territorio nacional e internacional.     
          </Text>
          <Text mb={2}>
            Somos el medio que lo hará llegar adonde debe estar para poder ser lo que quiera ser.
          </Text>
        </Box>
      </Flex>

      <Flex maxW={{base: "100%", md: "30%"}} p={2}>
        {/* <div className='slider-container'>
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
            {alcance.map((slide, index) => (
              <Box key={index} onClick={() => openModal(slide.img)}>
                <Image 
                  src={slide.img || ""} 
                  alt={slide.title} 
                  className={`carousel-img ${currentSlide === index ? 'current-slide' : ''}`}
                />
              </Box>
            ))}
          </Carousel>
        </div> */}

          <video src="/assets/videos/ME.mp4" controls controlsList='no-download'/>

      </Flex>

      {/* <Modal isOpen={isOpen} onClose={closeModal} size={"5xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            {modalImage && <Image src={modalImage} alt="Alcance Image" />}
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </Stack>
  );
};

export default MundoEjecutivo;
