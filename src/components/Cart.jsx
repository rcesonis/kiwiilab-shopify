import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { MdClose } from "react-icons/md";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Grid,
  Text,
  Flex,
  IconButton,
  Image,
  Link,
  Box,
} from "@chakra-ui/react";

const Cart = () => {
  const { isCartOpen, closeCart, checkout, removeLineItem } =
    useContext(ShopContext);
  return (
    <>
      <Drawer isOpen={isCartOpen} placement="right" onClose={closeCart}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Shopping Cart</DrawerHeader>

          <DrawerBody>
            {checkout.lineItems?.length ? (
              checkout.lineItems.map((item) => (
                <Grid templateColumns="repeat(4, 1fr)" gap={1} key={item.id}>
                  <Flex alignItems="center" justifyContent="center">
                    <IconButton
                      cursor="pointer"
                      as={MdClose}
                      w={6}
                      h={6}
                      onClick={() => {
                        removeLineItem(item.id);
                      }}
                    />
                  </Flex>
                  <Flex alignItems="center" justifyContent="center">
                    <Image src={item.variant.image.src} />
                  </Flex>
                  <Flex alignItems="center" justifyContent="center">
                    <Text>{item.title}</Text>
                  </Flex>
                  <Flex alignItems="center" justifyContent="center">
                    <Text>{item.variant.price}</Text>
                  </Flex>
                </Grid>
              ))
            ) : (
              <Box h="100%" w="100%">
                <Text
                  h="100%"
                  display="flex"
                  flexDir="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  Your Cart is empty
                </Text>
              </Box>
            )}
          </DrawerBody>

          {checkout.lineItems?.length ? (
            <DrawerFooter>
              <Button w={"100%"}>
                <Link href={checkout.webUrl}>Checkout</Link>
              </Button>
            </DrawerFooter>
          ) : null}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;