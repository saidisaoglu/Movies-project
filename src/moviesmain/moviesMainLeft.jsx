import { useContext, useEffect, useState } from "react";
import moviesmain from "./moviesmain.module.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import EditModal from "../addeditmodal/editModal";
import { CountContext } from "../useContext/stateProvider";
import { useDispatch, useSelector } from "react-redux";
import { setShowDelete,setMovieId,setModalShow, } from "../redux/slices/slice";
import { fetchMovies } from "../redux/slices/getMoviesSlices";
export function MoviesMainLeftPart() {
  const {
    // movies,
    // loading,
    // fetchMovies,
    
  } = useContext(CountContext);
  const movies = useSelector((state)=>state.movies.movies)
  const loading = useSelector((state)=>state.movies.loading )

  const showDelete = useSelector((state)=>state.movies.showDelete)
  const dispatch = useDispatch()
  const movieId = useSelector((state)=>state.movies.movieId)
  const modalShow = useSelector((state)=>state.movies.modalShow)
  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:3000/movies/${movieId}`, {
        method: "DELETE",
      });
      dispatch(fetchMovies({searchQuery:"", currentPage:0}));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setShowDelete(false));
    }
  };
  const handleDeleteId = (id) => {
    dispatch(setShowDelete(true));
    dispatch(setMovieId(id));
  };
  const handleEditId = (id) => {
    dispatch(setModalShow(true));
    dispatch(setMovieId(id));
  };
 
  const handleBuyMovieId = (id) => {
    dispatch(setMovieId(id));
  };
  if (loading) {
    return (
      <p>
        loading <img src="/list2.jpg" alt="" />
      </p>
    );
  } else {
    return (
      <>
        <div id="moviesListDiv" className={moviesmain.moviesLeftPart}>
          {movies.map((movie) => (
            <div key={movie.id} className={moviesmain.movieCard}>
              <img
                src={movie.imageUrl}
                alt="Movie Image"
                className={moviesmain.movieImage}
              />
              <div className={moviesmain.movieInfo}>
                <h3 className={moviesmain.movieTitle}>{movie.title}</h3>
                <p className={moviesmain.movieYear}>{movie.year}</p>
                <p className={moviesmain.movieDescription}>
                  {movie.description}
                </p>
              </div>

              <div className={moviesmain.movieButtons}>
                <button
                  className={moviesmain.movieButton}
                  onClick={() => handleEditId(movie.id)}
                >
                  Edit
                </button>
                <button
                  className={moviesmain.movieButton}
                  onClick={() => handleDeleteId(movie.id)}
                >
                  Delete
                </button>
                <button
                  onClick={() => handleBuyMovieId(movie.id)}
                  className={moviesmain.movieButton}
                >
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
        <Modal show={showDelete} onHide={() => dispatch(setShowDelete(false))}>
          <Modal.Header closeButton>
            <Modal.Title>Movie Delete?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure delete?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => dispatch(setShowDelete(false))}>
              Close
            </Button>
            <Button variant="primary" onClick={handleDelete}>
              Yes,delete
            </Button>
          </Modal.Footer>
        </Modal>
        <EditModal show={modalShow} onHide={() => dispatch(setModalShow(false))} />
      </>
    );
  }
}
