import { Button, Container, Flex, Image } from "@chakra-ui/react";
import about_us_pic_1 from "../../assets/images/about-us-1.png";
import about_us_pic_2 from "../../assets/images/about-us-2.png";

const AboutUsBanner = () => {
  return (
    <Flex h="38vh" justifyContent="center" alignItems="center">
      <Container>
        <Image src={about_us_pic_1} alt="Dan Abramov" />
        <Image src={about_us_pic_2} alt="Dan Abramov" />
      </Container>
      <Container>
        <h1>
          Our story started as a wish to have a quality time for ourselves
        </h1>
        <Button>Read more</Button>
      </Container>
    </Flex>
  );
};

export default AboutUsBanner;
