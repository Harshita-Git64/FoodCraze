import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import favouriteReducer from "./favouriteRestaurantSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    favourite: favouriteReducer,
  },
});

export default appStore;
