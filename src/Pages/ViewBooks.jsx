import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewAllBooks = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/all-books");
      console.log("API Response:", response.data);

      // Defensive check for array
      const data = Array.isArray(response.data) ? response.data : response.data.books || [];
      setBooks(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };
  fetchData();
}, []);


  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-purple-100 py-10 px-5 md:px-20">
      <h1 className="text-4xl font-bold text-center mb-10 text-purple-800">
        📚 Explore Uploaded Books
      </h1>

      {loading ? (
        <p className="text-center text-lg text-gray-600">Loading books...</p>
      ) : error ? (
        <p className="text-center text-red-500 text-lg">Failed to load books. Please try again.</p>
      ) : books.length === 0 ? (
        <p className="text-center text-lg text-gray-600">
          No books found. Upload some books to get started!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={book.image || "https://via.placeholder.com/300x200"}
                alt={book.title || "Book Cover"}
                className="rounded-xl h-48 w-full object-cover mb-4"
              />
              <h2 className="text-xl font-semibold text-purple-700 capitalize">{book.Title}</h2>
              <p className="text-gray-500 text-sm mb-2">by {book.Author || "Unknown"}</p>
              <p className="text-gray-700 text-sm">{book.Description?.substring(0, 100)}...</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewAllBooks;
