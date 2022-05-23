import React, { Component } from "react";
import Client from "shopify-buy";

const ShopContext = React.createContext();
// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN_NAME,
  storefrontAccessToken: process.env.REACT_APP_STORE_FRONT_ACCESS_TOKEN,
});

class ShopProvider extends Component {
  state = {
    product: {},
    products: [],
    checkout: {},
    isCartOpen: false,
    isMenuOpen: false,
  };

  componentDidMount() {
    const check = !localStorage.checkout_id
      ? this.createCheckout()
      : this.fetchCheckout(localStorage.checkout_id);
    return check;
  }

  // componentDidMount() {
  //   if (localStorage.checkout_id) {
  //   } else {
  //     this.createCheckout();
  //   }
  // }

  createCheckout = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem("checkout_id", checkout.id);
    this.setState({ checkout: checkout });
  };

  fetchCheckout = async (checkout_id) => {
    client.checkout.fetch(checkout_id).then((checkout) => {
      this.setState({ checkout: checkout });
    });
  };

  addItemtoCheckout = async () => {};

  removeLineItem = async (lineItemIdsToRemove) => {};

  fetchAllProducts = async () => {
    // Fetch all products in your shop
    const products = await client.product.fetchAll();
    // Do something with the products
    this.state.setState({ products: products });
  };

  fetchProductWithHandle = async (handle) => {
    // Fetch a single product by Handle
    const product = await client.product.fetchByHandle(handle);
    // Do something with the product
    this.state.setState({ product: product });
  };

  // closeCart = () => {};

  // openCart = () => {};

  // closeMenu = () => {};

  // openMenu = () => {};

  render() {
    return (
      <ShopContext.Provider value={0}>
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;
