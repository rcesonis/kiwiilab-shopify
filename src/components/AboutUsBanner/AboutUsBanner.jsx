import {
  Button,
  Flex,
  Image,
  Box,
  Grid,
  Heading,
} from "@chakra-ui/react";
import "./AboutUsBanner.scss";
import about_us_pic_1 from "../../assets/images/about-us-1.png";
import about_us_pic_2 from "../../assets/images/about-us-2.png";

const AboutUsBanner = () => {
  return (
    <Box className="about-us-component">
      <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}>
        <Flex justifyContent="center" alignItems="center" h={{ base: "65vh" }}>
          <Flex className="about-us-pics-container">
            <Box className="left-about-us-pic">
              <Image src={about_us_pic_1}></Image>
            </Box>
            <Box className="right-about-us-pic">
              <Image src={about_us_pic_2}></Image>
            </Box>
          </Flex>
        </Flex>
        <Flex justifyContent="center" alignItems="center">
          <Box w={"65%"} py={{ base: "3rem" }}>
            <Heading
              as={"h1"}
              className="main-heading"
              size={{ base: "xl", sm: "xl", md: "2xl", lg: "3xl", xl: "3xl" }}
              justifyContent="start"
            >
              Our story started as a wish to have a quality time <br></br> for
              ourselves
            </Heading>
            <Button className="red-button" px={"3rem"} mt={"1rem"}>
              Read more
            </Button>
          </Box>
        </Flex>
      </Grid>
    </Box>
  );
};

export default AboutUsBanner;
