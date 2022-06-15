import React from "react";
import { Box, Container, Text, Heading, Button } from "@chakra-ui/react";
import "./Banner.scss";

const Banner = () => {
  return (
    <section>
      <Box
        display={{
          base: "none",
          sm: "none",
          md: "none",
          lg: "flex",
          xl: "flex",
        }}
      >
        <Container className="left-banner"></Container>
        <Container
          className="right-banner"
          justifyContent="center"
          alignItems="center"
        >
          <Box w={"65%"}>
            <Heading
              as={"h1"}
              className="main-heading"
              size={{
                base: "3xl",
                sm: "3xl",
                md: "3xl",
                lg: "3xl",
                xl: "3xl",
              }}
              justifyContent="start"
            >
              Kiwiilab - products for the modern man
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
            <Button className="red-button" px={"3rem"} mt={"1rem"}>
              Explore our products
            </Button>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default Banner;
