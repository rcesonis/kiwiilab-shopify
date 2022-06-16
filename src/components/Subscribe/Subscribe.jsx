import {
  Flex,
  Box,
  Heading,
  Text,
  FormControl,
  Input,
  Button,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import "./Subscribe.scss";

const Subscribe = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
      }}
      backgroundColor={"#191919"}
      pb="2rem"
      pt="4rem"
    >
      <Box mx={"auto"}>
        <Box>
          <Heading
            size={{ base: "1rem", sm: "2rem" }}
            textAlign={{
              base: "center",
              sm: "center",
              md: "center",
              lg: "center",
              xl: "start"
            }}
            color={"#FFFFFF"}
          >
            Subscribe to our newsletter
          </Heading>
          <Text
            color={"#FFFFFF"}
            fontSize={{ base: "1rem" }}
            textAlign={{ base: "center", sm: "center", lg: "center", xl: "start" }}
          >
            Get the best deals at Kiwiilab, get to know upcoming <br></br>
            promotions prior to everyone else.
          </Text>
        </Box>
      </Box>
      <Box>
        <FormControl mx={{ base: "auto" }} w={{ base: "80%", sm: "80%" }}>
          <Flex>
            <Input className="subscribe-input-field" id="email" type="email" />
            <Button className="subscribe-button" type="submit">
              Subscribe
            </Button>
          </Flex>
        </FormControl>
      </Box>
    </Grid>
  );
};

export default Subscribe;
