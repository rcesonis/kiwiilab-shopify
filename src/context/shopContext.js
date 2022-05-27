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

  createCheckout = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem("checkout_id", checkout.id);
    this.setState({ checkout: checkout });
  };

  fetchCheckout = (checkout_id) => {
    client.checkout.fetch(checkout_id).then((checkout) => {
      this.setState({ checkout: checkout });
    });
  };

  addItemToCheckout = async (variantId, quantity) => {
    const lineItemsToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];
    const checkout = await client.checkout.addLineItems(
      this.state.checkout.id,
      lineItemsToAdd
    );
    this.setState({ checkout: checkout });
    this.openCart();
  };

  removeLineItem = async (lineItemIdsToRemove) => {
    const checkout = await client.checkout.removeLineItems(
      this.state.checkout.id,
      lineItemIdsToRemove
    );
    this.setState({ checkout: checkout });
  };

  fetchAllProducts = async () => {
    // Fetch all products in your shop
    const products = await client.product.fetchAll();
    // Do something with the products
    this.setState({ products: products });
  };

  fetchProductWithHandle = async (handle) => {
    // Fetch a single product by Handle
    const product = await client.product.fetchByHandle(handle);
    // Do something with the product
    this.setState({ product: product });
  };

  closeCart = () => {
    this.setState({ isCartOpen: false });
  };

  openCart = () => {
    this.setState({ isCartOpen: true });
  };

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  openMenu = () => {
    this.setState({ isMenuOpen: true });
  };

  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductWithHandle: this.fetchProductWithHandle,
          addItemToCheckout: this.addItemToCheckout,
          closeCart: this.closeCart,
          openCart: this.openCart,
          removeLineItem: this.removeLineItem,
          closeMenu: this.closeMenu,
          openMenu: this.openMenu,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;
