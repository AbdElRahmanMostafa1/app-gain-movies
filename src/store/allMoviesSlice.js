import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKEY, baseURL } from "../shared/url";
import axios from "axios";

export const fetchAllMovies = createAsyncThunk(
  "allMovies/fetchAllMovies",
  async (pageNum, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=24fbc4a844ea11002493c5933db3e0aa&language=en-US&page=${pageNum}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchSingleMovie = createAsyncThunk(
  "allMovies/fetchSingleMovie",
  async (movieId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIKEY}`
      );
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  allMovies: null,
  isLoading: false,
  succeed: false,
  error: null,
  singleMovie: null,
};

const allMoviesSlice = createSlice({
  name: "allMovies",
  initialState,
  extraReducers: {
    // ALL MOVIES
    [fetchAllMovies.pending]: (state) => {
      state.allMovies = null;
      state.isLoading = true;
      state.succeed = false;
      state.error = null;
    },
    [fetchAllMovies.fulfilled]: (state, action) => {
      state.allMovies = action.payload;
      state.isLoading = false;
      state.succeed = true;
    },
    [fetchAllMovies.rejected]: (state, action) => {
      state.isLoading = false;
      state.succeed = false;
      state.error = action.payload;
    },

    // SINGLE MOVIE
    [fetchSingleMovie.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchSingleMovie.fulfilled]: (state, action) => {
      state.singleMovie = action.payload;
      state.isLoading = false;
      state.succeed = true;
    },
    [fetchSingleMovie.rejected]: (state, action) => {
      state.isLoading = false;
      state.succeed = false;
      state.error = action.payload;
    },
  },
});

export default allMoviesSlice.reducer;
