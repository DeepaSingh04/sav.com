import React from "react";

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          style={{
            padding: "10px",
            margin: "0 5px",
            backgroundColor: currentPage === index + 1 ? "#007BFF" : "#f0f0f0",
            color: currentPage === index + 1 ? "#fff" : "#000",
          }}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
