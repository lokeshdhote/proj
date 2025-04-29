// src/components/FilterSidebar.js
import React, { useState } from 'react';

const FilterSidebar = ({ onFiltersChange }) => {
  const [filters, setFilters] = useState({
    category: '',
    skill: '',
    minPrice: '',
    maxPrice: '',
    searchQuery: '',
    jobType: [],
    hourlyRate: [],
    experienceLevel: '',
    location: '',
    duration: '',
    clientRating: '', // Added clientRating to the state
    languages: '',
    industry: '',
    availability: '',
    deliveryTime: '',
    hasPortfolio: false,
    paymentMethod: '',
    certifications: [],
    teamAvailability: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'jobType' || name === 'hourlyRate' || name === 'certifications') {
        const updatedValues = checked
          ? [...filters[name], value]
          : filters[name].filter((v) => v !== value);
        setFilters({ ...filters, [name]: updatedValues });
      } else {
        setFilters({ ...filters, [name]: checked });
      }
    } else {
      setFilters({ ...filters, [name]: value });
    }
    onFiltersChange({ ...filters, [name]: value });
  };

  return (
    <div className="w-64 bg-white p-6 shadow-lg overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      {/* Category Filter */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Category</label>
        <select
          name="category"
          value={filters.category}
          onChange={handleInputChange}
          className="border border-gray-300 rounded p-2 w-full"
        >
          <option value="">All Categories</option>
          <option value="webDev">Web Development</option>
          <option value="design">Design</option>
          <option value="writing">Writing</option>
        </select>
      </div>

      {/* Skills Filter */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Skills</label>
        <select
          name="skill"
          value={filters.skill}
          onChange={handleInputChange}
          className="border border-gray-300 rounded p-2 w-full"
        >
          <option value="">All Skills</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="js">JavaScript</option>
        </select>
      </div>

      

      {/* Experience Level Filter */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Experience Level</label>
        <select
          name="experienceLevel"
          value={filters.experienceLevel}
          onChange={handleInputChange}
          className="border border-gray-300 rounded p-2 w-full"
        >
          <option value="">Select Experience Level</option>
          <option value="entry">Entry Level</option>
          <option value="intermediate">Intermediate</option>
          <option value="expert">Expert</option>
        </select>
      </div>

      {/* Language Filter */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Languages</label>
        <input
          name="languages"
          type="text"
          placeholder="Languages (e.g., English, Spanish)"
          value={filters.languages}
          onChange={handleInputChange}
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>

      {/* Client Rating Filter */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Rating</label>
        <select
          name="clientRating"
          value={filters.clientRating}
          onChange={handleInputChange}
          className="border border-gray-300 rounded p-2 w-full"
        >
          <option value="">Select  Rating</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
      </div>

      {/* Payment Method Filter */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Payment Method</label>
        <select
          name="paymentMethod"
          value={filters.paymentMethod}
          onChange={handleInputChange}
          className="border border-gray-300 rounded p-2 w-full"
        >
          <option value="">Select Payment Method</option>
          <option value="PayPal">PayPal</option>
          <option value="Razorpay">Razorpay</option>
          <option value="BankTransfer">Bank Transfer</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSidebar;
