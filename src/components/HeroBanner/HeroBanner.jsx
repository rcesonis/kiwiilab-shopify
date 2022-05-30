import React from "react";
import { Button, Box, Container } from "@chakra-ui/react";
import "./HeroBanner.scss";

const HeroBanner = () => {
  return (
    <section className="hero-section">
      <Box className="container">
        <Container className="left">
          <h1>The best male grooming products</h1>
          <p>
            High quality men grooming products made from natural ingridients
          </p>
          <Button backgroundColor="#F03F3F" variant="solid" borderRadius="0">
            Explore our products
          </Button>
        </Container>
        <Container className="right"></Container>
      </Box>
    </section>
  );
};

export default HeroBanner;
