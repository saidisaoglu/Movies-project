import Pagination from "react-bootstrap/Pagination";
import Pagenationscss from "./pagenation.module.scss";
import { CountContext } from "../useContext/stateProvider";

import { useContext } from "react";

function PagenationMain() {
  const { currentPage, setCurrentPage, pageCount } = useContext(CountContext);
  return (
    <>
      <Pagination className={Pagenationscss.pagenation}>
        {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
          <Pagination.Item
            key={page}
            active={page === currentPage}
            onClick={() => setCurrentPage(page)}
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
