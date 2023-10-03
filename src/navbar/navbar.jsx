import { useContext, useState } from "react";
import navbarScss from "./navbar.module.scss";
import Button from "react-bootstrap/Button";
import { CountContext } from "../useContext/stateProvider";
import EditModal from "../addeditmodal/editModal";

export function Navbar() {
  const handleChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };
  const {
    setSearchQuery,
    searchQuery,
    setModalShow,
    modalShow,
    sethandleMovie,
  } = useContext(CountContext);

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
                onClick={() => {
                  setModalShow(true);
                  sethandleMovie({
                    imageUrl: "",
                    title: "",
                    description: "",
                    year: "",
                    categori: "",
                  });
                }}
              >
                Add Movie
              </Button>
              <Button className={navbarScss.AddButton} variant="primary">
                Show buying movies
              </Button>
              <EditModal show={modalShow} onHide={() => setModalShow(false)} />
            </>
          </li>
        </ul>
      </nav>
    </header>
  );
}
