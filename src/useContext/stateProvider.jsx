import { createContext, useState, useEffect } from "react";
import { fetchMovies } from "../redux/slices/getMoviesSlices";
export const CountContext = createContext();

export default function CountProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [movieId, setMovieId] = useState("");
  const [showDelete, setShowDelete] = useState(false);
  const [handleMovie, sethandleMovie] = useState({
    imageUrl: "",
    title: "",
    description: "",
    year: "",
    categori: "",
  });
  const [buyMovies, SetBuyMovies] = useState();
  // async function fetchMovies() {
  //   try {
  //     setLoading(true);
  //     const response = await fetch(
  //       `http://localhost:3000/movies?q=${searchQuery}&_page=${currentPage}&_limit=10`
  //     );
  //     const data = await response.json();
  //     if (data?.length) {
  //       setMovies(data);
  //     }
  //     const calculatedPageCount = Math.ceil(
  //       response.headers.get("X-Total-Count") / 10
  //     );
  //     setPageCount(calculatedPageCount);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }
  // useEffect(() => {
  //   fetchMovies();
  // }, [searchQuery, currentPage]);
  // const addMovie = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3000/movies", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(handleMovie),
  //     });
  //     fetchMovies();
  //     if (response.ok) {
  //       sethandleMovie({
  //         imageUrl: "",
  //         title: "",
  //         description: "",
  //         year: "",
  //         categori: "",
  //       });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setModalShow(false);
  //     setMovieId("");
  //   }
  // };
  const editMovie = async (e) => {
    // try {
    //   await fetch(`http://localhost:3000/movies/${movieId}`, {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(handleMovie),
    //   });
    //   fetchMovies();
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <CountContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        modalShow,
        setModalShow,
        movies,
        setMovies,
        loading,
        setLoading,
        currentPage,
        setCurrentPage,
        pageCount,
        setPageCount,
        movieId,
        setMovieId,
        showDelete, 
        setShowDelete,
        // handleMovie,
        // sethandleMovie,
        // addMovie,
        fetchMovies,
        editMovie,
      }}
    >
      {children}
    </CountContext.Provider>
  );
}
