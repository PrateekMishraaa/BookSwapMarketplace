import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Title: '',
    Author: '',
    Description: '',
    Condition: '',
    Price: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const { Title, Author, Description, Condition, Price } = formData;
    if (!Title || !Author || !Description || !Condition || !Price) {
      toast.error('All fields are required');
      return;
    }
    try {
      await axios.post('http://localhost:4000/api/upload-book', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      toast.success('Book uploaded successfully');
      navigate('/dashboard/view-books');

    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl space-y-5"
          encType="multipart/form-data"
        >
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">Post a Book</h2>

          <input
            type="text"
            name="Title"
            placeholder="Title"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={formData.Title}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="Author"
            placeholder="Author"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={formData.Author}
            onChange={handleChange}
            required
          />

          <textarea
            name="Description"
            placeholder="Description"
            className="w-full p-3 border border-gray-300 rounded-lg"
            rows="4"
            value={formData.Description}
            onChange={handleChange}
            required
          />

          <select
            name="Condition"
            value={formData.Condition}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          >
            <option value="">Select Condition</option>
            <option value="New">New</option>
            <option value="Like New">Like New</option>
            <option value="Used">Used</option>
          </select>

          <input
            type="text"
            name="Price"
            placeholder="Price (₹)"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={formData.Price}
            onChange={handleChange}
            required
          />

          {/* Optional image input for future use (currently not submitted) */}
          <div>
            <label className="block text-gray-600 mb-1">Image (Optional)</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="w-full p-3 border border-gray-300 rounded-lg"
              disabled // not needed now
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Post Book
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Dashboard;
