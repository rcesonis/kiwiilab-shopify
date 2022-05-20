import React from "react";
import Client from "shopify-buy";

const ShopContext = React.createContext();
// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN_NAME,
  storefrontAccessToken: process.env.REACT_APP_STORE_FRONT_ACCESS_TOKEN,
});

const shopProvider = () => {
  state = {
    product: {},
    products: [],
    checkout: {},
    isCartOpen: false,
    isMenuOpen: false,
  };
  return <div>shopContext</div>;
};

export default shopProvider;
