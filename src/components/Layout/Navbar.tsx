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
          bgColor={"blue.700"}
        >
          <Container>
            <HStack justify="space-between" h={{base:120,  md: 150}}>
              <Logo width ="60%"/>
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
