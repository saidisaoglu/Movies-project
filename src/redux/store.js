import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slices/slice"

const store = configureStore({
  reducer: {
    movies:moviesReducer,
    
  },
});
 export default store;
 