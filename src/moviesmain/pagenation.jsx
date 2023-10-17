import Pagination from "react-bootstrap/Pagination";
import Pagenationscss from "./pagenation.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../redux/slices/slice";
import { useEffect } from "react";
import { fetchMovies } from "../redux/slices/getMoviesSlices";
function PagenationMain() {
  const currentPage = useSelector((state)=>state.movies.currentPage)
  const pageCount = useSelector((state)=>state.movies.pageCount)
  const searchQuery = useSelector((state)=> state.movies.searchQuery)
  const dispatch = useDispatch()
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchData();
    }, 800);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchQuery, currentPage]);
 
 
  const handlePageChange = (newPage) => {
    dispatch(setCurrentPage(newPage));
  };
  
  const fetchData = () => {
    dispatch(fetchMovies({ searchQuery, currentPage }));
  };
  
  
  
  return (
    <>
      <Pagination className={Pagenationscss.pagenation}>
        {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
          <Pagination.Item
            key={page}
            active={page === currentPage}
            onClick={() => dispatch(setCurrentPage(page))}
            className={Pagenationscss.pagenationItems}
          >
            {page}
          </Pagination.Item>
        ))}
      </Pagination>
    </>
  );
}
export default PagenationMain;
