import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import wishlistReducer from "./features/wishlistSlice";
import { loadState, saveState } from "./localStorage";

const preloadedState =
  typeof window !== "undefined" ? loadState() : undefined;

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
  preloadedState,
});

if (typeof window !== "undefined") {
  store.subscribe(() => {
    saveState(store.getState());
  });
}