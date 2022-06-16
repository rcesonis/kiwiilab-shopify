import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  VStack,
} from "@chakra-ui/react";

import { ShopContext } from "../context/shopContext";

const NavMenu = () => {
  const { isMenuOpen, closeMenu } = useContext(ShopContext);
  return (
    <Drawer isOpen={isMenuOpen} onClose={closeMenu} placement="left" size="sm">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>

        <DrawerBody>
          <VStack p="2rem">
            <Link to="/">About us</Link>
            <Link to="/">Learn More</Link>
            <Link to="/">Contact</Link>
          </VStack>
        </DrawerBody>
        <DrawerFooter textAlign="center">
          <Text w="100%"> &copy; www.rcesonis.com</Text>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default NavMenu;
