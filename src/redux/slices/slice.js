  import { createSlice } from '@reduxjs/toolkit'
  import {  fetchMovies,addMovie, editMovie } from './getMoviesSlices';

  const initialState = {
      movieId:"",
      movies:[],
      loading:false,
      error:null,
      handleMovie:{
        imageUrl: "",
        title: "",
        description: "",
        year: "",
        categori: "",
      },
      pageCount:0,
      searchQuery:'',
      modalShow:false,
      showDelete:false,
      currentPage:0
  }

    const movieSlice = createSlice({
      name: 'movies',
      initialState,
      reducers: {
        setMovieId: (state, action) => {
            state.movieId = action.payload;
          },
          setMovies: (state, action) => {
            state.movies = action.payload;
          },
          setLoading: (state, action) => {
            state.loading = action.payload;
          },
          sethandleMovie: (state, action) => {
            state.handleMovie = action.payload;
          },
          setPageCount: (state, action) => {
            state.pageCount = action.payload;
          },
          setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
          },
          setModalShow: (state, action) => {
            state.modalShow = action.payload;
          },
          setShowDelete:(state,action)=>{
            state.showDelete=action.payload
          },
          setCurrentPage:(state,action)=>{
              state.currentPage=action.payload
            }
      },
      extraReducers:(builder)=>{
        builder.addCase(fetchMovies.pending,(state,action)=>{
          state.loading=true;
          state.movies=[];
          state.error=null;
        }),
        builder.addCase(fetchMovies.rejected, (state,action)=>{
          state.loading=false;
          state.movies=[];
          state.error=action.payload;
        }),
        builder.addCase(fetchMovies.fulfilled, (state,action)=>{
          state.loading=false;
          state.movies=action.payload;
          state.error=null;
        }),
        builder.addCase(addMovie.pending,(state,action)=>{
          state.loading=true;
          state.error=null;
        }),
        builder.addCase(addMovie.rejected, (state,action)=>{
          state.loading=false;
          state.movies=[];
          state.error=action.payload;
        }),
        builder.addCase(addMovie.fulfilled, (state,action)=>{
          state.loading=false;
          state.movies.push(action.payload)
          state.error=null;
        }),
        builder.addCase(editMovie.pending,(state,action)=>{
          state.loading=true;
          state.error=null;
        }),
        builder.addCase(editMovie.rejected, (state,action)=>{
          state.loading=false;
          
          state.error=action.payload;
        }),
        builder.addCase(editMovie.fulfilled, (state,action)=>{
          state.loading=false;
          state.handleMovie = {
            imageUrl: "",
            title: "",
            description: "",
            year: "",
            categori: ""
          }
          state.error=null;
        })
      },
    })
    export const { setMovieId,setMovies,setLoading,setPageCount,setSearchQuery,setModalShow,sethandleMovie,setShowDelete,setCurrentPage } = movieSlice.actions;
    export default movieSlice.reducer;