'use client';

import { useState } from 'react';
import Pagination from './Pagination';

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

const BooksSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const itemsPerPage = 8;

  // Sample book data
  const allBooks: Book[] = [
    {
      id: 1,
      title: "The Digital Revolution",
      author: "Sarah Johnson",
      price: 24.99,
      originalPrice: 29.99,
      rating: 4.8,
      reviews: 1250,
      image: "/api/placeholder/300/400",
      category: "Technology",
      isNew: true
    },
    {
      id: 2,
      title: "Mindful Leadership",
      author: "Michael Chen",
      price: 19.99,
      rating: 4.6,
      reviews: 890,
      image: "/api/placeholder/300/400",
      category: "Business",
      isBestseller: true
    },
    {
      id: 3,
      title: "The Art of Storytelling",
      author: "Emma Davis",
      price: 22.99,
      originalPrice: 27.99,
      rating: 4.9,
      reviews: 2100,
      image: "/api/placeholder/300/400",
      category: "Fiction"
    },
    {
      id: 4,
      title: "Quantum Physics Simplified",
      author: "Dr. Robert Kim",
      price: 34.99,
      rating: 4.7,
      reviews: 650,
      image: "/api/placeholder/300/400",
      category: "Science"
    },
    {
      id: 5,
      title: "Creative Design Thinking",
      author: "Lisa Anderson",
      price: 28.99,
      rating: 4.5,
      reviews: 420,
      image: "/api/placeholder/300/400",
      category: "Design",
      isNew: true
    },
    {
      id: 6,
      title: "Financial Freedom",
      author: "James Wilson",
      price: 21.99,
      rating: 4.8,
      reviews: 1800,
      image: "/api/placeholder/300/400",
      category: "Finance",
      isBestseller: true
    },
    {
      id: 7,
      title: "The Future of AI",
      author: "Dr. Anna Martinez",
      price: 32.99,
      originalPrice: 39.99,
      rating: 4.9,
      reviews: 980,
      image: "/api/placeholder/300/400",
      category: "Technology"
    },
    {
      id: 8,
      title: "Healthy Living Guide",
      author: "Mark Thompson",
      price: 18.99,
      rating: 4.4,
      reviews: 750,
      image: "/api/placeholder/300/400",
      category: "Health"
    },
    // Add more books for pagination demo
    ...Array.from({ length: 16 }, (_, i) => ({
      id: i + 9,
      title: `Sample Book ${i + 1}`,
      author: `Author ${i + 1}`,
      price: Math.floor(Math.random() * 30) + 15,
      rating: Math.floor(Math.random() * 10) / 2 + 4,
      reviews: Math.floor(Math.random() * 1000) + 100,
      image: "/api/placeholder/300/400",
      category: ['Fiction', 'Science', 'Business', 'Technology'][Math.floor(Math.random() * 4)]
    }))
  ];

  const categories = ['All', ...Array.from(new Set(allBooks.map(book => book.category)))];

  const filteredBooks = selectedCategory === 'All' 
    ? allBooks 
    : allBooks.filter(book => book.category === selectedCategory);

  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBooks = filteredBooks.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Smooth scroll to top of books section
    document.getElementById('books')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <section id="books" className="py-16 lg:py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Featured Books
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4">
            Discover our curated collection of books across various genres and categories
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                selectedCategory === category
                  ? 'gradient-blue text-white shadow-blue'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {currentBooks.map((book) => (
            <div
              key={book.id}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-blue"
            >
              {/* Book Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-64 bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6H6zm0 2h7v5h5v11H6V4z"/>
                  </svg>
                </div>
                
                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  {book.isNew && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      New
                    </span>
                  )}
                  {book.isBestseller && (
                    <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full font-medium">
                      Bestseller
                    </span>
                  )}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <button className="gradient-blue text-white px-6 py-2 rounded-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Quick View
                  </button>
                </div>
              </div>

              {/* Book Info */}
              <div className="p-5 lg:p-6">
                <div className="mb-3">
                  <span className="text-xs text-blue-400 font-medium uppercase tracking-wide">{book.category}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 leading-tight">
                  {book.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4">{book.author}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(book.rating) ? 'fill-current' : 'fill-gray-600'}`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">({book.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-blue-400">${book.price}</span>
                    {book.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">${book.originalPrice}</span>
                    )}
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-lg transition-all duration-300 hover:scale-105">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          itemsPerPage={itemsPerPage}
          totalItems={filteredBooks.length}
          showInfo={true}
          showFirstLast={true}
          maxVisiblePages={5}
          size="md"
          variant="default"
        />
      </div>
    </section>
  );
};

export default BooksSection;
