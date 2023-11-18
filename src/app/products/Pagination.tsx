import '../../assets/styles/main.scss';
import React, { useState } from 'react';
import { TProductsMeta } from './products';

type PaginationProps = {
  handlePageChange: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
};

const Pagination = (props: any) => {
  const totalPages = Math.ceil(props.totalItems / 8);

  const generatePageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (props.currentPage <= 2) {
        pageNumbers.push(1, 2, 3, '...', totalPages - 2, totalPages - 1, totalPages);
      } else if (props.currentPage === 3) {
        pageNumbers.push(2, 3, 4, '...', totalPages - 2, totalPages - 1, totalPages);
      } else if (props.currentPage >= totalPages - 2) {
        pageNumbers.push(totalPages - 5, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageNumbers.push(
          props.currentPage - 1,
          props.currentPage,
          props.currentPage + 1,
          '...',
          totalPages - 2,
          totalPages - 1,
          totalPages,
        );
      }
    }
    return pageNumbers;
  };

  return (
    <div className="pagination-container">
      <button onClick={() => props.handlePageChange(1)} disabled={props.currentPage === 1}>
        First
      </button>
      {generatePageNumbers().map((pageNumber, index) => (
        <span
          key={index}
          style={{
            padding: '5px',
            margin: '5px',
            fontSize: '14px',
            cursor: 'pointer',
            fontWeight: '600',
            color: pageNumber === props.currentPage ? '#4460F7' : '',
          }}
          onClick={() => props.handlePageChange(pageNumber)}
        >
          {pageNumber}
        </span>
      ))}
      <button
        onClick={() => props.handlePageChange(Math.ceil(props.totalItems / 8))}
        disabled={props.currentPage === Math.ceil(props.totalItems / 8)}
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;
