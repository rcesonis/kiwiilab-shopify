import React from "react";
import "./Footer.scss";
import logo from "../../assets/kiwiilab_logo.png";
import { Link } from "react-router-dom";
import { Image, Flex, Text, Icon } from "@chakra-ui/react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer">
      <Flex justifyContent={"center"} py="1rem">
        <Link to="/">
          <Image className="logo" src={logo} />
        </Link>
      </Flex>
      <Flex className="footer-links" pb={"1.5rem"} justifyContent={"center"}>
        <Link to="/">
          <Text px={{ base: "1rem", sm: "2rem" }}>Shop</Text>
        </Link>
        <Link to="/">
          <Text px={{ base: "1rem", sm: "2rem" }}>About us</Text>
        </Link>
        <Link to="/">
          <Text px={{ base: "1rem", sm: "2rem" }}>Contact us</Text>
        </Link>
      </Flex>
      <Flex justifyContent={"center"}>
        <Link to="/">
          <Icon
            mx={"1rem"}
            fill={"#FFF"}
            cursor="pointer"
            as={FaFacebookF}
            w={5}
            h={5}
          ></Icon>
        </Link>
        <Link to="/">
          <Icon
            mx={"1rem"}
            fill={"#FFF"}
            cursor="pointer"
            as={FaLinkedinIn}
            w={5}
            h={5}
          ></Icon>{" "}
        </Link>
        <Link to="/">
          <Icon
            mx={"1rem"}
            fill={"#FFF"}
            cursor="pointer"
            as={FaInstagram}
            w={5}
            h={5}
          ></Icon>{" "}
        </Link>
      </Flex>
      <Flex py={"1.3rem"} justifyContent={"center"}>
        <Text className="copyright-text">© 2022 - Kiwiilab</Text>
      </Flex>
    </section>
  );
};

export default Footer;
