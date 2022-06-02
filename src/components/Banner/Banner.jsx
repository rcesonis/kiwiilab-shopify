import React from "react";
import { Box, Container } from "@chakra-ui/react";
import "./Banner.scss";

const Banner = () => {
  return (
    <section>
      <Box className="container">
        <Container className="left-banner"></Container>
        <Container className="right-banner"></Container>
      </Box>
    </section>
  );
};

export default Banner;
