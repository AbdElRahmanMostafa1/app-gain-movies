import { configureStore } from "@reduxjs/toolkit";
import allMoviesReducer from "./allMoviesSlice";

const store = configureStore({ reducer: { allMovies: allMoviesReducer } });

export default store;
