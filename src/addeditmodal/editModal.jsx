import {  useEffect } from "react";
import addEditModalscss from "./addEditModal.module.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setModalShow, setMovieId, sethandleMovie } from "../redux/slices/slice";
import { addMovie } from "../redux/slices/getMoviesSlices";
function EditModal({ onHide, show, ...props }) {
 
  const movieId =useSelector((state)=>state.movies.movieId) 
  const handleMovie =useSelector((state)=>state.movies.handleMovie) 

  const dispatch = useDispatch()
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`http://localhost:3000/movies/${movieId}`);
        const data = await response.json();
        dispatch(sethandleMovie(data));
        return data
      } catch (error) {
        console.log(error);
      }
    };
  }, [movieId]);
  const handleSubmit = (movieId) => {
    if (movieId) {
      dispatch(editMovie(movieId));
      console.log(movieId);
    } else {
      dispatch(addMovie(handleMovie));
    }
    dispatch(setMovieId(""));

    dispatch(setModalShow(false));
  };

  const isSaveButtonDisabled =
    !handleMovie.imageUrl ||
    !handleMovie.title ||
    !handleMovie.categori ||
    !handleMovie.description ||
    !handleMovie.year;
  return (
    <>
      <Modal
        {...props}
        onHide={onHide}
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className={addEditModalscss.addMovieModal}>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={addEditModalscss.addMovieModal}>
          <form>
            <ul>
              <li>
                <label htmlFor="imageUrl">Imageurl</label>
                <br />
                <input
                  name="imageUrl"
                  defaultValue={handleMovie.imageUrl}
                  onChange={(e) =>
                    dispatch(sethandleMovie({ ...handleMovie, imageUrl: e.target.value }))
                  }
                  type="text"
                  placeholder="imageUrl"
                  id="imageUrl"
                />
              </li>
              <li>
                <label htmlFor="title">Moviename</label>
                <br />
                <input
                  name="title"
                  defaultValue={handleMovie.title}
                  onChange={(e) =>
                    dispatch(sethandleMovie({ ...handleMovie, title: e.target.value }))
                  }
                  type="text"
                  placeholder="Title"
                  id="title"
                />
              </li>
              <li>
                <label htmlFor="description">Description</label>
                <br />
                <input
                  maxLength="220"
                  name="description"
                  defaultValue={handleMovie.description}
                  onChange={(e) =>
                    dispatch(sethandleMovie({
                      ...handleMovie,
                      description: e.target.value,
                    }))
                  }
                  type="text"
                  placeholder="Description"
                  id="description"
                />
              </li>
              <li>
                <label htmlFor="year">Year</label>
                <br />
                <input
                  name="year"
                  defaultValue={handleMovie.year}
                  onChange={(e) =>
                    dispatch(sethandleMovie({ ...handleMovie, year: e.target.value }))
                  }
                  type="text"
                  placeholder="year"
                  id="year"
                />
              </li>
              <li>
                <label htmlFor="categori">Categori</label>
                <select
                  name="categori"
                  defaultValue={handleMovie.categori}
                  onChange={(e) =>
                    dispatch(sethandleMovie({ ...handleMovie, categori: e.target.value }))
                  }
                  id="categori"
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="0">Open this select menu</option>
                  <option value="1">Aile</option>
                  <option value="2">Macera</option>
                  <option value="3">Three</option>
                </select>
              </li>
            </ul>
          </form>
        </Modal.Body>
        <Modal.Footer className={addEditModalscss.addMovieModal}>
          <Button
            onClick={() => {
              dispatch(setModalShow(false));
              dispatch(sethandleMovie({
                imageUrl: "",
                title: "",
                description: "",
                year: "",
                categori: "",
              }));
              dispatch(setMovieId(""));
            }}
          >
            Close
          </Button>
          <Button
            disabled={isSaveButtonDisabled}
            onClick={() => handleSubmit()}
          >
            Save Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default EditModal;
