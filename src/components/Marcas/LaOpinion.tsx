import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link';
import 'animate.css/animate.min.css';
import { Box, Flex, Image, Stack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Text } from '@chakra-ui/react';

const laOpinion = [
  { img: "/assets/marcas/laOpinion/altiplano.png", url: "https://www.laopiniondelaltiplano.com/", title: "Altiplano" },
  { img: "/assets/marcas/laOpinion/mezquital.png", url: "https://www.mundoexpressmezquital.com/", title: "Mezquital" },
  { img: "/assets/marcas/laOpinion/montana.png", url: "https://www.mundoexpresslamontana.com/", title: "Montaña" },
  { img: "/assets/marcas/laOpinion/tlaxcala.png", url: "https://www.laopiniondetlaxcala.com/", title: "Tlaxcala" },
  { img: "/assets/marcas/laOpinion/veracruz.png", url: "https://www.laopiniondeveracruz.com/", title: "Veracruz" },
];

const alcance = [
  { img: "/assets/marcas/mundoEjecutivo/nacional.jpg", title: "Nacional" },
  { img: "/assets/marcas/mundoEjecutivo/internacional.jpg", title: "Internacional" }
];

const LaOpinion: React.FC = () => {
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
            {laOpinion.map((slide, index) => (
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
          Somos piedra angular de un conglomerado de medios informativos regionales del estado de Hidalgo, nacido de la 
          visión emprendedora de llevar noticias, análisis y opinión a todos los rincones de la entidad. Nuestro equipo está 
          liderado por periodistas de reconocida trayectoria nacional, comprometidos con una labor informativa de alto estándar.
          Nos distingue el respeto a los derechos humanos de quienes día a día protagonizan la noticia, y nuestra identidad se 
          define por la pluralidad en los comentarios, las opinciones, las críticas y los señalamientos constructivos, enfocados 
          siempre a promover el engrandecimiento del Altiplano Hidalguense, del Valle del Mezquital, de las regiones de La 
          Montaña, Tulancingo y Tizayuca, así como de su capital, Pachuca
          </Text>
        </Box>
      </Flex>
    </Stack>
  );
};

export default LaOpinion;
