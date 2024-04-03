import { createSlice } from "@reduxjs/toolkit";

const favouriteRestaurantSlice = createSlice({
  name: "FavouriteRestaurant",
  initialState: {
    favouriteRestaurantList: [],
  },
  reducers: {
    addToFavourites: (state, action) => {
      state.favouriteRestaurantList.push(action.payload);
      //console.log(action.payload)
    },
    removeFromFavourites: (state, action) => {
      // state.favouriteRestaurants.push(action.payload)
      state.favouriteRestaurantList.splice(action.payload, 1);
    },
    clearFavouriteItems: (state) => {
      state.favouriteRestaurantList.length = 0;
    },
  },
});

export default favouriteRestaurantSlice.reducer;
export const { addToFavourites, removeFromFavourites, clearFavouriteItems } =
  favouriteRestaurantSlice.actions;
