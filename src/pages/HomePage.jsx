import React from "react";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Banner from "../components/Banner/Banner";
import { Box } from "@chakra-ui/react";
import VideoBanner from "../components/VideoBanner/VideoBanner";
import AboutUsBanner from "../components/AboutUsBanner/AboutUsBanner";
import SocialMediaGrid from "../components/SocialMediaGrid/SocialMediaGrid";
import Subscribe from "../components/Subscribe/Subscribe";

const HomePage = () => {
  return (
    <Box>
      <HeroBanner />
      <FeaturedProducts />
      <Banner />
      <VideoBanner />
      <AboutUsBanner />
      <SocialMediaGrid />
      <Subscribe />
    </Box>
  );
};

export default HomePage;
