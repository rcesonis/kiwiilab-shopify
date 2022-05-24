import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/shopContext";

const HomePage = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  //   if (!products) return <div>Loading...</div>;
  //   console.log(products);

  return (
    <div>
      {!products ? (
        <div>Loading...</div>
      ) : (
        products.map((product) => {
          return <h1>{product.title}</h1>;
        })
      )}
    </div>
  );
};

export default HomePage;
