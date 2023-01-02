import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],

  cartTotalQuantity: 0,
  cartTotalAmsount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      // check if the item is already in the cart
      const existedProductIndex = state.cartItems.findIndex(
        (product) => product.id === action.payload.id
      );

      // if the product is already exist
      if (existedProductIndex >= 0) {
        // increase the quantity
        state.cartItems[existedProductIndex].cartQuantity += 1;
      } else {
        // add to cart
        const assembledProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(assembledProduct);

        // add to local storage
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },

    removeFromCart(state, action) {
      const updatedCartItems = state.cartItems.filter(
        (product) => product.id !== action.payload.id
      );
      // set updated items
      state.cartItems = updatedCartItems;

      // update local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});
