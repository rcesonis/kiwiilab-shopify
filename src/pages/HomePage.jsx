import React from "react";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Banner from "../components/Banner/Banner";
import { Box } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Box>
      <HeroBanner />
      <FeaturedProducts />
      <Banner />
    </Box>
  );
};

export default HomePage;
