import { useEffect, useState } from "react";
import addEditModalscss from "./addEditModal.module.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EditModal({ movieId, onHide, show, setShowEdit, fetchMovies }) {
  const [handleMovie, sethandleMovie] = useState({
    imageUrl: "",
    title: "",
    description: "",
    year: "",
    categori: "",
  });

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`http://localhost:3000/movies/${movieId}`);
        const data = await response.json();

        sethandleMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [movieId]);
  const editMovie = async (e) => {
    try {
      await fetch(`http://localhost:3000/movies/${movieId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(handleMovie),
      });
      fetchMovies();
    } catch (error) {
      console.log(error);
    } finally {
      setShowEdit(false);
    }
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
                    sethandleMovie({ ...handleMovie, imageUrl: e.target.value })
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
                    sethandleMovie({ ...handleMovie, title: e.target.value })
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
                  name="description"
                  defaultValue={handleMovie.description}
                  onChange={(e) =>
                    sethandleMovie({
                      ...handleMovie,
                      description: e.target.value,
                    })
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
                    sethandleMovie({ ...handleMovie, year: e.target.value })
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
                    sethandleMovie({ ...handleMovie, categori: e.target.value })
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
          <Button onClick={onHide}>Close</Button>
          <Button disabled={isSaveButtonDisabled} onClick={editMovie}>
            Save Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default EditModal;
