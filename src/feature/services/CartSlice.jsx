import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  cartItems: [],
  wishListItems: [],
  totalAmount: 0,
  quantity: 0,
};

const STORAGE_KEY = "cartItems";
const WISH_LIST_STORAGE_KEY = "wishListItems";

const storedItems = Cookies.get(STORAGE_KEY);
const wishListItems = Cookies.get(WISH_LIST_STORAGE_KEY);
// console.log(STORAGE_KEY);

if (storedItems) {
  initialState.cartItems = JSON.parse(storedItems);
  initialState.totalAmount = calculateTotalAmount(initialState.cartItems);
  initialState.quantity = calculateQuantity(initialState.cartItems);
}
if (wishListItems) {
  initialState.wishListItems = JSON.parse(wishListItems);
}

function calculateTotalAmount(cartItems) {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

function calculateQuantity(cartItems) {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //add cart item to cart
    addToCart: (state, { payload }) => {
      const isExisted = state.cartItems.find((item) => item.id === payload.id);
      if (isExisted) {
        return state;
      } else {
        state.cartItems = [...state.cartItems, { ...payload, quantity: 1 }];
      }
      state.totalAmount = calculateTotalAmount(state.cartItems);
      state.quantity = calculateQuantity(state.cartItems);
      Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems));
    },

    //remove cart item from cart
    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== payload.id
      );
      state.totalAmount = calculateTotalAmount(state.cartItems);
      state.quantity = calculateQuantity(state.cartItems);
      Cookies.remove(STORAGE_KEY);
    },
    //increase item qty
    addItemQty: (state, { payload }) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      state.totalAmount = calculateTotalAmount(state.cartItems);
      state.quantity = calculateQuantity(state.cartItems);
      Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems));
    },
    // decrease item qty
    removeItemQty: (state, { payload }) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      state.totalAmount = calculateTotalAmount(state.cartItems);
      state.quantity = calculateQuantity(state.cartItems);
      Cookies.remove(STORAGE_KEY, initialState.quantity);
    },
    //add wishlist item
    addToWishList: (state, { payload }) => {
      const isExistedItem = state.wishListItems.find(
        (item) => item.id === payload.id
      );
      if (isExistedItem) {
        return state;
      } else {
        state.wishListItems = [
          ...state.wishListItems,
          { ...payload, quantity: 1 },
        ];
      }
      Cookies.set(WISH_LIST_STORAGE_KEY, JSON.stringify(state.wishListItems));
    },
    //remove wishList item
    removeFromWishList: (state, { payload }) => {
      state.wishListItems = state.wishListItems.filter(
        (item) => item.id !== payload.id
      );
      Cookies.remove(WISH_LIST_STORAGE_KEY);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addItemQty,
  removeItemQty,
  addToWishList,
  removeFromWishList,
} = cartSlice.actions;
export default cartSlice.reducer;
