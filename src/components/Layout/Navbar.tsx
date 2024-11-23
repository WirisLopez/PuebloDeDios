import { Box, Flex, HStack, IconButton, SimpleGrid, useBreakpointValue, useDisclosure, keyframes } from '@chakra-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Logo } from "@/components/Logo";
import { useRouter } from "next/router";
import { NavbarMobile } from "@/components/Layout/NavbarMobile";
import { NavbarItem } from "@/components/Layout/NavbarItem";
import { navbarPages } from "@/data/navbarPages";
import Container from './Container';

export const Navbar = () => {
  const router = useRouter();
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClickNav = async (url: string) => {
    await router.push(url);
  };

  const pages = navbarPages;

  return (
    <>
      <Box as="section" top="0" width="100%" zIndex="10">
        <Box
          p={5}
          bgGradient={"radial-gradient(circle, rgba(247, 219, 24, 1) 0%, rgba(223, 132, 25, 1) 70%, rgba(161, 39, 51, 1) 95%)"}
        >
          <Container>
            <HStack justify="space-between" h={{base:100,  md: 150}}>
              <Box maxW={{base:"50%", md:"30%"}}>
                <Logo width ={"30%"} heigth="100%"/>
              </Box>
                {isDesktop ? (
                  <Flex alignItems="center">
                    <SimpleGrid columns={pages.length} spacingX={20}>
                      {pages.map((page, index) => (
                        <NavbarItem
                          key={index}
                          category={page}
                          handleClickNav={handleClickNav}
                        />
                      ))}
                    </SimpleGrid>
                  </Flex>
                ) : (
                  <IconButton
                    variant="ghost"
                    icon={<FontAwesomeIcon icon={faBars} />}
                    aria-label="Open Menu"
                    onClick={onOpen}
                    color={"white"}
                  />
                )}
            </HStack>
          </Container>
        </Box>
      </Box>
      <NavbarMobile
        isOpen={isOpen}
        onClose={onClose}
        handleClickNav={handleClickNav}
        pages={pages}
      />
    </>
  );
};
