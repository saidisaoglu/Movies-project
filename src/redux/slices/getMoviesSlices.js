import { createAsyncThunk } from "@reduxjs/toolkit";
import { setModalShow, setMovieId, setMovies, setPageCount, sethandleMovie } from "./slice";
import { useSelector } from "react-redux";

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async ( {  searchQuery, currentPage }, thunkAPI) => {
    try {
      const response = await fetch(
        `http://localhost:3000/movies?q=${searchQuery}&_page=${currentPage}&_limit=10`
      );
     
      const data = await response.json();
      const calculatedPageCount = Math.ceil(
        response.headers.get("X-Total-Count") / 10
      );
      thunkAPI.dispatch(setMovies(data));
      thunkAPI.dispatch(setPageCount(calculatedPageCount));
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addMovie =createAsyncThunk(  "movies/addMovie",
async(post,{rejectWithValue})=>{
  try {
    console.log("handleMovie");
    const response = await fetch("http://localhost:3000/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
      const data = await response.json()    
      sethandleMovie({
        imageUrl: "",
        title: "",
        description: "",
        year: "",
        categori: "",
      }); 
      return data
    
  } catch (error) {
    return rejectWithValue(error.message);
  } finally {
    setModalShow(false);
    setMovieId("");
  }
})
export const editMovie = createAsyncThunk(  "movies/editMovie",
async(edit,{rejectWithValue})=>{
  try {
    const movieId = useSelector((state)=>state.movies.movieId)
    await fetch(`http://localhost:3000/movies/${movieId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(edit),
    });
    
  } catch (error) {
    return rejectWithValue(error.message);

  }
})