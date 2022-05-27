import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import { Box, Grid, Text, Image, Flex } from "@chakra-ui/react";

const HomePage = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  //   if (!products) return <div>Loading...</div>;
  //   console.log(products);
  console.log(products);
  return (
    <Box>
      <Grid templateColumns="repeat(3, 1fr)">
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
                </Box>
              </Link>
            );
          })
        )}
      </Grid>
    </Box>
  );
};

export default HomePage;
