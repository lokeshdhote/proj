'use client';
import React from 'react';

const SuccessPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Submission Successful!</h1>
        <p className="text-lg mb-6">Thank you for submitting your dispute. We will review your information and get back to you shortly.</p>
        <button
          className="bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
