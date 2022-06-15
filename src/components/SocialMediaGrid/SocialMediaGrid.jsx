import { Grid, Image, Box } from "@chakra-ui/react";
import social_1 from "../../assets/images/social-1.png";
import social_2 from "../../assets/images/social-2.png";
import social_3 from "../../assets/images/social-3.png";
import social_4 from "../../assets/images/social-4.png";

const SocialMediaGrid = () => {
  return (
    <Box>
      <h1>Share your moments with us</h1>
      <h1>#kiwiilab</h1>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
      >
        <Box>
          <Image src={social_1} alt="Dan Abramov" />
        </Box>
        <Box>
          <Image src={social_2} alt="Dan Abramov" />
        </Box>
        <Box>
          <Image src={social_3} alt="Dan Abramov" />
        </Box>
        <Box>
          <Image src={social_4} alt="Dan Abramov" />
        </Box>
      </Grid>
    </Box>
  );
};

export default SocialMediaGrid;
