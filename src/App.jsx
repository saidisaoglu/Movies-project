import { Navbar } from "./navbar/navbar";
import "./app.scss";
import { MainHeader } from "./mainheader/mainheader";
import { TopFilms } from "./top20films/topfilms";
import { MoviesMain } from "./moviesmain/moviesMain";
import { useState, useEffect } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  async function fetchMovies() {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:3000/movies?q=${searchQuery}&_page=${currentPage}&_limit=2`
      );
      const data = await response.json();
      if (data?.length) {
        setMovies(data);
      }
      const calculatedPageCount = Math.ceil(
        response.headers.get("X-Total-Count") / 2
      );
      setPageCount(calculatedPageCount);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchMovies();
  }, [searchQuery, currentPage]);
  return (
    <>
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        modalShow={modalShow}
        setModalShow={setModalShow}
        fetchMovies={fetchMovies}
      />
      <MainHeader />
      <TopFilms />
      <MoviesMain
        movies={movies}
        loading={loading}
        fetchMovies={fetchMovies}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageCount={pageCount}
      />
    </>
  );
}

export default App;
