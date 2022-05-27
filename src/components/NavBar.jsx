import React, { useContext } from "react";
import { Box, Icon, Image, Text, Flex } from "@chakra-ui/react";
import { ShopContext } from "../context/shopContext";
import { MdMenu, MdShoppingBasket } from "react-icons/md";
import logo from "../assets/kiwiilab_logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { openCart, openMenu } = useContext(ShopContext);
  return (
    <Flex
      flexDir="row"
      backgroundColor={"#000"}
      justifyContent="space-between"
      p="2rem"
      //   alignItems="center"
    >
      <Icon
        fill={"#FFF"}
        cursor="pointer"
        as={MdMenu}
        w={30}
        h={30}
        onClick={() => openMenu()}
      ></Icon>
      <Link to="/">
        <Image src={logo} />
      </Link>
      <Icon
        fill={"#FFF"}
        cursor="pointer"
        as={MdShoppingBasket}
        w={30}
        h={30}
        onClick={() => openCart()}
      ></Icon>
    </Flex>
  );
};

export default NavBar;
