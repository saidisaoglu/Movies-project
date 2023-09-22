import Pagination from "react-bootstrap/Pagination";
import Pagenationscss from "./pagenation.module.scss";
function PagenationMain({ currentPage, setCurrentPage, pageCount }) {
  return (
    <>
      <Pagination className={Pagenationscss.pagenation}>
        {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
          <Pagination.Item
            key={page}
            active={page === currentPage}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </Pagination.Item>
        ))}
      </Pagination>
  
    </>
  );
}
export default PagenationMain;
