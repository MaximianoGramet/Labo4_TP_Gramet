import React, { useState } from 'react';
import { nextPage, prevPage, getCurrentPageData } from '../services/pagination';

const Pagination = ({ data, pageSize }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / pageSize);

  return (
    <div>
      <button onClick={() => prevPage(currentPage, setCurrentPage)} disabled={currentPage === 1}>Previous</button>
      <button onClick={() => nextPage(currentPage, totalPages, setCurrentPage)} disabled={currentPage === totalPages}>Next</button>
      <div>
        {/* Render the data of the current page */}
        {getCurrentPageData(data, currentPage, pageSize).map((item, index) => (
          <div key={index}>{/* Render the elements of the current page here */}</div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
