import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../context/shopContext";
import { Box, Heading, Grid, Text, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./FeaturedProducts.scss";

const FeaturedProducts = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  return (
    <Box marginY={12}>
      <Heading textAlign="center">Featured products</Heading>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
      >
        {!products ? (
          <div>Loading...</div>
        ) : (
          products.map((product) => {
            return (
              <Link key={product.id} to={`/products/${product.handle}`}>
                <Box
                  justifyContent="center"
                  _hover={{ opacity: "80%" }}
                  textAlign="center"
                >
                  <Image mx="auto" src={product.images[0].src} />
                  <Text>{product.title}</Text>
                  <Text>{product.variants[0].price}</Text>
                  <Button
                    backgroundColor="#F03F3F"
                    variant="solid"
                    borderRadius="0"
                  >
                    View product
                  </Button>
                </Box>
              </Link>
            );
          })
        )}
      </Grid>
    </Box>
  );
};

export default FeaturedProducts;
