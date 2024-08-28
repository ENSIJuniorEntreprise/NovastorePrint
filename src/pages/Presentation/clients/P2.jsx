import P1 from "./P1";
import { useState, useRef, useEffect } from "react";
import { getUsers } from "./Users";

function P2() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(2);
  const circlesRef = useRef(null);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  }



  return (
    <div className="App">
      <div ref={circlesRef}>
        <P1 Users={getUsers(page, limit)} /> 
      </div>
      <div className="circles"> {/* Use the ref for the container */}
        <span
          className={`dot1${page === 1 ? " selected" : ""}`}
          onClick={() => handlePageChange(1)}
        ></span>
        <span
          className={`dot2${page === 2 ? " selected" : ""}`}
          onClick={() => handlePageChange(2)}
        ></span>
        {/* <span
          className={`dot3${page === 3 ? " selected" : ""}`}
          onClick={() => handlePageChange(3)}
        ></span> */}
      </div>
    </div>
  );
}

export default P2;
