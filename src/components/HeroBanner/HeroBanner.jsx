import React from "react";
import { Button, Box, Container, Heading, Text } from "@chakra-ui/react";
import "./HeroBanner.scss";

const HeroBanner = () => {
  return (
    <section className="hero-section">
      <Box className="container">
        <Container className="left" textAlign="start">
          <Box textAlign={"start"}>
            <Heading
              as={"h1"}
              className="main-heading"
              size={{ base: "2xl", sm: "3xl", md: "3xl", lg: "2xl", xl: "4xl" }}
            >
              The best male <br></br> grooming products
            </Heading>
            <Text
              className="secondary-heading"
              py={"1.5rem"}
              fontSize={{
                base: "xl",
                sm: "3xl",
                md: "xl",
                lg: "xl",
                xl: "3xl",
              }}
            >
              High quality men grooming products <br></br> made from natural
              ingridients
            </Text>

            <Button className="red-button">Explore our products</Button>
          </Box>
        </Container>
        <Container className="right"></Container>
      </Box>
    </section>
  );
};

export default HeroBanner;
