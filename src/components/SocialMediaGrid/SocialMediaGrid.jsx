import { Grid, Image, Box, Container, Heading } from "@chakra-ui/react";
import social_1 from "../../assets/images/social-1.png";
import social_2 from "../../assets/images/social-2.png";
import social_3 from "../../assets/images/social-3.png";
import social_4 from "../../assets/images/social-4.png";

const SocialMediaGrid = () => {
  return (
    <Box my={"12"}>
      <Heading className="section-heading" align="center">
        Share your moments with us
      </Heading>
      <Heading mb={"9"} color={"#F03F3F"} align="center">
        #kiwiilab
      </Heading>
      <Grid
        mx={{ lg: "20rem" }}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
      >
        <Box mx="auto" justifyContent="center" aligItems="center">
          <Container>
            <Image src={social_1} alt="Washing_face" />
          </Container>
        </Box>
        <Box mx="auto">
          <Container>
            <Image src={social_2} alt="Shampoo_bottle" />
          </Container>
        </Box>
        <Box mx="auto">
          <Container>
            <Image src={social_3} alt="Grooming_kit" />
          </Container>
        </Box>
        <Box mx="auto">
          <Container>
            <Image src={social_4} alt="Beard" />
          </Container>
        </Box>
      </Grid>
    </Box>
  );
};

export default SocialMediaGrid;
