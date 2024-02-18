// src/components/Pagination.tsx

import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
  disablePrev: boolean;
  disableNext: boolean;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onNextPage, onPrevPage, disablePrev, disableNext }) => {
  return (
    <div className="pagination mt-8 mb-8">
      <button className='bg-green-400 hover:bg-green-600 text-white w-20 h-10 rounded-lg' onClick={onPrevPage} disabled={disablePrev}>Previous</button>
      <span> Page {currentPage} of {totalPages} </span>
      <button className='bg-green-400 hover:bg-green-600 text-white w-20 h-10 rounded-lg' onClick={onNextPage} disabled={disableNext}> Next</button>
    </div>
  );
};

export default Pagination;
