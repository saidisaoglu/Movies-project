
import navbarScss from "./navbar.module.scss";
import Button from "react-bootstrap/Button";
import EditModal from "../addeditmodal/editModal";
import { useDispatch, useSelector } from "react-redux";
import  { setModalShow, setSearchQuery,sethandleMovie } from "../redux/slices/slice";

export function Navbar() {
  const handleChange = (event) => {
    const { value } = event.target;
    dispatch(setSearchQuery(value));
  };


  const searchQuery= useSelector((state)=>state.movies.searchQuery)
  const dispatch=useDispatch()
  const modalShow = useSelector((state)=>state.movies.modalShow)

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
                  dispatch(setModalShow(true));
                  dispatch(sethandleMovie({
                    imageUrl: "",
                    title: "",
                    description: "",
                    year: "",
                    categori: "",
                  }));
                }}
              >
                Add Movie
              </Button>
              <Button className={navbarScss.AddButton} variant="primary">
                Show buying movies
              </Button>
              <EditModal show={modalShow} onHide={() => dispatch(setModalShow(false))} />
            </>
          </li>
        </ul>
      </nav>
    </header>
  );
}
