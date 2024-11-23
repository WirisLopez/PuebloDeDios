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

  const handleNavClick = async (url: string) => {
    console.log('Navigating to:', url);
    await handleClickNav(url);
    console.log('Closing drawer');
    onClose(); // Cerrar el menú después de la navegación
  };

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bgGradient={"radial-gradient(circle, rgba(247, 219, 24, 1) 0%, rgba(223, 132, 25, 1) 70%, rgba(161, 39, 51, 1) 95%)"}>
        <DrawerCloseButton color={"white"}/>
        <DrawerHeader>
          <Center>
            <Logo width="30%"/>
          </Center>
        </DrawerHeader>
        <DrawerBody>
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
