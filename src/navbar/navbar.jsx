import { useState } from "react";
import navbarScss from "./navbar.module.scss";
import Example from "../addeditmodal/addModal";
import Button from "react-bootstrap/Button";
import { ModalFooter } from "react-bootstrap";
import MyVerticallyCenteredModal from "../addeditmodal/addModal";
import { MoviesMainLeftPart } from "../moviesmain/moviesMainLeft";

export function Navbar({
  setSearchQuery,
  searchQuery,
  modalShow,
  setModalShow,
  fetchMovies,
}) {
  const handleChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <img src="\4kfilmizlesene (1).png" alt="" />
          </li>
          <li>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleChange}
            />
          </li>
          <li>
            <>
              <Button
                className={navbarScss.AddButton}
                variant="primary"
                onClick={() => setModalShow(true)}
              >
                Add Movie
              </Button>

              <MyVerticallyCenteredModal
                show={modalShow}
                setModalShow={setModalShow}
                onHide={() => setModalShow(false)}
                fetchMovies={fetchMovies}
              />
            </>
          </li>
        </ul>
      </nav>
    </header>
  );
}
