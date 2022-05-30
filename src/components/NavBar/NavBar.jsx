import React, { useContext } from "react";
import { Box, Icon, Image, Flex, Badge } from "@chakra-ui/react";
import { ShopContext } from "../../context/shopContext";
import { MdMenu, MdShoppingBasket } from "react-icons/md";
import logo from "../../assets/kiwiilab_logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { openCart, openMenu, checkout } = useContext(ShopContext);
  return (
    <Flex
      flexDir="row"
      backgroundColor={"#000"}
      justifyContent="space-between"
      p="2rem"
      alignItems="center"
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
        <Image className="logo" src={logo} />
      </Link>
      <Box>
        <Icon
          fill={"#FFF"}
          cursor="pointer"
          as={MdShoppingBasket}
          w={30}
          h={30}
          onClick={() => openCart()}
        />
        <Badge backgroundColor="red" fontSize={"0.6em"} borderRadius="50%">
          {checkout.lineItems?.length}
        </Badge>
      </Box>
    </Flex>
  );
};

export default NavBar;
