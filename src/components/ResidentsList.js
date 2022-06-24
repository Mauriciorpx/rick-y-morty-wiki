import React from "react";
import { useState } from "react";
import ResidentInfo from "./ResidentInfo";

const ResidentsList = ({ residents }) => {
  /* se crea un nuevo arreglo */

  const [page, setPage] = useState(1);
  const characterNumber = 6;

  const lastIndex = characterNumber * page;
  const firstIndex = lastIndex - characterNumber;
  /* Se realiza un slice */
  const characterPaginated = residents?.slice(firstIndex, lastIndex);

  /* Determinar ultima pagina */
  const lastPage = Math.ceil(residents?.length / characterNumber);

  /* Numeros de paginas */

  const numbers = [];
  for (let i = 1; i <= lastPage; i++) {
    numbers.push(i);
  }

  return (
    <div className="resident-list">
      <div>
        {" "}
        <ul>
          {characterPaginated?.map((resident) => (
            <ResidentInfo residentUrl={resident} key={resident} />
          ))}
        </ul>
        <button
          className="nav-btn"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>
        {/* Map for number of pages */}
        {numbers.map((number) => (
          <button className="btn-numbers" onClick={() => setPage(number)}>
            {number}
          </button>
        ))}
        <button
          className="nav-btn"
          onClick={() => setPage(page + 1)}
          disabled={page === lastPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

/* <div key={resident}>
        {resident}
    </div> */

export default ResidentsList;
