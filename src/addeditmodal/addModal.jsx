import { useEffect, useState } from "react";
import addEditModalscss from "./addEditModal.module.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function MyVerticallyCenteredModal({ setModalShow, fetchMovies, ...props }) {
  const [handleMovie, sethandleMovie] = useState({
    imageUrl: "",
    title: "",
    description: "",
    year: "",
    categori: "",
  });
  const addMovie = async (e) => {
    try {
      const response = await fetch("http://localhost:3000/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(handleMovie),
      });

      if (response.ok) {
        setModalShow(false);

        sethandleMovie({
          imageUrl: "",
          title: "",
          description: "",
          year: "",
          categori: "",
        });
        fetchMovies();
      }
    } catch (error) {
      console.error(error);
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
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className={addEditModalscss.addMovieModal}>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Movie
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
                  value={handleMovie.imageUrl}
                  onChange={(e) =>
                    sethandleMovie({ ...handleMovie, imageUrl: e.target.value })
                  }
                  type="text"
                  placeholder="imageUrl"
                  id="imageUrl"
                  className="form-control"
                />
              </li>
              <li>
                <label htmlFor="title">Moviename</label>
                <br />
                <input
                  name="title"
                  value={handleMovie.title}
                  onChange={(e) =>
                    sethandleMovie({ ...handleMovie, title: e.target.value })
                  }
                  type="text"
                  placeholder="Title"
                  id="title"
                  className="form-control"
                />
              </li>
              <li>
                <label htmlFor="description">Description</label>
                <br />
                <input
                  name="description"
                  value={handleMovie.description}
                  onChange={(e) =>
                    sethandleMovie({
                      ...handleMovie,
                      description: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Description"
                  className="form-control"
                  id="description"
                />
              </li>
              <li>
                <label htmlFor="year">Year</label>
                <br />
                <input
                  name="year"
                  value={handleMovie.year}
                  onChange={(e) =>
                    sethandleMovie({ ...handleMovie, year: e.target.value })
                  }
                  type="text"
                  placeholder="year"
                  id="year"
                  className="form-control"
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
                  <option value="">Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </li>
            </ul>
          </form>
        </Modal.Body>
        <Modal.Footer className={addEditModalscss.addMovieModal}>
          <Button
            onClick={() => {
              props.onHide();
              sethandleMovie({
                imageUrl: "",
                title: "",
                description: "",
                year: "",
                categori: "",
              });
            }}
          >
            Close
          </Button>
          <Button onClick={addMovie} disabled={isSaveButtonDisabled}>
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default MyVerticallyCenteredModal;
