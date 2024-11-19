import { Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, keyframes, SimpleGrid } from "@chakra-ui/react";
import { NavbarItem } from "@/components/Layout/NavbarItem";
import { Category } from "@/interfaces/Category";
import { Logo } from "@/components/Logo";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  pages: Category[];
  handleClickNav: (url: string) => void;
}

export const NavbarMobile = ({ isOpen, onClose, pages, handleClickNav }: Props) => {
  const animationBg = keyframes`
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  `;

  const handleNavClick = async (url: string) => {
    console.log('Navigating to:', url);
    await handleClickNav(url);
    console.log('Closing drawer');
    onClose(); // Cerrar el menú después de la navegación
  };

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton color={"white"}/>
        <DrawerHeader
          bgGradient="linear(to-r, gray.900, blue.900, blue.800, blue.600, purple.900)"
          bgSize={"200% 200%"}
          animation={`${animationBg} 10s ease infinite`}
        >
          <Center>
            <Heading>
              <Logo />
            </Heading>
          </Center>
        </DrawerHeader>
        <DrawerBody
          bgGradient="linear(to-r, gray.900, blue.900, blue.800, blue.600, purple.900)"
          bgSize={"200% 200%"}
          animation={`${animationBg} 10s ease infinite`}
        >
          <SimpleGrid columns={1} spacing={8} py={5} alignItems={"left"}>
            {pages.map((page, index) => (
              <NavbarItem
                key={index}
                category={page}
                handleClickNav={handleNavClick} // Utiliza la nueva función handleNavClick
              />
            ))}
          </SimpleGrid>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
