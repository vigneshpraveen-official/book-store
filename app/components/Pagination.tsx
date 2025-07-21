'use client';

import { useState } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage?: number;
  totalItems?: number;
  showInfo?: boolean;
  showFirstLast?: boolean;
  maxVisiblePages?: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal' | 'rounded';
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage = 10,
  totalItems = 0,
  showInfo = true,
  showFirstLast = true,
  maxVisiblePages = 5,
  size = 'md',
  variant = 'default'
}: PaginationProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePageChange = (page: number) => {
    if (page === currentPage || page < 1 || page > totalPages || isAnimating) return;
    
    setIsAnimating(true);
    onPageChange(page);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Calculate visible page numbers
  const getVisiblePages = () => {
    const pages = [];
    const halfVisible = Math.floor(maxVisiblePages / 2);
    
    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  const visiblePages = getVisiblePages();

  // Size classes
  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-4 py-3 text-lg'
  };

  // Variant classes
  const getVariantClasses = (isActive: boolean, isDisabled: boolean) => {
    const baseClasses = `${sizeClasses[size]} font-medium transition-all duration-300 border`;
    
    if (variant === 'minimal') {
      return `${baseClasses} border-transparent ${
        isActive 
          ? 'text-white bg-blue-600' 
          : isDisabled 
            ? 'text-gray-600 cursor-not-allowed' 
            : 'text-gray-300 hover:text-white hover:bg-blue-600/20'
      }`;
    }
    
    if (variant === 'rounded') {
      return `${baseClasses} rounded-full border-gray-600 ${
        isActive 
          ? 'text-white gradient-blue shadow-blue' 
          : isDisabled 
            ? 'text-gray-600 border-gray-700 cursor-not-allowed' 
            : 'text-gray-300 hover:text-white hover:border-blue-500 hover:bg-blue-600/20'
      }`;
    }
    
    // default variant
    return `${baseClasses} border-gray-600 ${
      isActive 
        ? 'text-white gradient-blue shadow-blue' 
        : isDisabled 
          ? 'text-gray-600 border-gray-700 cursor-not-allowed' 
          : 'text-gray-300 hover:text-white hover:border-blue-500 hover:bg-blue-600/20'
    }`;
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex flex-col space-y-4">
      {/* Info Section */}
      {showInfo && totalItems > 0 && (
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 space-y-2 sm:space-y-0">
          <div>
            Showing <span className="text-blue-400 font-medium">{startItem}</span> to{' '}
            <span className="text-blue-400 font-medium">{endItem}</span> of{' '}
            <span className="text-blue-400 font-medium">{totalItems}</span> results
          </div>
          <div className="text-gray-500">
            Page {currentPage} of {totalPages}
          </div>
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
        {/* First Page */}
        {showFirstLast && currentPage > 2 && (
          <>
            <button
              onClick={() => handlePageChange(1)}
              className={getVariantClasses(false, false)}
              disabled={isAnimating}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            </button>
            {visiblePages[0] > 2 && (
              <span className="px-2 text-gray-500">...</span>
            )}
          </>
        )}

        {/* Previous Page */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className={getVariantClasses(false, currentPage === 1)}
          disabled={currentPage === 1 || isAnimating}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Page Numbers */}
        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`${getVariantClasses(page === currentPage, false)} ${
              page === currentPage ? 'transform scale-110' : ''
            } ${isAnimating && page === currentPage ? 'animate-pulse' : ''}`}
            disabled={isAnimating}
          >
            {page}
          </button>
        ))}

        {/* Next Page */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className={getVariantClasses(false, currentPage === totalPages)}
          disabled={currentPage === totalPages || isAnimating}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Last Page */}
        {showFirstLast && currentPage < totalPages - 1 && (
          <>
            {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
              <span className="px-2 text-gray-500">...</span>
            )}
            <button
              onClick={() => handlePageChange(totalPages)}
              className={getVariantClasses(false, false)}
              disabled={isAnimating}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Mobile-friendly page input */}
      <div className="flex items-center justify-center space-x-2 sm:hidden">
        <span className="text-sm text-gray-400">Go to page:</span>
        <input
          type="number"
          min="1"
          max={totalPages}
          value={currentPage}
          onChange={(e) => {
            const page = parseInt(e.target.value);
            if (page >= 1 && page <= totalPages) {
              handlePageChange(page);
            }
          }}
          className="w-16 px-2 py-1 text-sm bg-gray-800 border border-gray-600 rounded text-white text-center focus:outline-none focus:border-blue-500"
        />
        <span className="text-sm text-gray-400">of {totalPages}</span>
      </div>
    </div>
  );
};

export default Pagination;
